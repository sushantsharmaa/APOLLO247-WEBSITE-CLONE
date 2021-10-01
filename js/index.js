function slideShow() {

    const slider = ["https://newassets.apollo247.com/images/banners/HealthQueries.png",
        "https://newassets.apollo247.com/images/banners/covid-care3.jpg",
        "https://newassets.apollo247.com/images/banners/pharma_2Feb.png",
        "https://newassets.apollo247.com/images/banners/ApolloHomeCare.jpg",
        "https://newassets.apollo247.com/images/banners/ApolloHomeCare.jpg",
        "https://newassets.apollo247.com/images/banners/sexawareness.jpg",
        "https://newassets.apollo247.com/images/banners/consult_2Feb.png",
        "https://newassets.apollo247.com/images/banners/one_tap.png",
        "https://newassets.apollo247.com/images/banners/vaccination.jpg"];

    if (localStorage.getItem('apollo_slider') == null) localStorage.setItem('apollo_slider', JSON.stringify(slider));

    var slider_1 = document.getElementById('slider');
    var image = document.createElement('img');

    var i = 0;

    setInterval(function () {
        i = i % JSON.parse(localStorage.getItem('apollo_slider')).length;
        image.src = JSON.parse(localStorage.getItem('apollo_slider'))[i];
        slider_1.append(image);
        i++;
    }, 3000);

}

slideShow();