const productsArr = [
    {
        link: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/n/inl0081-1.jpg",
        name: "Inlife Orange Flavored Hydrolyzed Collagen Peptides, 200 gm",
        price: "999.00",
        originalPrice: "MRP (1999.00)",
    },
    {
        link: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/n/inl0099-1.jpg",
        name: "Inlife Chocolate Flavored Sugar Free Nutritional Meal Shake, 500 gm",
        price: "749.00",
        originalPrice: "MRP (1499.00)",
    },
    {
        link: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/i/lit0170_3.jpg",
        name: 'Littles Soft Cleansing Baby Wipes, 80 Count',
        price: "90.00",
        originalPrice: "MRP (180.00)",
    },
    {
        link: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/u/sug0181.jpg",
        name: "Sugarlite Sugar, 500 gm",
        price: "49.50",
        originalPrice: "MRP (99.00)",
    },
    {
        link: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/m/e/mediker_500ml.jpg",
        name: 'Mediker Advansed Hand Sanitizer, 34 ml',
        price: "8.50",
        originalPrice: "MRP (17.00)",
    },
    {
        link: "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/k/a/kam0050_2.jpg",
        name: "Kamasutra Urge Men Deodorant Spray, 150 ml",
        price: "105.00",
        originalPrice: "MRP (210.00)",
    }
];    

if (localStorage.getItem("apollo_products") == null)
    localStorage.setItem("apollo_products", JSON.stringify(productsArr));

    function showList(arr) {
        var mainDiv = document.getElementById("list");
        mainDiv.innerHTML = null;
    
        arr.forEach(function (obj) {
            var div = document.createElement("div");
            var image = document.createElement("img");
            var name = document.createElement("p");
            var price = document.createElement("p");
            var originalPrice = document.createElement("p");
            var anchor = document.createElement("a");

            var div1 = document.createElement("div");
            div1.setAttribute("class", "list-div1");
            var div2 = document.createElement("div");
            div2.setAttribute("class", "list-div2");

            var btn = document.createElement("button");
            btn.innerHTML = "ADD TO CART";
    
            anchor.href = "inlife.html";
            anchor.append(image);
            image.src = obj.link;
    
            price.innerHTML = `Rs. ${obj.price} `;
            price.style.fontWeight = "bold";
    
            name.innerHTML = obj.name;
            originalPrice.innerHTML = obj.originalPrice;
            originalPrice.style.textDecoration = "line-through";
            
            div1.append(anchor, name);
            div2.append(originalPrice, price, btn);

            div.append(div1,div2);

            mainDiv.append(div);
        });
    }    

    showList(JSON.parse(localStorage.getItem("apollo_products")));