// const promise = new Promise((resolve,reject) => {
//     const num = Math.floor(Math.random() * 100)
//     if(num%2) resolve("odd")
//     else reject("even")
//     })
//     promise.then((data) => {
//     console.log(data)
//     }).catch((error) => {
//     console.log(error)
//     })

// function oddEven(){
//     return promise = new Promise((resolve,reject) => {
//     const num = Math.floor(Math.random() * 100)
//     if(num%2) resolve("odd")
//     else reject("even")
//     })
//     }
//     oddEven().then((data) => {
//     console.log(data)
//     }).catch((error) => {
//     console.log(error)
//     })

    // function oddEven(){
    //     return promise = new Promise((resolve,reject) => {
    //     resolve(1)
    //     })
    //     }
    //     oddEven().then((data) => {
    //     console.log(data) // 1
    //     return data*2
    //     })
    //     .then((data) => {
    //     console.log(data) // 2
    //     return data*3
    //     })
    //     .then((data) => {
    //     console.log(data)  //6
    //     })
    //     .catch((error) => {
    //     console.log(error)
    //     })
    
    //race

    // const promise1 = () => new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //     resolve(1)
    //     },100)
    //     })
    //     const promise2 = () => new Promise((resolve,reject) => {
    //     resolve(2)
    //     })
    //     const promise3 = () => new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //     resolve(3)
    //     })
    //     })
    //     Promise.race([promise1(),promise2(),promise3()])
    //     .then((val) => {
    //     console.log(val) // 2
    //     })
    //     .catch((err) => {
    //     console.log(err)
    //     })


    //all
        // const promise1 = () => new Promise((resolve,reject) => {
        //     setTimeout(() => {
        //     resolve(1)
        //     },100)
        //     })
        //     const promise2 = () => new Promise((resolve,reject) => {
        //     resolve(2)
        //     })
        //     const promise3 = () => new Promise((resolve,reject) => {
        //     setTimeout(() => {
        //     resolve(3)
        //     })
        //     })
        //     Promise.all([promise1(),promise2(),promise3()])
        //     .then((val) => {
        //     console.log(val) // [1,2,3]
        //     })
        //     .catch((err) => {
        //     console.log(err)
        //     })

    //any

        // const promise1 = () => new Promise((resolve,reject) => {
        //     setTimeout(() => {
        //     resolve(1)
        //     },100)
        //     })
        //     const promise2 = () => new Promise((resolve,reject) => {
        //     reject(2)
        //     })
        //     const promise3 = () => new Promise((resolve,reject) => {
        //     setTimeout(() => {
        //     resolve(3)
        //     })
        //     })
        //     Promise.any([promise1(),promise2(),promise3()])
        //     .then((val) => {
        //     console.log(val) // 3
        //     })
        //     .catch((err) => {
        //     console.log(err)
        //     })

        //allsettled
            
            // const promise1 = () => new Promise((resolve,reject) => {
            //     setTimeout(() => {
            //     resolve(1)
            //     },100)
            //     })
            //     const promise2 = () => new Promise((resolve,reject) => {
            //     reject(2)
            //     })
            //     const promise3 = () => new Promise((resolve,reject) => {
            //     setTimeout(() => {
            //     resolve(3)
            //     })
            //     })
            //     Promise.allSettled([promise1(),promise2(),promise3()])
            //     .then((val) => {
            //     console.log(val) // 3
            //     })
            //     .catch((err) => {
            //     console.log(err)
            //     })
                // Output:
                // [
                // { status: 'fulfilled', value: 1 },
                // { status: 'rejected', reason: 2 },
                // { status: 'fulfilled', value: 3 }

        
            // for (let i=0; i<=10; i++){
            //     console.log("Apna college");
            // }
            // console.log("Loop has ended")