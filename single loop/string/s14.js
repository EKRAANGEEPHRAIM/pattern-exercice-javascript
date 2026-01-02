// Put each word in  the sentence in capital letters

function capitalizeWords(sentence){
return sentence.split(' ').map( w => w[0].toUpperCase() + w.slice(1)).join(' ')
}


console.log(capitalizeWords('I am going to university soon'))