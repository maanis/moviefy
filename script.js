function showInput() {
    document.querySelector('.search-input').classList.add('show-input')
    document.querySelector('.cross').style.display = "block"

}

console.log(document.querySelector('.review-button').href)
document.querySelector('.cross').addEventListener('click', () => {
    document.querySelector('.search-input').classList.remove('show-input')
    document.querySelector('.cross').style.display = "none"
    search_input.value = ""
    search_container.style.visibility = "hidden"
})


let scroll_right = document.querySelector('.fa-chevron-right')
let scroll_left = document.querySelector('.fa-chevron-left')
let items = document.querySelector('.collection')
let search_container = document.querySelector('.search-container')
var search_input = document.getElementById('search-input')

scroll_right.addEventListener('click', () => {
    items.scrollLeft += 140;
})
scroll_left.addEventListener('click', () => {
    items.scrollLeft -= 140;
})

function openNav() {
    document.querySelector('.hamburger-items').classList.toggle('ham-show')
    document.querySelector('#ham-ul').classList.toggle('ul-show')
}

function hide() {
    document.querySelector('.hamburger-items').classList.remove('ham-show')
    document.querySelector('#ham-ul').classList.remove('ul-show')
}

document.querySelector('.btn-trailer').addEventListener('click', () => {
    document.querySelector('.frame-containner').classList.add('iframe-show')
    document.querySelector('.hero').classList.add('hero-gradient')
})

document.querySelector('.cross-frame').addEventListener('click', () => {
    document.querySelector('.frame-containner').classList.remove('iframe-show')
    document.querySelector('.hero').classList.remove('hero-gradient')

})

var check = 0
let video = document.getElementsByTagName('video')[0]
document.querySelector('.vid-navigator').addEventListener("click", () => {

    if (check == 0) {
        document.querySelector('.box2').innerHTML = `<i class="fa-solid fa-play"></i>`
        video.pause()
        check = 1

    } else {
        document.querySelector('.box2').innerHTML = `<i class="fa-solid fa-pause"></i>`
        video.play()
        check = 0
    }
})
document.querySelector('.nav-2').addEventListener("click", () => {

    if (check == 0) {
        document.querySelector('.boxb2').innerHTML = `<i class="fa-solid fa-play"></i>`
        video.pause()
        check = 1

    } else {
        document.querySelector('.boxb2').innerHTML = `<i class="fa-solid fa-pause"></i>`
        video.play()
        check = 0
    }
})

let url = 'MarvelPhase1.json'

