'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Shop = use('App/Models/Shop');
const ShopCategory = use('App/Models/ShopCategory');
const ShopReview = use('App/Models/ShopReview');
const Product = use('App/Models/Product');

/**
 * Resourceful controller for interacting with shops
 */
class ShopController {
  /**
   * Show a list of all shops.
   * GET shops
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const shops = await Shop.query()
      .with('categories')
      .fetch();

    response.json(shops);
  }

  /**
   * Render a form to be used for creating a new shop.
   * GET shops/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new shop.
   * POST shops
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single shop.
   * GET shops/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const shopId = params.id;
    const shop = await Shop.find(shopId)
    await shop.load('categories')

    response.json(shop);
  }

  /**
   * Display a single shop.
   * GET shops/:id/reviews
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async reviews ({ params, request, response, view }) {
    const shopId = params.id;
    const reviews = await ShopReview.query()
      .where('shop_id', shopId)
      .with('user')
      .fetch();

    response.json(reviews);
  }

  /**
   * Display a single shop.
   * GET shops/:id/products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async products ({ params, request, response, view }) {
    const all = request.all();
    const shopId = params.id;
    const products = await Product.query()
      .where('shop_id', shopId)
      .where('product_id', null)
      .whereHas('categories', (builder) => {
        if (all.category_id) {
          builder.where('product_category_id', all.category_id)
        }
      }, '>', 0)
      .with('categories')
      .fetch();

    response.json(products);
  }

  /**
   * Display all shop ctagories.
   * GET shop/categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async listCategories ({ params, request, response, view }) {
    const categories = await ShopCategory.all();

    response.json(categories);
  }

  /**
   * Render a form to update an existing shop.
   * GET shops/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update shop details.
   * PUT or PATCH shops/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a shop with id.
   * DELETE shops/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ShopController
