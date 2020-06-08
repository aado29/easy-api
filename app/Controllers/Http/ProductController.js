'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Product = use('App/Models/Product');
const ProductCategory = use('App/Models/ProductCategory');
const ProductComplementType = use('App/Models/ProductComplementType');
const ProductComplement = use('App/Models/ProductComplement');

class ProductController {
  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    const productId = params.id;
    const product = await Product.find(productId)
    await product.loadMany(['categories', 'complementTypes.complements', 'products'])

    response.json(product);
  }

  /**
   * Display complements types of a product.
   * GET products/:id/complement-types
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async complementTypes ({ params, response }) {
    const productId = params.id;
    const productComplementTypes = await ProductComplementType.query()
      .where('product_id', productId)
      .with('complements')
      .fetch();

    response.json(productComplementTypes);
  }

  /**
   * Create/save a new complement type of a product.
   * POST products/:id/complement-types
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async storeComplementType ({ params, request, response, view }) {
    const all = request.all();
    const productId = params.id;
    const product = await Product.find(productId);
    const productComplementType = await product.complementTypes()
      .create({
        name: all.name,
        max_selectable: all.max_selectable,
        required: all.required,
      });

    response.json(productComplementType);
  }

  /**
   * Update complement type of a product.
   * PUT or PATCH products/:id/complement-types/:complement_type_id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async updateComplementType ({ params, request, response }) {
    const all = request.all();
    const productId = params.id;
    const productComplementTypeId = params.complement_type_id;
    const product = await Product.find(productId);

    await product.complementTypes()
      .where('id', productComplementTypeId)
      .update({
        name: all.name,
        max_selectable: all.max_selectable,
        required: all.required,
      })

    const productComplementType = await ProductComplementType.find(productComplementTypeId);

    response.json(productComplementType);
  }

  /**
   * Delete complements types of a product.
   * DELETE products/:id/complement-types/:complement_type_id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroyComplementType ({ params, response }) {
    const productId = params.id;
    const productComplementTypeId = params.complement_type_id;
    const productComplementType = await ProductComplementType.find(productComplementTypeId);
    const product = await Product.find(productId);

    await product.complementTypes()
      .where('id', productComplementTypeId)
      .delete()

    response.json(productComplementType);
  }

  /**
   * Create/save a new complements of a product.
   * POST products/:id/complement-types/:complement_type_id/complements
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async storeComplement ({ params, request, response }) {
    const all = request.all();
    const productComplementTypeId = params.complement_type_id;
    const productComplementType = await ProductComplementType.find(productComplementTypeId);
    const productComplement = await productComplementType.complements()
      .create({
        name: all.name,
        increment: all.price ? 1 : 0,
        price: all.price,
        disabled: all.disabled,
      });

    response.json(productComplement);
  }

  /**
   * Update complement of a product.
   * PUT or PATCH products/:id/complement-types/:complement_type_id/complements/:complement_id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async updateComplement ({ params, request, response }) {
    const all = request.all();
    const productComplementTypeId = params.complement_type_id;
    const productComplementId = params.complement_id;
    const productComplementType = await ProductComplementType.find(productComplementTypeId);

    await productComplementType.complements()
      .where('id', productComplementId)
      .update({
        name: all.name,
        increment: all.price > 0 ? 1 : 0,
        price: all.price,
        disabled: all.disabled,
      })

    const productComplement = await ProductComplement.find(productComplementId);

    response.json(productComplement);
  }

  /**
   * Delete complements types of a product.
   * DELETE products/:id/complement-types/:complement_type_id/complements/:complement_id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroyComplement ({ params, response }) {
    const productId = params.id;
    const productComplementTypeId = params.complement_type_id;
    const productComplementId = params.complement_id;
    const productComplement = await ProductComplement.find(productComplementId);
    const productComplementType = await ProductComplementType.find(productComplementTypeId);

    await productComplementType.complements()
      .where('id', productComplementId)
      .delete()

    response.json(productComplement);
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
