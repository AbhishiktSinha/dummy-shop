import request from "../../../network/request";
import { endpoints } from '../../../network/endpoints';

export default async function fetchProductData (productId, productState, setProductState) {    

    const { products: productsUrl } = endpoints;

    const httpConfig = {
        url: `${productsUrl}/${productId}`,
        method: 'GET',
    }

    setProductState({
        ...productState,
        loading: true,
    })

    const {data, error} = await request(httpConfig);

    if (data) {
        setProductState({
            ...productState,
            error: '', 
            loading: false,
            data: data,
        })
    }
    else if (error) {
        setProductState( {
            ...productState,
            loading: false,
            error: error,
        })
    }
}