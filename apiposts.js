const APIS_URL = 'https://jsonplaceholder.typicode.com/';
const postTableBody = document.querySelector('#postTableBody');
const commentList = document.querySelector('#commentList');

// Cargar publicaciones
fetch(`${APIS_URL}/posts`)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            `;
            postTableBody.appendChild(row);

            // Cargar comentarios para cada publicación
            fetch(`${APIS_URL}/posts/${post.id}/comments`)
                .then(response => response.json())
                .then(comments => {
                    comments.forEach(comment => {
                        const li = document.createElement('li');
                        li.textContent = `${comment.name}: ${comment.body}`;
                        commentList.appendChild(li);
                    });
                });
        });
    })
    .catch(error => {
        console.error('Error en la solicitud de publicaciones:', error);
    });
