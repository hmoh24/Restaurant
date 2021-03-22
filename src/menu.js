function loadMenuTab() {

    const html = document.querySelector('html');
    html.style.width = '100vw';
    html.style.height = '100vh';

    const body = document.querySelector('body');
    body.style.width = '100vw';
    body.style.height = '100vh';

    const contentDiv = document.querySelector('#content');
    contentDiv.style.width = '100vw';
    contentDiv.style.height = '100vh';
    contentDiv.style.backgroundColor = 'yellow';
    contentDiv.style.backgroundImage = 'none';
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'row';
    contentDiv.style.justifyContent = 'flex-start';


    let sideBar = document.createElement('div');
    sideBar.setAttribute('id', 'sideBar');
    sideBar.style.width = '300px';
    sideBar.style.height = '100vh';
    sideBar.style.backgroundColor = 'black'
    sideBar.style.opacity = '0.7';

    let homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'home');
    homeButton.textContent = 'Home';

    let menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu');
    menuButton.textContent = 'Menu';

    let contactButton = document.createElement('button');
    contactButton.setAttribute('id', 'contact');
    contactButton.textContent = 'Contact';

    let header = document.createElement('header');
    header.textContent = 'Menu';
    header.style.color = 'white';
    header.style.fontSize = '50px';
    header.style.marginLeft = '100px';

    let menuItemDiv = document.createElement('div');
    menuItemDiv.style.backgroundColor = 'honeydew';
    menuItemDiv.style.width = '500px';
    menuItemDiv.style.height = 'auto';
    menuItemDiv.style.display = 'flex';
    menuItemDiv.style.flexWrap = 'wrap';

    let menuItem1 = document.createElement('div');
    menuItem1.style.width = '100px';
    menuItem1.style.height = '100px';
    menuItem1.style.backgroundColor = 'black';
    menuItem1.style.border = '2px solid white';
    menuItem1.style.margin = '10px';
    menuItem1.setAttribute('id', 'item1');
    
    let menuItem2 = document.createElement('div');
    menuItem2.style.width = '100px';
    menuItem2.style.height = '100px';
    menuItem2.style.backgroundColor = 'black';
    menuItem2.style.border = '2px solid white';
    menuItem2.style.margin = '10px';
    menuItem2.setAttribute('id', 'item2');

    let menuItem3 = document.createElement('div');
    menuItem3.style.width = '100px';
    menuItem3.style.height = '100px';
    menuItem3.style.backgroundColor = 'black';
    menuItem3.style.border = '2px solid white';
    menuItem3.style.margin = '10px';
    menuItem3.setAttribute('id', 'item3');

    let menuItem4 = document.createElement('div');
    menuItem4.style.width = '100px';
    menuItem4.style.height = '100px';
    menuItem4.style.backgroundColor = 'black';
    menuItem4.style.border = '2px solid white';
    menuItem4.style.margin = '10px';
    menuItem4.setAttribute('id', 'item4');
    
    let menuItem5 = document.createElement('div');
    menuItem5.style.width = '100px';
    menuItem5.style.height = '100px';
    menuItem5.style.backgroundColor = 'black';
    menuItem5.style.border = '2px solid white';
    menuItem5.style.margin = '10px';
    menuItem5.setAttribute('id', 'item5');

    let menuItem6 = document.createElement('div');
    menuItem6.style.width = '100px';
    menuItem6.style.height = '100px';
    menuItem6.style.backgroundColor = 'black';
    menuItem6.style.border = '2px solid white';
    menuItem6.style.margin = '10px';
    menuItem6.setAttribute('id', 'item6');





    menuItemDiv.appendChild(menuItem1);
    menuItemDiv.appendChild(menuItem2);
    menuItemDiv.appendChild(menuItem3);
    menuItemDiv.appendChild(menuItem4);
    menuItemDiv.appendChild(menuItem5);
    menuItemDiv.appendChild(menuItem6);



    contentDiv.appendChild(sideBar);
    contentDiv.appendChild(header);
    contentDiv.appendChild(menuItemDiv)

    sideBar.appendChild(homeButton);
    sideBar.appendChild(menuButton);
    sideBar.appendChild(contactButton);

    let button = document.querySelectorAll('button');
    let buttonArray = Array.from(button);
    
    for(let i=0; i<buttonArray.length; i++) {
        buttonArray[i].style.color = 'white';
        buttonArray[i].style.fontSize = '50px';
    }

    
}

export default loadMenuTab