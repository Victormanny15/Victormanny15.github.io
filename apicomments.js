const APIS_URL = 'https://jsonplaceholder.typicode.com/';
const commentList = document.querySelector('#commentList');

// Cargar comentarios para las publicaciones
fetch(`${APIS_URL}/posts`)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
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
        console.error('Error en la solicitud de comentarios:', error);
    });
