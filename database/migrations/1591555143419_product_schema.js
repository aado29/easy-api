'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.integer('shop_id').unsigned().references('id').inTable('shops')
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.string('name', 80).defaultTo('')
      table.string('description', 250).defaultTo('')
      table.integer('price', 11).defaultTo(0)
      table.string('image', 255).nullable()
      table.string('type', 15).defaultTo('REGULAR')
      table.string('conetnt', 15).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
