'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductComplementType extends Model {
  product() {
    return this.belongsTo('App/Models/Product');
  }

  complements() {
    return this.hasMany('App/Models/ProductComplement');
  }
}

module.exports = ProductComplementType
