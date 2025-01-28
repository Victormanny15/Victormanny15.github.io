const APIS_URL = 'https://jsonplaceholder.typicode.com/';
const photoContainer = document.querySelector('#photoContainer');

// Cargar fotos
fetch(`${APIS_URL}/photos`)
    .then(response => response.json())
    .then(photos => {
        photos.forEach(photo => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${photo.title}</h3>
                <img src="${photo.url}" alt="${photo.title}" style="width: 100px; height: auto;">
            `;
            photoContainer.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error en la solicitud de fotos:', error);
    });