async function main() {
    let res = await fetch(url)
    let data = await res.json()
    // console.log(data[2].name)
    // console.log(typeof data)
    // let Arrdata = Array.from(data)
    // console.log(Arrdata)
    // console.log(typeof Arrdata)
    // let x = data.reverse()
    // console.log(x)
    data.forEach((e, id) => {

        // -------------search section-----------
        console.log(e)

        let search_card = document.createElement('a')
        search_card.classList.add('cards')
        search_card.innerHTML = `<img src="${e.sposter}" alt="">
        <div class="card-details">
            <h2 class="h-name">${e.name}</h2>
            <p>${e.genre},  ${e.date},  <span>IMDB</span><i class="fa-solid fa-star"></i>,  ${e.imdb}</p>
        </div>`
        document.querySelector('.search-container').append(search_card)

        search_card.addEventListener('click', (el) => {
            document.querySelector('.hero').style.background = `url(${e.hero}) no-repeat center center/cover`

            document.getElementById('head-name').innerHTML = e.name
            // console.log(e[el.target.id].name)
            console.log(e.trailer)
            search_container.style.display = "none"
            search_input.value = ""
            document.querySelector('.search-input').classList.remove('show-input')
            document.querySelector('.cross').style.display = "none"
        })


        // -----------popular section--------------
        let elem = document.createElement('a')
        elem.classList.add('card')
        elem.id = id
        elem.innerHTML = `<div class="poster"><img src="${e.sposter}" alt="${e.name}"></div>
        <div class="wide-poster" id="${id}">
            <img src="${e.bposter}"
                alt="">
            <div class="poster-content">
                <div class="name">${e.name}</div>
                <div class="sub">
                    <div class="type">${e.genre}</div>
                    <div class="rate"><span>IMDB</span><i class="fa-solid fa-star"></i> ${e.imdb}</div>
                </div>
            </div>
        </div>`

        document.getElementsByClassName('collection')[0].append(elem)

        elem.addEventListener('click', (el) => {
            document.querySelector('.hero').style.background = `url(${e.hero}) no-repeat center center/cover`
            document.getElementById('head-name').innerHTML = e.name
            document.getElementById('content-date').innerHTML = e.date
            document.querySelector('.rate').innerHTML = `<span>IMDB</span> <i class="fa-solid fa-star"></i> ${e.imdb}`
            document.querySelector('#head-summary').innerHTML = `${e.overview}`
            document.getElementById('head-genre').innerHTML = `${e.genre}`
            // document.getElementById('hero-vid').src = `${e.trailer}`
            document.getElementById('frame-src').src = e.iframe
            document.querySelector('.review-button').href = e.review
            // console.log(document.querySelector('.review-button').href)
            console.log(document.querySelector('.review-button'))
            console.log(e.frame)

            document.getElementById('img1').src = e.ss1
            document.getElementById('img2').src = e.ss2
            document.getElementById('img3').src = e.ss3

            // console.log(e[el.target.id].name)
            console.log(e.name)
            console.log(e.imdb)
            console.log(e.hero)
            console.log(e.trailer)

        })

        search_input.addEventListener("keyup", () => {
            let filter = search_input.value.toUpperCase()
            let a = search_container.getElementsByTagName('a')

            for (let i = 0; i < a.length; i++) {
                let b = a[i].getElementsByClassName('h-name')[0]

                let textValue = b.textContent.toUpperCase() || b.innerText.toUpperCase()
                if (textValue.indexOf(filter) > -1) {
                    a[i].style.display = "flex"
                    search_container.style.display = "block"
                    search_container.style.visibility = "visible"
                    search_container.style.opacity = 1

                } else {
                    a[i].style.display = "none"
                }
                if (search_input.value == '') {
                    search_container.style.display = "none"
                    search_container.style.opacity = 0
                }
            }
        })

    });
}

main()

let urlb = 'MarvelPhase2.json'

async function mainb() {
    let res = await fetch(urlb)
    let data = await res.json()
    // console.log(data[2].name)
    // console.log(typeof data)
    // let Arrdata = Array.from(data)
    // console.log(Arrdata)
    // console.log(typeof Arrdata)
    // let x = data.reverse()
    // console.log(x)
    data.forEach((e, id) => {

        // -------------search section-----------
        let search_card = document.createElement('a')
        search_card.classList.add('cards')
        search_card.innerHTML = `<img src="${e.sposter}" alt="">
        <div class="card-details">
            <h2 class="h-name">${e.name}</h2>
            <p>${e.genre},  ${e.date},  <span>IMDB</span><i class="fa-solid fa-star"></i>,  ${e.imdb}</p>
        </div>`
        document.querySelector('.search-container').append(search_card)

        search_card.addEventListener('click', (el) => {
            document.querySelector('.hero').style.background = `url(${e.hero}) no-repeat center center/cover`
            document.getElementById('head-name').innerHTML = e.name
            // console.log(e[el.target.id].name)
            console.log(e.name)
            search_container.style.display = "none"
            search_input.value = ""
            document.querySelector('.search-input').classList.remove('show-input')
            document.querySelector('.cross').style.display = "none"
        })


        // -----------popular section--------------
        let elem = document.createElement('a')
        elem.classList.add('card')
        elem.id = id
        elem.innerHTML = `<div class="poster"><img src="${e.sposter}" alt="${e.name}"></div>
        <div class="wide-poster" id="${id}">
            <img src="${e.bposter}"
                alt="">
            <div class="poster-content">
                <div class="name">${e.name}</div>
                <div class="sub">
                    <div class="type">${e.genre}</div>
                    <div class="rate"><span>IMDB</span><i class="fa-solid fa-star"></i> ${e.imdb}</div>
                </div>
            </div>
        </div>`

        document.getElementsByClassName('collection')[1].append(elem)

        elem.addEventListener('click', (el) => {
            document.querySelector('.hero').style.background = `url(${e.hero}) no-repeat center center/cover`
            document.getElementById('head-name').innerHTML = e.name
            document.getElementById('content-date').innerHTML = e.date
            document.querySelector('.rate').innerHTML = `<span>IMDB</span> <i class="fa-solid fa-star"></i> ${e.imdb}`
            document.querySelector('#head-summary').innerHTML = `${e.overview}`

            // console.log(e[el.target.id].name)
            console.log(e.name)
            console.log(e.imdb)
            console.log(e.hero)

        })

        search_input.addEventListener("keyup", () => {
            let filter = search_input.value.toUpperCase()
            let a = search_container.getElementsByTagName('a')

            for (let i = 0; i < a.length; i++) {
                let b = a[i].getElementsByClassName('h-name')[0]

                let textValue = b.textContent.toUpperCase() || b.innerText.toUpperCase()
                if (textValue.indexOf(filter) > -1) {
                    a[i].style.display = "flex"
                    search_container.style.displaye = "block"

                    search_container.style.opacity = 1

                } else {
                    a[i].style.display = "none"
                }
                if (search_input.value == '') {
                    search_container.style.displaye = "none"
                    search_container.style.opacity = 0
                }
            }
        })

    });
}

