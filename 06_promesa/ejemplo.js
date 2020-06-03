const promesaCumple = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 100)
    setTimeout(() => {
        //el if es solamente para determinar una probabilidad de que la  promesa se cumplio
        if (number >= 50) {
            // resolve es cuando si se cumple
            resolve('pastel 🥧')
        } else {
            // rejet es cuando no se cumple 
            reject('no pude entregarte tu pastel ')
        }
    }, 3000)



})
promesaCumple
    // cacha lo que si se cumple 
    .then((pastel) => console.log(pastel)) 
    // cacha cuando no se cumple npm init
    
    .catch((razon) => console.log(razon))