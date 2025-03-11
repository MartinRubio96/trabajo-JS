const noticias = [document.getElementById('noticia1'), document.getElementById('noticia2'), document.getElementById('noticia3'), document.getElementById('noticia4'), document.getElementById('noticia5')]

// json de ejemplo que he encontrado por internet
fetch('https://raw.githubusercontent.com/MartinRubio96/trabajo-JS/refs/heads/main/data/datos.json')
    .then(response => response.json())
    .then(data => {
        let contador = 0
        
        data.items.forEach(item => {
            noticias[contador].innerHTML = 
            // los titulos de las noticias son enlaces que venian con el json a la pagina original, aunque no llevan a ningun lado
            `
            <p> <a href="${item.url}"><h3>${item.title}</h3> </a></p>
            <p>${item.description}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium eum suscipit illo, dolore molestiae quis est impedit laudantium mollitia officiis quas modi maxime, debitis, illum atque dolores rem odio?</p>
            `
            contador ++
        })
    })
