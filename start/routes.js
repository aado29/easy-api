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
  Route.get('product/categories', 'ProductController.listCategories')
}).prefix('api/v1')

Route.on('/').render('welcome')
