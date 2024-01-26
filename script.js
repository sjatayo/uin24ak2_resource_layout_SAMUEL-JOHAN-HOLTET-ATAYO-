const navigasjonsContainer = document.querySelector('.navbar ul')
const hovedSeksjon = document.querySelector('main section')


function genererNavigasjon(resurser) {
    const navigasjonsHtml = resurser.map(resurs => {
        return `<li id="${resurs.category}">${resurs.category}</li>`
    }).join('')
   

    navigasjonsContainer.innerHTML = navigasjonsHtml

    document.querySelectorAll('.navbar li').forEach(element => {
        element.addEventListener('click', function () {
            visInnhold(this.id)
        })
    })
}

function visInnhold(kategori) {
    const resurser = resources.filter(res => res.category === kategori)

    if (resurser.length > 0) {
        let innholdHtml = `<h1>${resurser[0].category}</h1>` 
        innholdHtml += `<p>${resurser[0].text}</p>`
        innholdHtml += '<ul>'

        const kilderHtml = resurser[0].sources.map(kilde => {
            return `<li><a href="${kilde.url}" target="_blank">${kilde.title}</a></li>`
        })

        innholdHtml += kilderHtml.join('')
        innholdHtml += '</ul>'

        hovedSeksjon.innerHTML = innholdHtml
    }
}



genererNavigasjon(resources)
