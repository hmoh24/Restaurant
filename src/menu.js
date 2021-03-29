function loadMenuTab() {

    const html = document.querySelector('html');
    html.style.backgroundImage = "url('/dist/photo3.jpeg')";

    const body = document.querySelector('body');
    body.style.width = '100vw';     
    body.style.height = '100vh';

    const contentDiv = document.querySelector('#content');

    let containerDiv = document.createElement('div');
    containerDiv.style.height = '550px';
    containerDiv.style.width = '90vw';
    containerDiv.style.backgroundColor = 'rgba(0,0,0, 0.5)';
    containerDiv.style.borderRadius = '100px';
    containerDiv.style.display = 'grid';
    containerDiv.style.gridTemplateColumns = 'auto';
    containerDiv.style.gridTemplateRows = '1fr 3fr';
    containerDiv.style.flexWrap = 'nowrap';
    containerDiv.style.border = '1px solid black';

    let header = document.createElement('header');
    header.textContent = 'Menus';
    header.style.gridRow = '1/2';
    header.style.gridColumn = '1/7';
    header.style.alignSelf = 'center';
    header.style.justifySelf = 'center';
    header.style.color = 'white';
    header.style.fontSize = '50px';
    header.style.marginLeft = '100px';


    function pictureAndDescriptionGenerate (url, gridColumn, description){
        let div = document.createElement('div');
        div.style.gridRow = '2/3';
        div.style.gridColumn = gridColumn;
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.backgroundImage = url;
        div.style.backgroundSize = 'cover';
        div.style.justifySelf = 'center';
        div.style.border = '1px solid #56c1f4';
        div.style.margin = '10px';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.boxShadow = ' 0px 0px 5px 5px grey';

        let p = document.createElement('p');
        p.style.color = 'white';
        p.style.fontSize = '20px';
        p.style.marginTop = '225px';
        p.textContent = description;
        containerDiv.appendChild(div);
        div.appendChild(p);
    }
    
    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(header);
    pictureAndDescriptionGenerate("url('/dist/breakfast.jpeg')", '1/2', 'Breakfast Menu');
    pictureAndDescriptionGenerate("url('/dist/burger.jpeg')", '2/3', 'Burger Menu');
    pictureAndDescriptionGenerate("url('/dist/seafood.jpeg')", '3/4', 'Seafood Menu');
    pictureAndDescriptionGenerate("url('/dist/steak.jpeg')", '4/5', 'Steak Menu');
    pictureAndDescriptionGenerate("url('/dist/dessert.jpeg')", '5/6', 'Dessert Menu');
    pictureAndDescriptionGenerate("url('/dist/fruits.jpeg')", '6/7', 'Fruits Menu');
    
    
}

export default loadMenuTab