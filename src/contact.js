function loadContactTab() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.style.backgroundColor ='white';
    
    let contactForm = document.createElement('div');
    contactForm.style.width = '300px';
    contactForm.style.height = '300px';
    contactForm.style.backgroundColor = 'white';
    contactForm.style.border = '5px solid black';

    contentDiv.appendChild(contactForm);
}

export default loadContactTab