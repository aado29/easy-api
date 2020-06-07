'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShopSchema extends Schema {
  up () {
    this.create('shops', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('description', 100).notNullable()
      table.string('type', 15).notNullable()
      table.boolean('has_delivery').defaultTo(true)
      table.string('logo', 255).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('shops')
  }
}

module.exports = ShopSchema
