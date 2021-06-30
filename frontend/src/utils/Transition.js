// Transition out then in
export default function Transition__outIn(time){
    let root = document.getElementById('root');
    root.style.animation = ''
    setTimeout(() => {
        root.style.animation = `fadeOutIn ${time}ms ease-in-out forwards`
    }, 0)
}

// Only transition in
export function Transition__in(time){
    let root = document.getElementById('root');
    root.style.animation = ''
    setTimeout(() => {
        root.style.animation = `fadeIn ${time}ms ease-in-out forwards`
    }, 0)
}

// only transition out
export function Transition__out(time){
    let root = document.getElementById('root');
    root.style.animation = ''
    setTimeout(() => {
        root.style.animation = `fadeIn ${time}ms ease-in-out reverse forwards`
    }, 0)
}