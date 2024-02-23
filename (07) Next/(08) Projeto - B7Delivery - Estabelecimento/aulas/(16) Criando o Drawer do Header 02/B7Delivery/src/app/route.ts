import { redirect } from "next/navigation";

// Quando acessado a raiz do projeto, sera redirecionado a /pedidos
export async function GET(request: Request) {
   redirect('/pedidos')
}