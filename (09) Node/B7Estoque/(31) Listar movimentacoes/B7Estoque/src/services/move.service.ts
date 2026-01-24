import { and, eq, sql } from "drizzle-orm";
import { db } from "../db/connection";
import { moves, NewMove, products } from "../db/schema";
import { AppError } from "../utils/apperror";
import { ListMovesInput } from "../validators/move.validator";

export const addMove = async (data: Omit<NewMove, 'unitPrice'>) => {

   return await db.transaction(async (tx) => {
      // 01) Verificar se o produto existe e pegar o preço / quantity
      const productResult = await tx
         .select({
            quantity: products.quantity,
            unitPrice: products.unitPrice
         })
         .from(products)
         .where(eq(products.id, data.productId))
         .for('update') // Trava o DB ate as ações serem concluídas

      if (productResult.length === 0) {
         throw new AppError('Produto não encontrado.', 404)
      }

      const currentQty = parseFloat(productResult[0].quantity)
      const moveQty = parseFloat(data.quantity)

      // 02) Se for OUT, verificar estoque
      if (data.moveType === 'out') {
         if (currentQty < moveQty) {
            throw new AppError(`Estoque insuficiente. Disponível: ${currentQty}, solicitado: ${moveQty}`, 400)
         }
      }

      const unitPrice = productResult[0].unitPrice

      // 03) Inserir a movimentação no banco
      const result = await tx
         .insert(moves)
         .values({ ...data, unitPrice })
         .returning()

      const move = result[0]

      const newQty = data.moveType === 'in' ? currentQty + moveQty : currentQty - moveQty

      // 04) Atualizar a quantidade no produto
      await tx
         .update(products)
         .set({ quantity: newQty.toString(), updatedAt: new Date() })
         .where(eq(products.id, data.productId))

      return move
   })
}

export const listMoves = async (filters: ListMovesInput) => {
   const conditions = []

   if (filters.productId) {
      conditions.push(eq(moves.productId, filters.productId))
   }

   const movesList = await db
      .select({
         id: moves.id,
         productId: moves.productId,
         productName: products.name,
         userId: moves.userId,
         moveType: moves.moveType,
         quantity: moves.quantity,
         unitPrice: moves.unitPrice,
         createdAt: moves.createdAt,
      })
      .from(moves)
      .leftJoin(products, eq(moves.productId, products.id))
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(sql`${moves.createdAt} DESC`)
      .offset(filters.offset)
      .limit(filters.limit)

   return movesList
}