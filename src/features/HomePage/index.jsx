import { useContext, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from './components/ProductCard.jsx';
import Navbar from '../../components/Navbar.jsx'
import SearchBar from '../../components/SearchBar.jsx'
import OpenCartButton from '../../components/OpenCartButton.jsx'
import OpenWishlistButton from '../../components/OpenWishlistButton.jsx'
import LogoComponent from '../../components/LogoComponent.jsx'
import './styles/HomePage.css'
import debouncer from "../../debouncer.js";

import { ActionTypes } from "./redux/actions.js";
import filterData from "../../utils/filterData.js";


let onScrollLoad = null;
const {FETCH_PRODUCTS} = ActionTypes;

export default function HomePage() {
    
    const productsState = useSelector(state => { return state.products});
    const {loading, data, error, query} = productsState;

    const[displayedData, setDisplayedData] = useState(()=>{
        return filterData(data, query)
    })

    const dispatch = useDispatch();
    
    /* useEffect(()=>{
        onScrollLoad = debouncer(()=>{
            console.log('SCROLLING with query:', query,'and data:', data);
            if (query == '') {
                
                const scrolled = window.document.documentElement.scrollTop;
                const clientHeight = window.document.documentElement.clientHeight;
                const scrollHeight = window.document.documentElement.scrollHeight;
                const remaining = scrollHeight - clientHeight - scrolled;

                console.log('remaining:',remaining,', scrolled:', scrolled);
                if (remaining <= 550) {
                    loadMoreProducts();
                }

            }

        }, 300)

        // window.onscroll = onScrollLoad;
    }, []) */

    useEffect(()=>{
        dispatch({
            type: FETCH_PRODUCTS,
            payload: {
                query: query
            }
        })
    },[])   

    function loadMoreProducts() {
        console.log('skipping:', data.length);
        dispatch({
            type: FETCH_PRODUCTS,
            payload: {
                query: query,
                skip: data.length
            }
        })
    }

    useEffect(()=>{
        setDisplayedData(filterData(data, query))
    }, [data, query])
            

    return (
        <div id="home-page">
            <Navbar>
                <LogoComponent />
                <SearchBar />
                <div className="navbar-right-container">
                    <OpenWishlistButton />
                    <OpenCartButton />
                </div>
            </Navbar>
            {
                error && (
                    <div className="error-container">{error}</div>
                )
            }
            {
                displayedData.length > 0 && (
                    <div className="products-container">{

                        displayedData.map( item => {
                            return (
                                <ProductCard 
                                    key={item.title}
                                    product={item}                                    
                                />
                            )
                        })
                    }</div>
                )
            }
            {
                loading && (
                    <div className="loading">loading...</div>
                )
            }
            {/* give option to load more products only when more products are available on the backend, check limi
            and no search query has been entered */}
            {
                !loading && data.length < 100 && query == '' && (


                    <div className="load-more-container" onClick={loadMoreProducts}>
                        <button                            
                            className="load-more-btn">Load More</button>
                    </div>
                        
                )
            }
        </div>
    )
}