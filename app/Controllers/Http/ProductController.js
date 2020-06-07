'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Product = use('App/Models/Product');
const ProductCategory = use('App/Models/ProductCategory');
const ProductComplementType = use('App/Models/ProductComplementType');

class ProductController {
  /**
   * Display a single product.
   * GET shops/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const productId = params.id;
    const product = await Product.find(productId)
    await product.loadMany(['categories', 'complementTypes.complements', 'products'])

    response.json(product);
  }

  /**
   * Display complements types of a product.
   * GET shops/:id/complement-types
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async complementTypes ({ params, request, response, view }) {
    const productId = params.id;
    const productComplementTypes = await ProductComplementType.query()
      .where('product_id', productId)
      .with('complements')
      .fetch();

    response.json(productComplementTypes);
  }

  /**
   * Display all product ctagories.
   * GET shop/categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async listCategories ({ params, request, response, view }) {
    const categories = await ProductCategory.all();

    response.json(categories);
  }
}

module.exports = ProductController
