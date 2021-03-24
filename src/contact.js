function loadContactTab() {

    const html = document.querySelector('html');
    html.style.backgroundColor = 'green';
    html.style.backgroundImage = "url('/dist/photo3.jpeg')";

    const contentDiv = document.querySelector('#content');
    
    let containerDiv = document.createElement('div');
    containerDiv.style.height = '60vh';
    containerDiv.style.width = '90vw';
    containerDiv.style.backgroundColor = 'rgba(0,0,0, 0.5)';
    containerDiv.style.display = 'flex';
    containerDiv.style.flexWrap = 'wrap';
    
    let contactForm = document.createElement('div');
    contactForm.style.width = '300px';
    contactForm.style.height = '300px';
    contactForm.style.backgroundColor = 'white';
    contactForm.style.border = '5px solid black';

    contentDiv.appendChild(contactForm);
}

export default loadContactTab