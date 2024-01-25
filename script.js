const navigasjonsContainer = document.querySelector('.navbar ul')
const hovedSeksjon = document.querySelector('main section')


function genererNavigasjon(resurser) {
    const navigasjonsHtml = resurser.map(resurs => {
        return `<li id="${resurs.category}" style="background-color: #2A324B; padding: 12px 20px;">${resurs.category}</li>`
    }).join('')

    navigasjonsContainer.innerHTML = navigasjonsHtml

    document.querySelectorAll('.navbar li').forEach(element => {
        element.addEventListener('click', function () {
            visInnhold(this.id)
        })
    })
}

function visInnhold(kategori) {
    const resurs = resources.find(res => res.category === kategori)

    if (resurs) {
        let innholdHtml = `<h1>${resurs.category}</h1>`
        innholdHtml += `<p>${resurs.text}</p>`
        innholdHtml += '<ul>'
        resurs.sources.forEach(kilde => {
            innholdHtml += `<li><a href="${kilde.url}" target="_blank">${kilde.title}</a></li>`
        })
        innholdHtml += '</ul>'

        hovedSeksjon.innerHTML = innholdHtml
    }
}

genererNavigasjon(resources)
