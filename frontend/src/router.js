import Home from './views/Home.js'
import About from './views/About.js'
import Gallery from './views/Gallery.js'
import Err404 from './views/Err404.js'
import {Transition__in, Transition__out} from './utils/Transition.js'

const routes = [
    {
        hash: '/',
        view: Home()
    },
    {
        hash: '/about',
        view: About()
    },
    {
        hash: '/gallery',
        view: Gallery()
    }
]

let root = document.getElementById('root')
function render(hash){

    let target = routes.find(element => '#' + element.hash === hash);
    if (location.hash){
        root.innerHTML = target !== undefined ? target.view : Err404()
    } else {
        root.innerHTML = Home();
    }
}

let transitionDelay = 300;

// First render
addEventListener('load', () => render(window.location.hash))

// When navigating site
addEventListener('hashchange', () => {
    // Transition out
    Transition__out(transitionDelay)
    // Wait for animation to finish
    setTimeout(() => {
        render(window.location.hash)
        Transition__in(transitionDelay)
    },transitionDelay)
    
})