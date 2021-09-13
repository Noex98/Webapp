import Home from './views/Home.js'
import About from './views/About.js'
import Gallery from './views/Gallery.js'
import Err404 from './views/Err404.js'
import Transition__outIn from './utils/Transition.js'


const routes = [
    {
        path: '/',
        view: Home
    },
    {
        path: '/about',
        view: About
    },
    {
        path: '/gallery',
        view: Gallery
    }
]

let root = document.getElementById('root')

// Links
window.navigateTo = (path) => {
    let target = routes.find(element => element.path === path);
    root.innerHTML = target !== undefined ? target.view() : Err404()
    window.history.pushState(null, null, path)
}

// History api
window.onpopstate = () => {
    let target = routes.find(element => element.path === window.location.pathname);
    root.innerHTML = target !== undefined ? target.view() : Err404()
}

// First render
window.onload = () => navigateTo(window.location.pathname)