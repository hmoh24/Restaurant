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

function tabHighlighter(button, button1, button2){
    button.style.boxShadow = '0px 2px 0px 0px rgba(131, 174, 131,1)';
    button1.style.boxShadow = 'none';
    button2.style.boxShadow = 'none';
}

tabHighlighter(homeButton, contactButton, menuButton);

function tabLogic(){
    if (tabChosen === 'home' ){
        loadPage();
        tabHighlighter(homeButton, contactButton, menuButton);
    }
    else if(tabChosen === 'menu'){
        loadMenuTab();
        tabHighlighter(menuButton, contactButton, homeButton);
    }
    else if(tabChosen === 'contact'){
        loadContactTab();
        tabHighlighter(contactButton, menuButton, homeButton);
    }
}

