// console.log("Start");


// setTimeout(() => {
//     console.log("Inside timeout")
// }, 2000);


// console.log("end")


// const myPromise = new Promise((resolve , reject) => {
//     let success = true ;

//     if(success){
//         resolve("succes !")
//     }else {
//         reject("Error")
//     }
// })

// myPromise.then( result => console.log(result)).catch(err => console.log(err))


// async / await (version moderne)

// function wait () {
//     return new Promise(resolve => {
//         setTimeout(() => {
//            resolve('Done') 
//         }, 2000);
//     })
// }

// async function run() {
//     const result = await wait();
//     console.log(result);
// }

// run()


// fetch-call api

// async function getUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();

//         console.log(data);


//     }

//     catch(err){
//         console.log("Error",err)
//     }
// }


// getUsers();

// function delay (ms){
// return new Promise(resolve => setTimeout(resolve , ms))
// }

// async function login(username , password) {
//     await delay(1000);


//     if(username === "admin" && password === "1234"){
//         return "login succes";

//     }else {
//         throw new Error("Invalid username or password")
//     }
// }



// async function runLogin(){
//     try {
//         const result = await login('admin', '1234');
//         console.log(result)
//     }catch(err){
//         console.log("error", err.message);
        
//     }
// }


// runLogin()

// async function loginMe(username, password) {
//     return new Promise( resolve => setTimeout((resolve) => {
        
//     }, 2000))


//     if(username ='ekra' && password === "1234"){
//         return "Login success"
//     }
//     else{
//         throw new Error("Invalid username or password")
//     }
    
// }




function wait (){
    return new Promise( resolve  => {
        setTimeout(() => {
            resolve("Done")
        }, 2000);
    })
}

async function run() {
    const available = await wait();

    console.log(available)
}

run()