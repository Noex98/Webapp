import Home from './views/Home.js'
import About from './views/About.js'
import Gallery from './views/Gallery.js'
import Err404 from './views/Err404.js'
import Transition from './utils/Transition.js'

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

addEventListener('load', () => render(window.location.hash))
addEventListener('hashchange', () => {
    render(window.location.hash)
    Transition()
})