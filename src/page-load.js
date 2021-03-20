function loadPage() {

    const body = document.querySelector('body');


    const contentDiv = document.querySelector('#content');
    contentDiv.style.width = '100vw';
    contentDiv.style.height = '100vh';
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'row';
    contentDiv.style.justifyContent = 'flex-start';
    contentDiv.style.backgroundImage = 'url(./dist/photo3.jpeg);'
    contentDiv.style.backgroundColor = 'blue';
    contentDiv.style.backgroundRepeat = 'no-repeat';
    contentDiv.style.backgroundSize = 'cover';
    contentDiv.style.backgroundAttachment = 'scroll';


    
    const header = document.createElement('header');
    header.textContent = 'Island Delights';
    header.style.color = 'white';
    header.style.fontSize = '100px';
    header.style.marginLeft = '700px';
    
    const sideBar = document.createElement('div');
    sideBar.setAttribute('id', 'sideBar');
    sideBar.style.width = '300px';
    sideBar.style.height = '100vh';
    sideBar.style.backgroundColor = 'black'
    sideBar.style.opacity = '0.7';


    const homeP = document.createElement('p');
    homeP.setAttribute('id', 'home');

    const menuP = document.createElement('p');
    menuP.setAttribute('id', 'menu');

    const contactP = document.createElement('p');
    contactP.setAttribute('id', 'contact');

    document.querySelectorAll('p').style.color = 'whitesmoke';
    document.querySelectorAll('p').style.fontSize = '50px';
    
    
    body.appendChild(header);
    contentDiv.appendChild(sideBar);
    sideBar.appendChild(homeP);
    sideBar.appendChild(menuP);
    sideBar.appendChild(contactP);
}

export default loadPage