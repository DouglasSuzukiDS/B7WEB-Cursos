import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.dateTime('due_date').notNullable()
      table.string('description', 100).nullable()
      table.boolean('is_done').defaultTo(false)

      table.integer('categerie_id').nullable() // Todo => Alterar relacionamento

      table.integer('user_id')
        .unsigned().references('id').inTable('users')

      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
