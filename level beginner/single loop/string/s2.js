// find the longest word

function longWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let w of words) {
    if (w.length > longest.length) {
      longest = w;
    }
  }

  return longest;
}

console.log(longWord("je mange beaucoup aujourd'hui"));//aujourd ' hui;


