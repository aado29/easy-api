'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Shop extends Model {
  categories() {
    return this.belongsToMany('App/Models/ShopCategory');
  }

  reviews() {
    return this.hasMany('App/Models/ShopReview');
  }

  products() {
    return this.hasMany('App/Models/ShopReview');
  }
}

module.exports = Shop
