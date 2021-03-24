function loadMenuTab() {

    const html = document.querySelector('html');
    html.style.backgroundImage = "url('/dist/photo3.jpeg')";

    const body = document.querySelector('body');
    body.style.width = '100vw';
    body.style.height = '100vh';

    const contentDiv = document.querySelector('#content');

    let header = document.createElement('header');
    header.textContent = 'Menu';
    header.style.color = 'white';
    header.style.fontSize = '50px';
    header.style.marginLeft = '100px';

    let containerDiv = document.createElement('div');
    containerDiv.style.height = '60vh';
    containerDiv.style.width = '90vw';
    containerDiv.style.backgroundColor = 'rgba(0,0,0, 0.5)';
    containerDiv.style.display = 'flex';
    containerDiv.style.flexWrap = 'wrap';
    
    let menuItem1 = document.createElement('div');
    menuItem1.style.width = '150px';
    menuItem1.style.height = '150px';
    menuItem1.style.backgroundColor = 'black';
    menuItem1.style.border = '2px solid white';
    menuItem1.style.margin = '10px';
    menuItem1.setAttribute('id', 'item1');
    
    let menuItem2 = document.createElement('div');
    menuItem2.style.width = '150px';
    menuItem2.style.height = '150px';
    menuItem2.style.backgroundColor = 'black';
    menuItem2.style.border = '2px solid white';
    menuItem2.style.margin = '10px';
    menuItem2.setAttribute('id', 'item2');

    let menuItem3 = document.createElement('div');
    menuItem3.style.width = '150px';
    menuItem3.style.height = '150px';
    menuItem3.style.backgroundColor = 'black';
    menuItem3.style.border = '2px solid white';
    menuItem3.style.margin = '10px';
    menuItem3.setAttribute('id', 'item3');

    let menuItem4 = document.createElement('div');
    menuItem4.style.width = '150px';
    menuItem4.style.height = '150px';
    menuItem4.style.backgroundColor = 'black';
    menuItem4.style.border = '2px solid white';
    menuItem4.style.margin = '10px';
    menuItem4.setAttribute('id', 'item4');
    
    let menuItem5 = document.createElement('div');
    menuItem5.style.width = '150px';
    menuItem5.style.height = '150px';
    menuItem5.style.backgroundColor = 'black';
    menuItem5.style.border = '2px solid white';
    menuItem5.style.margin = '10px';
    menuItem5.setAttribute('id', 'item5');

    let menuItem6 = document.createElement('div');
    menuItem6.style.width = '150px';
    menuItem6.style.height = '150px';
    menuItem6.style.backgroundColor = 'black';
    menuItem6.style.border = '2px solid white';
    menuItem6.style.margin = '10px';
    menuItem6.setAttribute('id', 'item6');


    contentDiv.appendChild(header);


    contentDiv.appendChild(containerDiv)
    containerDiv.appendChild(menuItem1);
    containerDiv.appendChild(menuItem2);
    containerDiv.appendChild(menuItem3);
    containerDiv.appendChild(menuItem4);
    containerDiv.appendChild(menuItem5);
    containerDiv.appendChild(menuItem6);


    

    
}

export default loadMenuTab