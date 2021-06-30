export default function Transition(){
    let root = document.getElementById('root');
    root.style.animation = 'none'
    setTimeout(() => {
        root.style.animation = 'fadeIn 750ms ease-in-out forwards'
    }, 0)
    
}