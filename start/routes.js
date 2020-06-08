'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('shop/categories', 'ShopController.listCategories')
  Route.get('shops', 'ShopController.index')
  Route.get('shops/:id', 'ShopController.show')
  Route.get('shops/:id/reviews', 'ShopController.reviews')
  Route.get('shops/:id/products', 'ShopController.products')

  Route.get('products/:id', 'ProductController.show')
  Route.get('products/:id/complement-types', 'ProductController.complementTypes')
  Route.post('products/:id/complement-types', 'ProductController.storeComplementType')
  Route.put('products/:id/complement-types/:complement_type_id', 'ProductController.updateComplementType')
  Route.delete('products/:id/complement-types/:complement_type_id', 'ProductController.destroyComplementType')
  Route.post('products/:id/complement-types/:complement_type_id/complements', 'ProductController.storeComplement')
  Route.put('products/:id/complement-types/:complement_type_id/complements/:complement_id', 'ProductController.updateComplement')
  Route.delete('products/:id/complement-types/:complement_type_id/complements/:complement_id', 'ProductController.destroyComplement')
  Route.get('product/categories', 'ProductController.listCategories')
}).prefix('api/v1')

Route.on('/').render('welcome')
