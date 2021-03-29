import loadPage from "./page-load.js";
import loadMenuTab from "./menu.js";
import loadContactTab from "./contact.js";
loadPage();

let tabChosen;
const contentDiv = document.querySelector('#content');

const homeButton = document.querySelector('#home')
homeButton.addEventListener('click', (e) =>{
    contentDiv.innerHTML = '';
    tabChosen = 'home';
    tabLogic();
})

const menuButton = document.querySelector('#menu')
menuButton.addEventListener('click', (e) =>{
    contentDiv.innerHTML = '';
    tabChosen = 'menu';
    tabLogic();
})

const contactButton = document.querySelector('#contact')
contactButton.addEventListener('click', (e) =>{
    contentDiv.innerHTML = '';
    tabChosen = 'contact';
    tabLogic();
})

function tabLogic(){
    if (tabChosen === 'home' ){
        loadPage();
    }
    else if(tabChosen === 'menu'){
        loadMenuTab();
    }
    else if(tabChosen === 'contact'){
        loadContactTab();
    }

    // else if(tabChosen === home){
    //     //fnx
    // }

}

// refactor menuItems into function/constructor/factory function
// make all page.js into IIFE
// look for tab animation to make it cleaner
// possibly find new background image to increase readability of home page and then can possibly include a small tag line and button linking menu
// change google maps location to greece