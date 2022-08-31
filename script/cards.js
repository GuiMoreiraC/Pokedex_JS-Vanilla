const btnSubmit = document.querySelector('.btn-submit'),
    pokeForm = document.forms['adc-poke-form'],
    pokeCards = [];

function adcPokemonCard(urlImg, nome, desc, custom) {
    pokeCards.push(elements());
    function elements() {
        return {
            urlImg: urlImg,
            nome: nome,
            desc: desc,
            custom: custom,
        };
    }
}

function atualizarGallery() {
    let divGallery = document.querySelector('#gallery');
    let template = '';
    for (const i in pokeCards) {
        template += `
        <div class="card">
            
            <img src="${pokeCards[0].urlImg}" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>${pokeCards[0].nome}</b></h4>
                <p>${pokeCards[0].desc}</p>
            </div>
        </div>
            `;
    }
    divGallery.innerHTML = template;
}

btnSubmit.onclick = function () {
    adcPokemonCard(
        pokeForm['url-img'].value,
        pokeForm['name'].value,
        'test_Desc'
    );
    atualizarGallery();
};
