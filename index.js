const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

//slidesssssssss

var counter = 1
setInterval(function () {
  document.getElementById('radio' + counter).checked = true
  counter++
  if (counter > 4) {
    counter = 1
  }
}, 5000)

// var counter = 0;

// var slides = document.querySelectorAll('.slide')
// var btns = document.querySelectorAll('.btn')
// let currentSlide = 1

// // Javascript for image slider manual navigation
// var manualNav = function (manual) {
//   slides.forEach((slide) => {
//     slide.classList.remove('active')

//     btns.forEach((btn) => {
//       btn.classList.remove('active')
//     })
//   })

//   slides[manual].classList.add('active')
//   btns[manual].classList.add('active')
// }

// btns.forEach((btn, i) => {
//   btn.addEventListener('click', () => {
//     manualNav(i)
//     currentSlide = i
//   })
// })

// // Javascript for image slider autoplay navigation
// var repeat = function (activeClass) {
//   let active = document.getElementsByClassName('active')
//   let i = 1

//   var repeater = () => {
//     setTimeout(function () {
//       ;[...active].forEach((activeSlide) => {
//         activeSlide.classList.remove('active')
//       })

//       slides[i].classList.add('active')
//       btns[i].classList.add('active')
//       i++

//       if (slides.length == i) {
//         i = 0
//       }
//       if (i >= slides.length) {
//         return
//       }
//       repeater()
//     }, 10000)
//   }
//   repeater()
// }
// repeat()

mapboxgl.accessToken =
  'pk.eyJ1IjoiaG9wZTAyOCIsImEiOiJja3N3OW9uNm8xMDFnMnhwNjI4cHN0NXdrIn0.u1TwT5sDOiGpgpudZraOkQ'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/hope028/cksxgqkr882aq17nkjqde0e8p',
  center: [-97.187824103618, 49.80401368562028],
  zoom: 13,
})

var nav = new mapboxgl.NavigationControl()
map.addControl(nav)

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-97.187824103618, 49.80401368562028],
      },
      properties: {
        title: 'Oak Lawn Child Care',
        description: '69 Oak Lawn Rd',
      },
    },
  ],
}

// add markers to map
for (const { geometry, properties } of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'marker'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(`<h3>${properties.title}</h3><p>${properties.description}</p>`)
    )
    .addTo(map)
}
