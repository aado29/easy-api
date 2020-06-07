'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductComplementTypeSchema extends Schema {
  up () {
    this.create('product_complement_types', (table) => {
      table.increments()
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.string('name', 50).defaultTo('')
      table.boolean('required').defaultTo(false)
      table.integer('max_selectable', 2).defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('product_complement_types')
  }
}

module.exports = ProductComplementTypeSchema
