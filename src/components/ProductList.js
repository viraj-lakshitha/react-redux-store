import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreContext } from '../App';
import { setProducts } from '../app/actions/productAction';
import ProductComponent from './ProductComponent';
import './Styles.scss'

const ProductList = () => {
    const products = useSelector((state) => state?.allProducts.products);
    const dispatch = useDispatch();

    // Get Data from useContext Hook
    const store = useContext(StoreContext);
    
    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products?limit=12').catch(error => console.log(error))
        dispatch(setProducts(response?.data))
    }

    console.log("Store => ", store)

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className="container product-list p-3 w-100">
            {products.map(item => {
                return (
                    <ProductComponent
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        description={item.description}
                    />
                )
            })}
        </div>
    )
}

export default ProductList
