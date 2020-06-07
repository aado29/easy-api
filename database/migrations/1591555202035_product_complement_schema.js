'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductComplementSchema extends Schema {
  up () {
    this.create('product_complements', (table) => {
      table.increments()
      table.integer('product_complement_type_id').unsigned().references('id').inTable('product_complement_types')
      table.string('name', 20).defaultTo('')
      table.boolean('increment').defaultTo(false)
      table.integer('price').defaultTo(0)
      table.boolean('disabled').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('product_complements')
  }
}

module.exports = ProductComplementSchema
