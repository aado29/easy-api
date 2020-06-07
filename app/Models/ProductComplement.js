'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductComplement extends Model {
  complementType() {
    return this.belongsTo('App/Models/ProductComplementType');
  }
}

module.exports = ProductComplement
