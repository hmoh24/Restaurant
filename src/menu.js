function loadMenuTab() {

    const html = document.querySelector('html');
    html.style.backgroundImage = "url('/dist/photo3.jpeg')";

    const body = document.querySelector('body');
    body.style.width = '100vw';     
    body.style.height = '100vh';

    const contentDiv = document.querySelector('#content');

    let containerDiv = document.createElement('div');
    containerDiv.style.height = '60vh';
    containerDiv.style.width = '90vw';
    containerDiv.style.backgroundColor = 'rgba(0,0,0, 0.5)';
    containerDiv.style.display = 'grid';
    containerDiv.style.gridTemplateColumns = 'auto';
    containerDiv.style.gridTemplateRows = '1fr 3fr';
    containerDiv.style.flexWrap = 'nowrap';
    containerDiv.style.border = '1px solid black';

    let header = document.createElement('header');
    header.textContent = 'Menu - Visit us for full menu';
    header.style.gridRow = '1/2';
    header.style.gridColumn = '1/7';
    header.style.alignSelf = 'center';
    header.style.justifySelf = 'center';
    header.style.color = 'white';
    header.style.fontSize = '50px';
    header.style.marginLeft = '100px';

    let menuItem1 = document.createElement('div');
    menuItem1.style.gridRow = '2/3';
    menuItem1.style.gridColumn = '1/2';
    menuItem1.style.width = '200px';
    menuItem1.style.height = '200px';
    menuItem1.style.backgroundImage = "url('/dist/breakfast.jpeg')";
    menuItem1.style.backgroundSize = 'cover';
    menuItem1.style.justifySelf = 'center';
    menuItem1.style.border = '1px solid white';
    menuItem1.style.margin = '10px';
    menuItem1.setAttribute('id', 'item1');
    
    let menuItem2 = document.createElement('div');
    menuItem2.style.gridRow = '2/3';
    menuItem2.style.gridColumn = '2/3';
    menuItem2.style.width = '200px';
    menuItem2.style.height = '200px';
    menuItem2.style.backgroundImage = "url('/dist/burger.jpeg')";
    menuItem2.style.backgroundSize = 'cover';
    menuItem2.style.justifySelf = 'center';
    menuItem2.style.border = '1px solid white';
    menuItem2.style.margin = '10px';
    menuItem2.setAttribute('id', 'item2');

    let menuItem3 = document.createElement('div');
    menuItem3.style.gridRow = '2/3';
    menuItem3.style.width = '200px';
    menuItem3.style.height = '200px';
    menuItem3.style.backgroundImage = "url('/dist/seafood.jpeg')";
    menuItem3.style.backgroundSize = 'cover';
    menuItem3.style.justifySelf = 'center';
    menuItem3.style.border = '1px solid white';
    menuItem3.style.margin = '10px';
    menuItem3.setAttribute('id', 'item3');

    let menuItem4 = document.createElement('div');
    menuItem4.style.gridRow = '2/3';
    menuItem4.style.width = '200px';
    menuItem4.style.height = '200px';
    menuItem4.style.backgroundImage = "url('/dist/dessert.jpeg')";
    menuItem4.style.backgroundSize = 'cover';
    menuItem4.style.justifySelf = 'center';
    menuItem4.style.border = '1px solid white';
    menuItem4.style.margin = '10px';
    menuItem4.setAttribute('id', 'item4');
    
    let menuItem5 = document.createElement('div');
    menuItem5.style.gridRow = '2/3';
    menuItem5.style.width = '200px';
    menuItem5.style.height = '200px';
    menuItem5.style.backgroundImage = "url('/dist/steak.jpeg')";
    menuItem5.style.backgroundSize = '200px 200px';
    menuItem5.style.justifySelf = 'center';
    menuItem5.style.border = '1px solid white';
    menuItem5.style.margin = '10px';
    menuItem5.setAttribute('id', 'item5');

    let menuItem6 = document.createElement('div');
    menuItem6.style.gridRow = '2/3';
    menuItem6.style.width = '200px';
    menuItem6.style.height = '200px';
    menuItem6.style.backgroundImage = "url('/dist/fruits.jpeg')";
    menuItem6.style.backgroundSize = '200px 200px';
    menuItem6.style.justifySelf = 'center';
    menuItem6.style.border = '1px solid white';
    menuItem6.style.margin = '10px';
    menuItem6.setAttribute('id', 'item6');


    function descriptionGenerate (description, parent){
        let p = document.createElement('p');
        p.style.color = 'white';
        p.style.fontSize = '20px';
        p.style.marginTop = '225px';
        p.textContent = description;
        parent.appendChild(p);
    }

    

    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(header);
    containerDiv.appendChild(menuItem1);
    containerDiv.appendChild(menuItem2);
    containerDiv.appendChild(menuItem3);
    containerDiv.appendChild(menuItem4);
    containerDiv.appendChild(menuItem5);
    containerDiv.appendChild(menuItem6);

    descriptionGenerate('Breakfast Menu', menuItem1);
    

    
}

export default loadMenuTab