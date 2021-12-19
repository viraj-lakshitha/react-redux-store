import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { removeSelectedProduct, selectedProducts } from '../app/actions/productAction';

const ProductDetails = () => {
    const product = useSelector(state => state.product)
    const {productId} = useParams();
    const dispatch = useDispatch();

    const fetchProductById = async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(error => console.log(error))
        dispatch(selectedProducts(response?.data))
    }

    useEffect(() => {
        productId && fetchProductById(productId);

        return () => {
            dispatch(removeSelectedProduct)
        }
    }, [productId])

    return (
        <>
        {Object.keys(product).length === 0 ? (<p>Loading...</p>) : (
            <div className="d-flex flex-column rounded align-items-center border border-primary m-5 p-2 bg-light">
                <h4 className="text-center">{product.title}</h4>
                <img style={{height: "auto", width: "250px"}} src={product.image} alt={product.id} />
                <h5 className="my-2">$ {product.price}</h5>
                <p className="text-center">{product.description}</p>
            </div> 
        ) }
        </>
    )
}

export default ProductDetails