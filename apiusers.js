// definimos la rura dode consultaremos los recursos 
const APIS_URL = 'https://jsonplaceholder.typicode.com/'
// obtenemos el elemento del DOM html donde arrojamos la info
const HTMLResponse = document.querySelector('#app');
const ul = document.createElement('ul');

fetch(`${APIS_URL}/users`)
    .then((response)=>response.json())
    .then((users) => {
        users.forEach((user) => {
            // creamos ele elemento li para almacenar cada usuario en ul
            let elem = document.createElement('li')
            elem.appendChild(
                document.createTextNode(`${user.name}`)
            );
            //agregamos el name dentro del li y dentro del ul
            ul.appendChild(elem);

        });
        //agregamos el ul dentro del div obtenido
        HTMLResponse.appendChild(ul)
    })
    .catch((error)=>{
        console.error('error en la solicitud');
    }



    )

