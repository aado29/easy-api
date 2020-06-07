'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductProductCategorySchema extends Schema {
  up () {
    this.create('product_product_category', (table) => {
      table.increments()
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.integer('product_category_id').unsigned().references('id').inTable('product_categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_product_category')
  }
}

module.exports = ProductProductCategorySchema
