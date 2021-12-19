import React from 'react'
import { useNavigate } from 'react-router'

const ProductComponent = ({id, title, category, description, imageUrl}) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => {navigate(`/products/${id}`)}} className="card product-component">
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <h6 className="card-sub-title mb-2 text-muted">{category}</h6>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default ProductComponent
