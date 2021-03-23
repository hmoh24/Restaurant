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

// on click clear all html when changing page
// on click clear select styling