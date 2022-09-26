const trucks= [
    {
        id:1,
        name: 'Chevrolet',
        color: [ 'Amarillo', 'Azul'],
        price: '10000',
        img : './img/chevroletDefault.jpg',
        logo: './img/logo_chevrolet.png'
    },

    {
        id:2,
        name: 'Ford',
        color: ['Rojo', 'Amarillo', 'Azul','Gris'],
        price: '15000',
        img : './img/fordDefault.jpg',
        logo : './img/logo_ford.png'
    },

    {
        id:3,
        name: 'Iveco',
        color: ['Blanco','Gris'],
        price: '8000',
        img : './img/ivecoDefault.jpg', 
        logo: './img/logo_iveco.png'
    },

    {
        id:4,
        name: 'Mercedes Benz',
        color: ['Rojo', 'Azul','Blanco'],
        price: '20000',
        img : './img/mercedesDefault.jpg',
        logo: './img/logo_mercedes.png' 
    },

    {
        id:5,
        name: 'Scania',
        color: ['Amarillo', 'Azul'],
        price: '9000',
        img : './img/scaniaDefault.jpg',
        logo: './img/logo_scania.png' 
    }
]

const btnFilterBoth = document.getElementById('btnFilterBoth');
const btnFilterByColor = document.getElementById('btnFilterColor');
const btnFilterByBrand = document.getElementById('btnFilterBrand');
const btnShowAll= document.getElementById('btnShowAll');
const cardsContainer = document.getElementById('cardsContainer');
const brand = document.getElementById("brand");
const color = document.getElementById("color");

const init = () => {
    renderInitial();
    btnFilterBoth.addEventListener('click', filterByBrandAndColor);
    btnFilterByColor.addEventListener('click', filterByColor);
    btnFilterByBrand.addEventListener('click', filterByBrand);
    btnShowAll.addEventListener('click', showAll);
};

const renderInitial = (e) => {
  trucks.forEach((truck) => {
    truck.color.forEach((color) => {
      cardsContainer.innerHTML += `<div class="truckNumber${truck.id}" id="truckNumber${truck.id}">
                                        <div class="logoContainer"><img src="${truck.logo}"></div>
                                        <div class="cardSubtitles">
                                        <h4>Color:<div id=truck${color}></div></h4>
                                        <h4>Precio: usd$ ${truck.price}</h4>
                                        </div> 
                                        <img src="${truck.img}" alt="">
                                        </div>`;
    });
  });
};


const renderTrucksByBrand = (e) => {
    trucksFiltered= trucks.filter(truck => truck.name.includes(e));
    if (trucksFiltered.length !=0){
        cardsContainer.innerHTML="";
        trucksFiltered.forEach((truck) => {
            truck.color.forEach((color) => {
              cardsContainer.innerHTML += `<div class="truckNumber${truck.id}" id="truckNumber${truck.id}">
                                                <div class="logoContainer"><img src="${truck.logo}"></div>
                                                <div class="cardSubtitles">
                                                <h4>Color:<div id=truck${color}></div></h4>
                                                <h4>Precio: usd$ ${truck.price}</h4>
                                                </div> 
                                                <img src="${truck.img}" alt="">
                                                </div>`;
            });
        });
    } else window.alert('No existen camiones con esa marca');
    
} 

const renderTrucksByColor = (e) => {
    trucksFiltered= trucks.filter(truck => truck.color.includes(e));
    if (trucksFiltered.length !=0){
        cardsContainer.innerHTML="";
        trucksFiltered.forEach((truck) => {
            cardsContainer.innerHTML += `<div class="truckNumber${truck.id}" id="truckNumber${truck.id}">
                                              <div class="logoContainer"><img src="${truck.logo}"></div>
                                              <div class="cardSubtitles">
                                              <h4>Color:<div id=truck${e}></div></h4>
                                              <h4>Precio: usd$ ${truck.price}</h4>
                                              </div> 
                                              <img src="${truck.img}" alt="">
                                              </div>`;
        });
    } else window.alert('No existen camiones con ese color');
    
}           

const renderTrucksByBrandAndColor = (brand, color) => {
    trucksFiltered= trucks.filter(truck => (truck.color.includes(color) && truck.name.includes(brand)));
    if (trucksFiltered.length !=0){
        cardsContainer.innerHTML="";
        trucksFiltered.forEach((truck) => {
            cardsContainer.innerHTML += `<div class="truckNumber${truck.id}" id="truckNumber${truck.id}">
                                              <div class="logoContainer"><img src="${truck.logo}"></div>
                                              <div class="cardSubtitles">
                                              <h4>Color:<div id=truck${color}></div></h4>
                                              <h4>Precio: usd$ ${truck.price}</h4>
                                              </div> 
                                              <img src="${truck.img}" alt="">
                                              </div>`;
        });
    } else window.alert('No existen camiones de esa marca y color');
    
}           

const filterByBrand = (e) =>{
    e.preventDefault();
    if (brand.selectedIndex !=0){
        const userSelection = brand.options[brand.selectedIndex].value;
        renderTrucksByBrand(userSelection);
    } else window.alert('Debés seleccionar una marca');
}

const filterByColor = (e) =>{
    e.preventDefault();
    if (color.selectedIndex !=0){
        const userSelection = color.options[color.selectedIndex].value;
        renderTrucksByColor(userSelection);
    } else window.alert('Debés seleccionar un color');
}

const filterByBrandAndColor = (e) =>{
    e.preventDefault();
    if (color.selectedIndex !=0 && brand.selectedIndex!=0){
        const userColorSelection = color.options[color.selectedIndex].value;
        const userBrandSelection = brand.options[brand.selectedIndex].value;
        renderTrucksByBrandAndColor(userBrandSelection, userColorSelection);
    } else window.alert('Debés elegir una opción de marca y color');
}

const showAll = (e) => {
    e.preventDefault();
    cardsContainer.innerHTML = "";
    renderInitial();
}


init();