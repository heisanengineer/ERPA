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

    function updateCard() {
        cardImage.setAttribute("src", models[index].image);
        cardTitle.textContent = models[index].name;
        if (cardLink) {
            cardLink.setAttribute("href", models[index].link);
        }
    }
    
    updateCard();
});
