var models = [
    {
        name: "BMW",
        image: "img/img1.jpg",
        link: "deneme"
    },
    {
        name: "Mercedes",
        image: "img/img2.jpg",
        link: "deneme"
    },
    {
        name: "Bugatti",
        image: "img/img3.jpg",
        link: "deneme"
    },
    {
        name: "Chrysler",
        image: "img/img4.jpg",
        link: "deneme"
    }
];

var settings = {
    duration: 2000,
    random: true
};
var interval;
var index = 0;

document.addEventListener("DOMContentLoaded", function() {
    var cardLink = document.querySelector(".card-link");
    var cardTitle = document.querySelector(".card-title");
    var cardImage = document.querySelector(".card-img-top");

    document.querySelector("#left-arrow").addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCard();
        }
    });

    document.querySelector("#right-arrow").addEventListener("click", function () {
        if (index < models.length - 1) {
            index++;
            updateCard();
        }
    });

    document.querySelectorAll(".arrow").forEach(function(item){
        item.addEventListener('mouseenter', function(){
            clearInterval(interval);
        })
    });

    document.querySelectorAll(".arrow").forEach(function(item){
        item.addEventListener('mouseover', function(){
            init(settings);
        })
    });
    
    function updateCard() {
        cardImage.setAttribute("src", models[index].image);
        cardTitle.textContent = models[index].name;
        if (cardLink) {
            cardLink.setAttribute("href", models[index].link);
        }
    }

    function init(settings) {
        interval = setInterval(function() {
            if (settings.random) {
                index = Math.floor(Math.random() * models.length);
            }
            updateCard();
        }, settings.duration);
    }

    // Otomatik geçiş için init fonksiyonunu çağır
    init(settings);

    // İlk kartı yükle
    updateCard();
});
