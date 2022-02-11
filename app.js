// Creo un'array contenente tutte le immagini
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
console.log(items);

// Indice corrente immagine 
let imgCurrent = 0;

// Recupero dal dom lo slider_wrapper
const sliderWrapper = document.querySelector(".slider_wrapper");
console.log(sliderWrapper);

// Ciclo for per stampare div item per ogni immagine
for (let i = 0; i < items.length; i++) {

  // Creo ad ogni giro il div item contenente l'immagine

    // Creo l'elemento div con classe item
    const sliderItem = document.createElement("div");
    sliderItem.classList.add("item");
    console.log(sliderItem);

    // Creo il tag img con le immagini items
    const sliderImg = document.createElement("img");
    sliderImg.src = items[i]; 
    console.log(sliderImg);

    // Appendo il div item allo slider wrapper
    sliderWrapper.append(sliderItem);
    console.log(sliderWrapper);

    // Appendo le immagini al div item
    sliderItem.append(sliderImg);
    console.log(sliderItem);

    if (imgCurrent == i){
        sliderItem.classList.add("active");
    }

}

// Recupero dal dom div controls_wrapper
const controlsWrapper = document.querySelector(".controls_wrapper");
console.log(controlsWrapper);

// Ciclo for per stampare control item per ogni immagine
for (let i = 0; i < items.length; i++) {

  // Creo ad ogni giro il div item contenente l'immagine
    
    // Creo l'elemento div con classe control_item
    var controlItem = document.createElement("div");
    controlItem.classList.add("control_item");
    console.log(controlItem);

    // Creo il tag img con le immagini
    const controlImg = document.createElement("img");
    controlImg.src = items[i];
    console.log(controlImg);

    // Appendo il div control item al controls_wrapper
    controlsWrapper.append(controlItem);

    // Appendo le immagini al div control item
    controlItem.append(controlImg);

    if (imgCurrent == i){
        controlItem.classList.add("active-control");
    }
}


// Recupero dal dom il pulsante arrow up 
const imgPrev = document.querySelector(".arrow-up");
console.log(imgPrev);

// Seleziono tutte le classi control item
const allControlItem = document.querySelectorAll(".control_item");
console.log(allControlItem);

// Recupero dal dom tutte le classi item dallo sliderWrapper
const allSliderItem = document.querySelectorAll(".item");
console.log(allSliderItem);

// Al clic del pulsante arrow down passo all'immagine precedente
imgPrev.addEventListener("click", function() {

    if (imgCurrent > 0) {
        allControlItem[imgCurrent].classList.remove("active-control");
        allSliderItem[imgCurrent].classList.remove("active");

        imgCurrent--;

        allControlItem[imgCurrent].classList.add("active-control");
        allSliderItem[imgCurrent].classList.add("active");

    }
    


})



// Recupero dal dom il pulsante arrow down
const imgNext = document.querySelector(".arrow-down");
console.log(imgNext);

// Al clic del pulsante arrow up passo all'immagine successiva
imgNext.addEventListener("click", function() {

    
    if (imgCurrent < 4) {
        allControlItem[imgCurrent].classList.remove("active-control");
        allSliderItem[imgCurrent].classList.remove("active");

        imgCurrent++;

        allControlItem[imgCurrent].classList.add("active-control");
        allSliderItem[imgCurrent].classList.add("active");
    }

})
