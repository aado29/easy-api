'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ShopReview extends Model {
  shop() {
    return this.belongsTo('App/Models/Shop');
  }

  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = ShopReview
