'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShopShopCategorySchema extends Schema {
  up () {
    this.create('shop_shop_category', (table) => {
      table.increments()
      table.integer('shop_id').unsigned().references('id').inTable('shops')
      table.integer('shop_category_id').unsigned().references('id').inTable('shop_categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('shop_shop_category')
  }
}

module.exports = ShopShopCategorySchema
