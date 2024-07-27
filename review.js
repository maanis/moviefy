let headText = document.getElementById('headText')
let subText = document.getElementById('subText')
let reviewSec = document.querySelector('#user-review')

let rate

function showForm() {
    document.querySelector(".review-form").classList.add('form-show')
}

function hideForm() {
    document.querySelector(".review-form").classList.remove('form-show')
}

let data = [{
    heading: 'Still one of the best MCU-movies',
    rating: 8,
    review: "In my attempt to rewatch all the MCU-movies chronologically I began with the first Iron Man. To cut to the chase: it's still good. A couple of things astonished me, though: First of all, a common mistake of the later Marvel-movies isn't made here. There is actually some sort of character development visible. Tony ends the movie as a totally different person. Of course, in an origin story it's easier to have your protagonist change but let's compare for a second: Is Ant-man really a changed man at the end of the movie? What about Star Lord? What about Thor? Black Widow? Hawkeye"
},
{
    heading: 'This is where it all began. Queue AC/DC.',
    rating: 8,
    review: "Iron Man was my favorite Marvel hero. As a teen I collected 1-150 with the main series. I doodled the Iron Man helmet during class at high school when bored. So it was a huge surprise when this came out in 2008 and it was so freaking GOOD! Jon Favreau, the guy that had done Elf and Zathura (the Zumanji sequel) had just started a cinematic revolution? What!?!? (And Favreau is doing it again with The Mandalorian)."
},
{
    heading: 'A Marvel superhero film done with class',
    rating: 6,
    review: "When it comes to ranking the Marvel superhero(live action) films, Iron Man is for me up there with the better ones. It looks fabulous, the whole film is very slickly made with top-notch special effects(which look like time and effort was really put into it), awesome-looking futuristic gadgets and Iron Man's suit will be a guaranteed delight to anybody who is familiar or loves anything to do with the superhero."
},
{
    heading: 'RDJ is Iron Man',
    rating: 9,
    review: "Tony Stark (Robert Downey Jr.) is a hard playing billionaire genius. He is captured in Afghanistan after demonstrating his newest weapon. He is forced to create new weapons for his captor. Instead he makes an armored suit to escape. He also makes an arc reactor to keep his heart going and shrapnel from killing him. Once back in the States, he moves his company to concentrate on arc reactor technology and stop weapons manufacturing."
},
]

let rateRadio = document.querySelectorAll('.rateRadio')
console.log(rateRadio)

rateRadio.forEach((e) => {
    return (
        e.addEventListener('click', (e) => {
            rate = e.target.id
            document.getElementById('formRatingText').style.display = 'block'
            document.getElementById('formRating').innerHTML = rate + '/'

        })
    )
})

function handleSubmit(e) {
    // let rate

    console.log(rate)

    let newObj = {
        heading: headText.value,
        rating: rate,
        review: subText.value
    }
    if (newObj.heading && newObj.review != '') {
        let elem = document.createElement('div')
        elem.classList.add('review-box')
        elem.innerHTML = `<div class="w-[80vw] min-h-[125px] mx-4 p-6 bg-zinc-600 rounded-md">
                <h2 class="text-4xl font-semibold">${newObj.heading}</h2>
                <div class="text-2xl my-3"><i class="fa-solid fa-star text-yellow-300 mr-3"></i><span
                        class="text-3xl">${newObj.rating}/</span>10</div>
                <p class="text-2xl">${newObj.review}</p>

            </div>`
        reviewSec.append(elem)
    }
    headText.value = ''
    // rate = 0
    subText.value = ''
}

data.map((e) => {

    let elem = document.createElement('div')
    elem.classList.add('review-box')
    elem.innerHTML = `<div class="w-[80vw] min-h-[125px] mx-4 p-6 bg-zinc-600 rounded-md">
                <h2 class="text-4xl font-semibold">${e.heading}</h2>
                <div class="text-2xl my-3"><i class="fa-solid fa-star text-yellow-300 mr-3"></i><span
                        class="text-3xl">${e.rating}/</span>10</div>
                <p class="text-2xl">${e.review}</p>
            </div>`
    reviewSec.append(elem)

})
