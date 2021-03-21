import loadPage from "./page-load.js";
import loadMenuTab from "./menu.js";
loadPage();

let tabChosen = home;

const homeButton = document.querySelector('#home')
homeButton.addEventListener('click', (e) =>{
    tabChosen = home;
})

const menuButton = document.querySelector('#menu')
menuButton.addEventListener('click', (e) =>{
    tabChosen = menu;
})

const contactButton = document.querySelector('#contact')
contactButton.addEventListener('click', (e) =>{
    tabChosen = contact;
})

function tabLogic(){
    if (tabChosen === home && page !== 1){
        loadPage();
    }
    else if(tabChosen === menu){
        loadMenuTab();
    }

    // else if(tabChosen === home){
    //     //fnx
    // }

}

tabLogic();