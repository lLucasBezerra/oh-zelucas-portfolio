const arts = [
        {
    "categoria": "Arte Digital",
    "imagens": [
        "pascoa-desafio.png",
        "granada-jinx-art.png",
        "arma-jinx-art.png",
        "soul-resonance.png",
        "mascara-ekko-art.png",
        "arvore-art.png",
    ],
  },
  {
    "categoria": "Esculturas",
    "imagens": [
      "baby-yoda-art.jpeg",
      "chaveiro-art.jpeg",
      "lagarta-pincel-art.jpeg",
      "peixe-art.jpeg",
      "pomni-art.jpeg",
      "quirrel-art.jpeg",
      "rpg-art.jpeg",
    ],
  },
  {
      "categoria": "Arte Tradicional",
      "imagens": [
          "brook-art.jpeg",
          "tartaruga-de-cristal-art.jpeg",
          "miles-art.jpeg",
          "abstrato-art.jpeg",
        ],
    },
];

const projectList = document.querySelector("#project-list");

arts.forEach((art) => {

    const categoria = document.createElement("section");

    const titulo = document.createElement("h3");
    titulo.textContent = art.categoria;

    categoria.appendChild(titulo);
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    art.imagens.forEach((imagem) => {

        const img = document.createElement("img");
        img.classList.add("art-image");
        img.src = `assets/images/art/${imagem}`;
        img.alt = art.categoria;

        imgContainer.appendChild(img);
    });
    categoria.appendChild(imgContainer);

    projectList.appendChild(categoria);
});

