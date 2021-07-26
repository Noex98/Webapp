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
function render(){

    let target = routes.find(element => '#' + element.hash === window.location.hash);
    if (location.hash){
        root.innerHTML = target !== undefined ? target.view() : Err404()
    } else if (location.pathname === '/'){
        root.innerHTML = Home();
    } else {
        root.innerHTML = Err404();
    }
}


// First render
addEventListener('load', () => render())

let transitionTime = 500; //in ms

addEventListener()


// When navigating site
addEventListener('navigate', () => {
    Transition__outIn(transitionTime)
    setTimeout(() => {  
        render()
    },transitionTime / 2)
})