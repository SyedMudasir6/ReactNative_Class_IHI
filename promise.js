let x=3

const main = new Promise ((resolve, reject)=>{

                if(x==2){
                resolve("success!")
                }else{
                reject("reject")
                }
})


main
.then(res2=> console.log(res2,"resolve"))
.catch(error=>console.log(error,"error"))



// const prom1 = new Promise((res,rej)=>{
//                 res("promise 1 resolve")
// })

// const prom2 = new Promise((res,rej)=>{
//                 res("promise 2 resolve")
//                 // rej("reject")
// })

// const prom3 = new Promise((res,rej)=>{
//                 res("promise 3 resolve")
// })


// const promiseAll =Promise.all([
//                 prom1,prom2,prom3
// ])
// promiseAll.then(res=>console.log(res))
// .catch(e=>console.log(e))

// const promiseAllSettled = Promise.allSettled([
//                 prom1, prom2, prom3
// ])
// promiseAllSettled.then(res=>console.log(res))
// .catch(e=>console.log(e))



// const prom1 = new Promise((res, rej) => {

//                 setTimeout(() => {
//                                 res("promise 1 resolve")
//                 }, 2000)

// })

// const prom2 = new Promise((res, rej) => {
//                 setTimeout(() => {
//                                 res("promise 2 resolve")
//                 }, 1000)
// })

// const prom3 = new Promise((res, rej) => {
//                 setTimeout(() => {
//                                 res("promise 3 resolve")
//                 }, 4000)
// })

// const promiseRace = Promise.race([prom1, prom2, prom3])
//                 .then(res => console.log(res, 'resolve'))
//                 .catch(e => console.log(e, "erroe"))

// setInterval(()=>{
// console.log("setTimeout")
// },1000)
