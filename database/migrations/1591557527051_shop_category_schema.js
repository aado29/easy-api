'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShopCategorySchema extends Schema {
  up () {
    this.create('shop_categories', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('shop_categories')
  }
}

module.exports = ShopCategorySchema
