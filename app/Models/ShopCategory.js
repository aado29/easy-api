'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ShopCategory extends Model {
  shops() {
    return this.belongsToMany('App/Models/ShopCategory');
  }
}

module.exports = ShopCategory
