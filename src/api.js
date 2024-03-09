import axios from "axios";


const baseUrl = 'https://dummyjson.com/products?limit=20'

export default async function fetchProductsAPI(skip) {
    const url = skip ? `${baseUrl}&skip=${skip}` : baseUrl;

    try {
        const response = await axios.get(url);

        if (!response.status.toString().startsWith('2')) {
            throw new Error('something went wrong')
        }

        // console.log(response.data.products)
        return({
            data: response.data.products
        });
    }
    catch(e) {
        return {
            error: e.message
        }
    }
}