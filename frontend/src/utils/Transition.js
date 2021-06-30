export function Transition__in(delay){
    let root = document.getElementById('root');
    root.style.animation = ''
    setTimeout(() => {
        root.style.animation = `fadeIn ${delay}ms ease-in-out forwards`
    }, 0)
}

export function Transition__out(delay){
    let root = document.getElementById('root');
    root.style.animation = ''
    setTimeout(() => {
        root.style.animation = `fadeIn ${delay}ms ease-in-out reverse forwards`
    }, 0)
}