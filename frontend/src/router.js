import Home from './views/Home.js'
import About from './views/About.js'
import Gallery from './views/Gallery.js'
import Err404 from './views/Err404.js'

const routes = [
    {
        hash: '#/',
        view: Home()
    },
    {
        hash: '#/about',
        view: About()
    },
    {
        hash: '#/gallery',
        view: Gallery()
    }
]

function render(hash){
    let root = document.getElementById('root')
    let target = routes.find(element => element.hash === hash);
    if (location.hash){
        root.innerHTML = target !== undefined ? target.view : Err404()
    } else {
        root.innerHTML = Home();
    }
    
}

addEventListener('load', () => {
    render(window.location.hash)
})

window.onhashchange = () => render(window.location.hash)