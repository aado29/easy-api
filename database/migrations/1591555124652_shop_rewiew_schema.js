'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShopRewiewSchema extends Schema {
  up () {
    this.create('shop_rewiews', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('shop_id').unsigned().references('id').inTable('shops')
      table.string('comment', 250).defaultTo('')
      table.integer('rating', 1).defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('shop_rewiews')
  }
}

module.exports = ShopRewiewSchema
