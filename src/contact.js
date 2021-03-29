function loadContactTab() {

    const html = document.querySelector('html');
    html.style.backgroundColor = 'green';
    html.style.backgroundImage = "url('/dist/photo3.jpeg')";

    const contentDiv = document.querySelector('#content');
    
    let containerDiv = document.createElement('div');
    containerDiv.style.height = '500px';
    containerDiv.style.width = '90vw';
    containerDiv.style.backgroundColor = 'rgba(0,0,0, 0.5)';
    containerDiv.style.display = 'grid';
    containerDiv.style.flexWrap = 'wrap';
    containerDiv.style.border = '1px solid black';
    containerDiv.style.gridTemplateColumns = '1fr 1fr';
    containerDiv.style.gridTemplateRows = 'auto';
    containerDiv.style.justifyItems = 'center';
    containerDiv.style.alignItems = 'center';

    let contactHeader = document.createElement('h2');
    contactHeader.style.gridColumn = '1/2';
    contactHeader.style.fontSize = '50px';
    contactHeader.style.color = 'white';
    contactHeader.textContent = 'Contact Us';

    let contactPhone = document.createElement('p');
    contactPhone.style.gridColumn = '1/2';
    contactPhone.style.fontSize = '20px';
    contactPhone.style.color = 'white';
    contactPhone.textContent = 'Phone: 08880881881';

    let contactEmail = document.createElement('p');
    contactEmail.style.gridColumn = '1/2';
    contactEmail.style.fontSize = '20px';
    contactEmail.style.color = 'white';
    contactEmail.textContent = 'Email: islanddelights@island.com';

    let contactAddress = document.createElement('p');
    contactAddress.style.gridColumn = '1/2';
    contactAddress.style.fontSize = '20px';
    contactAddress.style.color = 'white';
    contactAddress.textContent = 'Address: Bayshore beach, Bridgetown, Barbados';

    let mapHolder = document.createElement('div');
    mapHolder.height = 'auto';
    mapHolder.width = 'auto';
    mapHolder.style.gridColumn = '2/3';
    mapHolder.style.gridRow = '1/5';
    mapHolder.innerHTML = ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.086623241186!2d-59.610582591821384!3d13.088204310228374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c43f6fe0762d6dd%3A0xf16f48b0bd756776!2sBayshore%20Beach!5e0!3m2!1sen!2suk!4v1616765193907!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    mapHolder.style.display ='flex';
    mapHolder.style.alignSelf ='center';
    mapHolder.style.justifyContent = 'center';
    
    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(contactHeader);
    containerDiv.appendChild(contactPhone);
    containerDiv.appendChild(contactEmail);
    containerDiv.appendChild(contactAddress);
    containerDiv.appendChild(mapHolder);
}
export default loadContactTab