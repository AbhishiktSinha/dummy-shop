
let productsData = [];

export default function getProductsData(query) {

    query = query.trim().toLowerCase();

    return productsData.filter( (item)=>{

        return (
            item.title.split(' ')
            .some(word=> word.toLowerCase().startsWith(query))
            )
    })
}

export function getProductById(productId) {
    
    return productsData.find( item=> {
        
        return (item.id == productId);
    });
}

export function updateProductsData(newProductsData) {

    productsData = [...productsData, ...newProductsData];
}

export function getTotalProductsCount() {
    return productsData.length;
}