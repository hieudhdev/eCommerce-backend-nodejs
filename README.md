## Overview project
- This project is a simple RESTful API application about eCommerce
- A use case of Clean Architecture in Node.js comprising of Nodejs - Express.js, MongoDB as the main (but replaceable) infrastructure.
## Note list (Todos list)
- Init project structure, folder and packages
- Database connect MongoDb - Singleton Pattern
- .env config (mongodb.config) for [dev/prod] environment
- Sign up with refresh token, access token using JWT - public key/private key using crypto module (node v19)
- Middleware for api and permissions
- Handle error for api
- Make api response use class (ES6+)
- Auth middleware for user/shop
- Api access for login/logout [user/shop]
- Handle refresh token
- Api product using factory method, strategy pattern
    - [x] Create/update product by shop
    - [x] Publish/unPublish a product
    - [x] Get all drafts product
    - [x] Get list search products
    - [x] Get all products for home page
    - [x] Get detail products
- Api inventory
    - [x] add stock to inventory
- Api discount
    - [x] create discount
    - [x] get all discounts of shop
    - [x] get all discounts by a product
    - [x] get discount amount
    - [ ] update discount
- Api cart
    - [x] add products to cart
    - [x] update cart
    - [x] delete cart
    - [x] get cart
- Api order
    - [x] checkout review
    - [ ] get an/all order of an user
    - [ ] cancel order
    - [ ] update status order by shop
