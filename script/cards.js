const btnSubmit = document.querySelector('.btn-submit'),
    pokeCards = [];

function adcPokemonCard(urlImg, nome, desc, tipo) {
    pokeCards.push(elements());
    function elements() {
        return {
            urlImg: urlImg,
            nome: nome,
            desc: desc,
            tipo: tipo,
            // custom: custom,
        };
    }
}

function atualizarGallery() {
    let divGallery = document.querySelector('#gallery');
    let template = '';

    for (const i in pokeCards) {
        let templateTipo = '';

        for (const index in pokeCards[i].tipo) {
            templateTipo = `
            <span>${pokeCards[i].tipo[index]}</span>
            `;
        }

        template += `
        <div class="card">
            <img
                src="${pokeCards[i].urlImg}"
                alt="${pokeCards[i].nome}"
            />
            <div class="container">
                <h2>${pokeCards[i].nome}</h2>
                <p>${pokeCards[i].desc}</p>
                <div class="type">${templateTipo}</div>
            </div>
        </div>
        `;
    }
    divGallery.innerHTML = template;
}

btnSubmit.onclick = function () {
    const pokeForm = document.forms['adc-poke-form'],
        inputTipos = document.querySelectorAll('.list-types li input');
    let tipo = [];
    for (const i in inputTipos) {
        if (inputTipos[i].checked) {
            tipo.push(inputTipos[i].value);
        }
    }
    adcPokemonCard(
        pokeForm['url-img'].value,
        pokeForm['name'].value,
        pokeForm['descricao'].value,
        tipo
    );
    atualizarGallery();
};
