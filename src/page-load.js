function loadPage() {
    const html = document.querySelector('html');
    html.style.width = '100vw';
    html.style.height = '100vh';

    const body = document.querySelector('body');
    body.style.width = '100vw';
    body.style.height = '100vh';


    const contentDiv = document.querySelector('#content');
    contentDiv.style.width = '100vw';
    contentDiv.style.height = '100vh';
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'row';
    contentDiv.style.justifyContent = 'flex-start';
    contentDiv.style.backgroundColor = 'brown';
    contentDiv.style.backgroundImage = "url('/dist/photo3.jpeg')";
    contentDiv.style.backgroundRepeat = 'no-repeat';
    contentDiv.style.backgroundSize = 'cover';
    contentDiv.style.backgroundAttachment = 'scroll';

    let sideBar = document.createElement('div');
    sideBar.setAttribute('id', 'sideBar');
    sideBar.style.width = '300px';
    sideBar.style.height = '100vh';
    sideBar.style.backgroundColor = 'black'
    sideBar.style.opacity = '0.7';
    
    let header = document.createElement('header');
    header.textContent = 'Island Delights';
    header.style.color = 'white';
    header.style.fontSize = '100px';
    header.style.marginLeft = '100px';
    
    let homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'home');
    homeButton.textContent = 'Home';

    let menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu');
    menuButton.textContent = 'Menu';

    let contactButton = document.createElement('button');
    contactButton.setAttribute('id', 'contact');
    contactButton.textContent = 'Contact';

    contentDiv.appendChild(sideBar);
    contentDiv.appendChild(header);
    
    sideBar.appendChild(homeButton);
    sideBar.appendChild(menuButton);
    sideBar.appendChild(contactButton);

    let button = document.querySelectorAll('button');
    let buttonArray = Array.from(button);
    
    for(let i=0; i<buttonArray.length; i++) {
        buttonArray[i].style.color = 'white';
        buttonArray[i].style.fontSize = '50px';
    }

    let page = 1;
}

export default loadPage