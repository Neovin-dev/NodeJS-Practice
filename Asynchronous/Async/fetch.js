async function productFetcher(){
    let response = await fetch('https://dummyjson.com/products/1');
    response = await response.json();
    console.log(`function started`);

    console.log(response.reviews);

    for(reviews of response.reviews){
        console.log(reviews.reviewerEmail)
    }

}


console.log("function after async");

productFetcher();

