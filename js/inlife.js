const arr =[
    "https://newassets.apollo247.com/pub/media/catalog/product/i/n/inl0081-1.jpg",
    "https://newassets.apollo247.com/pub/media/catalog/product/i/n/inl0081-2.jpg",
    "https://newassets.apollo247.com/pub/media/catalog/product/i/n/inl0081-3.jpg"
]

if (localStorage.getItem('bag') == null) localStorage.setItem('bag', JSON.stringify(arr));

function slideShow() {
    var arr = JSON.parse(localStorage.getItem('bag'));

    var left = document.getElementById('left');
    var right = document.getElementById('right');

    var slider = document.getElementById('slider');

    var div = document.getElementById('verticalSlider');
    var image1 = document.createElement('img');
    image1.src = arr[0];
    slider.append(image1);
    var i = 1;

    function leftMoveSlider() {
        var arr = JSON.parse(localStorage.getItem('bag'));
        i--;
        if (i == -1) {
            i = arr.length - 1;
        }

        image1.src = arr[i];
        slider.append(image1);
    }


    function rightMoveSlider() {
        var arr = JSON.parse(localStorage.getItem('bag'));
        i++;
        if (i == arr.length) {
            i = 0;
        }

        image1.src = arr[i];
        div.append(image1);
    }

    left.addEventListener('click', leftMoveSlider)
    right.addEventListener('click', rightMoveSlider)
}

slideShow();

var button = document.getElementById("btn");

button.addEventListener("click", function () {
      alert("Added to cart");
  });