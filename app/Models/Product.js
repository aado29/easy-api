'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  shop() {
    return this.belongsTo('App/Models/Shop');
  }

  categories() {
    return this.belongsToMany('App/Models/ProductCategory');
  }

  complementTypes() {
    return this.hasMany('App/Models/ProductComplementType');
  }

  products() {
    return this.hasMany('App/Models/Product');
  }
}

module.exports = Product