mainb()

let urlc = 'MarvelPhase3.json'

async function mainc() {
    let res = await fetch(urlc)
    let data = await res.json()
    // console.log(data[2].name)
    // console.log(typeof data)
    // let Arrdata = Array.from(data)
    // console.log(Arrdata)
    // console.log(typeof Arrdata)
    // let x = data.reverse()
    // console.log(x)
    data.forEach((e, id) => {

        // -------------search section-----------
        let search_card = document.createElement('a')
        search_card.classList.add('cards')
        search_card.innerHTML = `<img src="${e.sposter}" alt="">
        <div class="card-details">
            <h2 class="h-name">${e.name}</h2>
            <p>${e.genre},  ${e.date},  <span>IMDB</span><i class="fa-solid fa-star"></i>,  ${e.imdb}</p>
        </div>`
        document.querySelector('.search-container').append(search_card)

        search_card.addEventListener('click', (el) => {
            document.querySelector('.hero').style.background = `url(${e.hero}) no-repeat center center/cover`
            document.getElementById('head-name').innerHTML = e.name
            // console.log(e[el.target.id].name)
            console.log(e.name)
            search_container.style.display = "none"
            search_input.value = ""
            document.querySelector('.search-input').classList.remove('show-input')
            document.querySelector('.cross').style.display = "none"
        })


        // -----------popular section--------------
        let elem = document.createElement('a')
        elem.classList.add('card')
        elem.id = id
        elem.innerHTML = `<div class="poster"><img src="${e.sposter}" alt="${e.name}"></div>
        <div class="wide-poster" id="${id}">
            <img src="${e.bposter}"
                alt="">
            <div class="poster-content">
                <div class="name">${e.name}</div>
                <div class="sub">
                    <div class="type">${e.genre}</div>
                    <div class="rate"><span>IMDB</span><i class="fa-solid fa-star"></i> ${e.imdb}</div>
                </div>
            </div>
        </div>`

        document.getElementsByClassName('collection')[2].append(elem)

        elem.addEventListener('click', (el) => {
            document.querySelector('.hero').style.background = `url(${e.hero}) no-repeat center center/cover`
            document.getElementById('head-name').innerHTML = e.name
            document.getElementById('content-date').innerHTML = e.date
            document.querySelector('.rate').innerHTML = `<span>IMDB</span> <i class="fa-solid fa-star"></i> ${e.imdb}`
            document.querySelector('#head-summary').innerHTML = `${e.overview}`


            // console.log(e[el.target.id].name)
            console.log(e.name)
            console.log(e.imdb)
            console.log(e.hero)

        })

        search_input.addEventListener("keyup", () => {
            let filter = search_input.value.toUpperCase()
            let a = search_container.getElementsByTagName('a')

            for (let i = 0; i < a.length; i++) {
                let b = a[i].getElementsByClassName('h-name')[0]

                let textValue = b.textContent.toUpperCase() || b.innerText.toUpperCase()
                if (textValue.indexOf(filter) > -1) {
                    a[i].style.display = "flex"
                    search_container.style.displaye = "block"
                    search_container.style.visibility = "visible"
                    search_container.style.opacity = 1

                } else {
                    a[i].style.display = "none"
                }
                if (search_input.value == '') {
                    search_container.style.displaye = "none"
                    search_container.style.opacity = 0
                }
            }
        })

    });
}

mainc()


