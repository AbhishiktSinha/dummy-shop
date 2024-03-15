import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import fetchProductData from "./utils/fetchProductData";
import ProductImagesContainer from './components/ProductImagesContainer.jsx'
import Navbar from "../../components/Navbar.jsx";
import OpenCartButton from "../../components/OpenCartButton.jsx";
import OpenWishlistButton from "../../components/OpenWishlistButton.jsx";

import './styles/ProductPage.css';


const initialState = {
    loading: true,
    data: undefined,
    error: '',
}

export default function ProductPage() {
    
    const [productState, setProductState] = useState(initialState);
    const {productId} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{


        fetchProductData(productId, productState, setProductState);

    }, [])

    const {loading, data, error} = productState;

    return (
        <div className="product-page-container">
            <Navbar>
                
                <button 
                    onClick={()=>{
                        navigate(-1)
                    }}
                    className="go-home">
                        Go back
                </button>   
                
                <div className="navbar-right-container">
                    <OpenWishlistButton />
                    <OpenCartButton />
                </div>

            </Navbar>
            {
                loading && (
                    <h2>Loading...</h2>
                )
            }
            {
                data && (
                    <div className="main-product-container">
                        <ProductImagesContainer imagesList={data.images}/>
                    </div>
                )
            }
            {
                error && <h3>{error}</h3>
            }
        </div>
    )
}