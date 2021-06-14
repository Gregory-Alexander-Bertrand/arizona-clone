import React from 'react'
import  '../CssFiles/ProductPage.css'


const ProductPage = () => {
    return (
        <div className="product-page">
            <div className="product-card">
                <img src="https://cdn.shopify.com/s/files/1/0087/6065/5938/products/az-shopify-product-KRAFT_10CT_AP_883d2677-5c30-46a3-b406-20e7db509de9_2000x.png?v=1616427536" />
                <h4>Arnold Palmer Half & Half</h4>
                <h5>Powder Stix</h5>
                <span className="price">$29.99</span>
                <span className="quantity">(case of 12)</span>
                <button className="addToCart">Add to Cart</button>
            </div>
            <div className="product-card">
                <img src="https://cdn.shopify.com/s/files/1/0087/6065/5938/products/az-shopify-product-KRAFT_10CT_GRT_ab9e213d-6f03-4e54-9427-8e785c86f8fd_2000x.png?v=161642754100" />
                <h4>Green Tea</h4>
                <h5>Sugar free powder Stix</h5>
                <span className="price">$29.99</span>
                <span className="quantity">(case of 12)</span>
                <button className="addToCart">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductPage
