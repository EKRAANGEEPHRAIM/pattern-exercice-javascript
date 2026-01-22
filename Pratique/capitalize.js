// Capitilize each word 

function capitalizeWords(str){
    return str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
}
//O(n)

console.log(['eat', 'rise', 'keep'])