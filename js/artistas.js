const artistas = [
    { nombre: "Luz Aurora", genero: "Indie Pop", descripcion: "Una voz fresca y auténtica que mezcla emociones y sonidos del presente.", imagen: "/img/index/luz_aurora.jpg" },
    { nombre: "Río Salvaje", genero: "Folk", descripcion: "Canciones que nacen de la naturaleza y las experiencias de la vida.", imagen: "/img/index/rio_salvaje.jpg" },
    { nombre: "Neón Fractal", genero: "Electrónica", descripcion: "Sonidos urbanos y atmósferas que conectan con el ahora.", imagen: "/img/index/Neon_Steve.jpg" },
    { nombre: "Valentina Cruz", genero: "Rock alternativo", descripcion: "Letra profunda, guitarras reales y una pasión por la música.", imagen: "/img/index/valentina_cruz.jpg" },
    { nombre: "Milena Warthon", genero: "Pop andino", descripcion: "Fusiona el pop con sonidos andinos y celebra la identidad cultural peruana.", imagen: "/img/index/milena_warthon.jpg" },
    { nombre: "Kapo", genero: "Afrobeats latino", descripcion: "Destaca por sus ritmos tropicales y canciones de sonido urbano.", imagen: "/img/index/kapo.jpg" }
];

const contenedor = document.getElementById("artistas");

artistas.forEach(artista => {
    contenedor.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
                <img src="${artista.imagen}" class="card-img-top" alt="${artista.nombre}">
                <div class="card-body">
                    <span class="badge mx-auto mb-2">${artista.genero}</span>
                    <h5 class="card-title fw-bold">${artista.nombre}</h5>
                    <p class="card-text small">${artista.descripcion}</p>
                    <a href="#" class="btn btn-sm">Ver perfil</a>
                </div>
            </div>
        </div>`;
});