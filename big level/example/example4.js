function delay (ms){
return new Promise(resolve => setTimeout(resolve , ms))
}

async function login(username , password) {
    await delay(1000);


    if(username === "admin" && password === "1234"){
        return "login succes";

    }else {
        throw new Error("Invalid username or password")
    }
}



async function runLogin(){
    try {
        const result = await login('admin', '1234');
        console.log(result)
    }catch(err){
        console.log("error", err.message);
        
    }
}


runLogin()

//login succes