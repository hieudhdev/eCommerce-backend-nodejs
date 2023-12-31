'use strict'

const { product, electronic, clothing } = require('../models/product.model')
const { AuthFailureError, NotFoundError, BabRequestError } = require('../core/error.response')

// define Factory class to create a product (FACTORY DESIGN METHOD)
class ProductFactory {
    /*
        type: 'Clothing',
        payload 
    */

    static async createProduct (type, payload) {
        switch (type) {
            case 'Electronics': 
                return new Electronic(payload).createProduct()
            case 'Clothing': 
                return new Clothing(payload).createProduct()
            default: 
                throw new BabRequestError(`Invalid product type ${type}`)
        }
    }

}

// define base product class
class Product {

    constructor({
        product_name, product_thumb, product_description, product_price, 
        product_quantity, product_type, product_shop, product_attributes
    }) {
        this.product_name = product_name
        this.product_thumb = product_thumb
        this.product_description = product_description
        this.product_price = product_price
        this.product_quantity = product_quantity
        this.product_type = product_type
        this.product_shop = product_shop
        this.product_attributes = product_attributes
    }

    async createProduct (product_id) {
        return await product.create({ ...this, _id: product_id })
    }

}

// define sub-class for product type = clothing
class Clothing extends Product {
    // override method
    async createProduct () {
        const newClothing = await clothing.create(this.product_attributes)
        if (!newClothing) throw new BabRequestError('Create new Clothing error')

        const newProduct = await super.createProduct()
        if (!newProduct) throw new BabRequestError('Create new Product error')

        return newProduct
    }
}

// define sub-class for product type = electronics
class Electronic extends Product {
    // override method
    async createProduct () {
        const newElectronic = await electronic.create({
            ...this.product_attributes,
            product_shop: this.product_shop
        })
        if (!newElectronic) throw new BabRequestError('Create new Clothing error')

        const newProduct = await super.createProduct(newElectronic._id)
        if (!newProduct) throw new BabRequestError('Create new Product error')

        return newProduct
    }
}

module.exports = ProductFactory