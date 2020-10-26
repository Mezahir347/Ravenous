const   apiKey = 'jEuTPjVDGywg9egv72AAI4iOqILs5b6PoXKnENaLW0Abmvt7yYZCMv1j5rKNj2Ir6Cg3N_Qq_FxlrA0K2FHJoUYk9eXwj4gMWaLz7yVx-86Jt29fK61uSgYK8YBXX3Yx';

const Yelp = {
   search(term, location, sortBy){
       return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
           headers: {
               Authorization: `Bearer ${apiKey}`
           }
       }).then(response =>{
          return response.json();
       }).then(jsonResponse =>{
           if(jsonResponse.businesses) {
              return jsonResponse.businesses.map(business =>{
                  console.log(business);
                  return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    adress: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                  };
              });
           }
       });
   }
}; 
export default Yelp;