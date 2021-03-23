function loadPage() {
    const html = document.querySelector('html');
    html.style.width = '100vw';
    html.style.height = '100vh';

    const body = document.querySelector('body');
    body.style.width = '100vw';
    body.style.height = '100vh';
    body.style.position = 'relative';


    const contentDiv = document.querySelector('#content');
    contentDiv.style.width = '100vw';
    contentDiv.style.height = '100vh';
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'row';
    contentDiv.style.justifyContent = 'flex-start';
    contentDiv.style.backgroundColor = 'white';
    contentDiv.style.backgroundImage = "url('/dist/photo3.jpeg')";
    contentDiv.style.backgroundRepeat = 'no-repeat';
    contentDiv.style.backgroundSize = 'cover';
    contentDiv.style.backgroundAttachment = 'scroll';

    const sideBar = document.querySelector('#sideBar');
    sideBar.style.width = '300px';
    sideBar.style.height = '100vh';
    sideBar.style.backgroundColor = 'rgba(0,0,0, 0.8)';
    sideBar.style.position = 'absolute';
    sideBar.style.top = '0';
    sideBar.style.left = '0';
    sideBar.style.zIndex = '1';
    
    let header = document.createElement('header');
    header.textContent = 'Island Delights';
    header.style.color = 'white';
    header.style.fontSize = '100px';
    header.style.marginLeft = '400px';
    
    let homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'home');
    homeButton.textContent = 'Home';

    let menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu');
    menuButton.textContent = 'Menu';

    let contactButton = document.createElement('button');
    contactButton.setAttribute('id', 'contact');
    contactButton.textContent = 'Contact';


    
    
    sideBar.appendChild(homeButton);
    sideBar.appendChild(menuButton);
    sideBar.appendChild(contactButton);

    contentDiv.appendChild(header);

    
    
    

    let button = document.querySelectorAll('button');
    let buttonArray = Array.from(button);
    
    for(let i=0; i<buttonArray.length; i++) {
        buttonArray[i].style.color = 'white';
        buttonArray[i].style.fontSize = '50px';
    }

}

export default loadPage


// container/content --> add a new container that fits the content --> append all child nodes to newer container --> tab logic is remove all child nodes 
// keep tabs/menu stationary and keep content div stationary and apply flex to content to arrange tabs and new content holder.
//remove holder on each page switch --> no need to worry about styling changes in JS
// optimise code to follow DRY principle

//ISSUE: buttons not working on menu tab because they are being deleted and now being clicked without any event listeners due to being deleted.