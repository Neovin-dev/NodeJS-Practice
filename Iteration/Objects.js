async function productFetch(){
    let response = await fetch('https://dummyjson.com/products');
    const responseJson = await response.json();
    if(!responseJson){
        console.log("Failed fetch request")
        return;
    }
    console.log("Successful fetch request")
    
    console.log("Total Responses:", responseJson.total);

    // console.log(responseJson.products[0])
    const product = responseJson.products[0];
    const productss = responseJson.products;
    // console.log(product)
    console.log(`Object Keys, ${Object.keys(product)}`)
    console.log(`Object Values, ${Object.values(product)}`)

    for(const [productProperty, value] of Object.entries(productss)){
        console.log(`Object ${productProperty.id}, `)
    }
    
    // console.log(`Object Values: ${Object.keys(product.id)}`)

    // Object.keys(product).forEach(key => {
    //     console.log(`${key}`)
        
    // })
    

}

productFetch();