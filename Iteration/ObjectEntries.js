async function productFetche(){
    let response = await fetch('https://dummyjson.com/products');
    const responseJson = await response.json();
    if(!responseJson){
        console.log("Failed fetch request")
        return;
    }
    console.log("Successful fetch request")

    responseJson.products.forEach(product => {
        console.log(`productID: "${product.id}" & Title: "${product.title}"`)
    });

    console.log(responseJson.total)

};

productFetche();