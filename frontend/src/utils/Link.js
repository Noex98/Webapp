export default function Link(path, content){

    return (
        `<a href="javascript:;" 
                    onclick="history.pushState('${path}', null, '${path}'); 
                    dispatchEvent(new Event('navigate', { bubbles: true, cancelable: false }))">
            ${content}
        </a>`
    )
}