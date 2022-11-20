
function changeColorOnLine(likeElem) {
    if (likeElem.classList.length === 1) {
        let imgElem = likeElem.firstElementChild.firstElementChild
        imgElem.src = '../static/pract10/img/red_heart.png'
        likeElem.classList.add('_liked')

        // addEventListener('mousemove', handleDraw)

        return;
    }
    let imgElem = likeElem.firstElementChild.firstElementChild
    imgElem.src = '../static/pract10/img/heart.png'
    likeElem.classList.remove('_liked')

    // removeEventListener('mousemove', handleDraw)
}


const handleLike = (event) => {
    let elem = event.target
    while (elem.parentElement.classList[0] !== 'crs-search-res-like') {
        elem = elem.parentElement
    }
    elem = elem.parentElement
    changeColorOnLine(elem)
}

const likes = document.querySelectorAll('.crs-search-res-like')
likes.forEach(like => {
    like.addEventListener('click', handleLike)
})