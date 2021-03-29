function loadPage() {
    const html = document.querySelector('html');
    html.style.width = '100%';
    html.style.height = '100vh';
    html.style.backgroundImage = "url('/dist/photo3.jpeg')";
    html.style.backgroundSize = '100vw 100vh';

    const body = document.querySelector('body');
    body.style.width = '100%';
    body.style.height = '100vh';

    const contentDiv = document.querySelector('#content');
    contentDiv.style.width = '100%';
    contentDiv.style.height = '100vh';
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'column';
    contentDiv.style.justifyContent = 'center';
    contentDiv.style.alignItems = 'center';
    contentDiv.style.position = 'absolute';
    contentDiv.style.left = '0';

    const sideBar = document.querySelector('#sideBar');
    sideBar.style.width = '100%';
    sideBar.style.height = '50px';
    sideBar.style.paddingLeft = '10px';
    sideBar.style.backgroundColor = 'rgba(0,0,0, 0)';
    sideBar.style.position = 'absolute';
    sideBar.style.top = '0';
    sideBar.style.left = '0';
    sideBar.style.zIndex = '1';
    sideBar.style.display = 'flex';
    sideBar.style.justifyContent ='flex-start';
    sideBar.style.alignItems = 'center';

    let header = document.createElement('header');
    header.textContent = 'Island Delights';
    header.style.fontSize = '50px';
    header.style.color = 'white';

    let headerText = document.createElement('p');
    headerText.textContent = 'Breezy, fresh, delicious.';
    headerText.style.fontSize = '15px';
    headerText.style.color = '#83ae83';
    
    let homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'home');
    homeButton.textContent = 'Home';

    let menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu');
    menuButton.textContent = 'Menu';

    let contactButton = document.createElement('button');
    contactButton.setAttribute('id', 'contact');
    contactButton.textContent = 'Contact';
    
    let title = document.createElement('h2');
    title.setAttribute('id', 'title');
    title.textContent = 'Island Delights';
    title.style.color = '#56c1f4';
    title.style.marginLeft = '600px';    

    
    if (sideBar.childElementCount < 1){
    sideBar.appendChild(homeButton);
    sideBar.appendChild(menuButton);
    sideBar.appendChild(contactButton);
    sideBar.appendChild(title);
    }

    contentDiv.appendChild(header);
    contentDiv.appendChild(headerText);

    
    
    

    let button = document.querySelectorAll('button');
    let buttonArray = Array.from(button);
    
    for(let i=0; i<buttonArray.length; i++) {
        buttonArray[i].style.color = '#56c1f4';
        buttonArray[i].style.fontSize = '20px';
        buttonArray[i].style.backgroundColor = 'transparent';
        buttonArray[i].style.border = 'none';
    }

}

export default loadPage



