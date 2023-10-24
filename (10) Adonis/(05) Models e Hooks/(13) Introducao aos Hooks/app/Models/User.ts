import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  // tabela Users - id - name - age - password

  // Criar uma funçao que verifica se esta buscando um produto
  // se estiver, executa a função gravar_os_dados_na_tabela_views_produto()

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public age: number

  @column( {serializeAs: null} ) // Não ira voltar pro Controller
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
