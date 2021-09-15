export let user = {
    loaded: false,
    
    dataStore: undefined,

    data: () => {
        if (user.loaded){
            return user.dataStore
        } else {
            fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                user.dataStore = data 
                user.loaded = true
                navigateTo()
            })
        }
    }
}