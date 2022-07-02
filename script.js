const msg=document.querySelector('.msg');
const guess=document.querySelector('input');
const btn =document.querySelector('.btn');
let play=false;
let words = ['python','javascript','c++','c#','html','css','reactjs','swift','ruby','java','php','angular','sql','expressjs','android','nodejs','dart','kotlin','perl','pascal','nosql','typescript'];
let newWords = "";
let ranWords = "";

const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * words.length);
    let newTempWords = words[ranNum];
    return newTempWords;

}

const scrambleWords = (arr) => {
    // for scrambling of array index
    for (let i = arr.length-1; i>0; i--)
    {
        let temp = arr[i];
        //console.log(temp)
        let j = Math.floor(Math.random()*(i+1));
        // console.log(i);
        // console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;

}

btn.addEventListener('click', function(){
    if(!play)
    {
        play = true;
        btn.innerText ="Guess";
        guess.classList.toggle('hidden')
        newWords =createNewWords();
        ranWords = scrambleWords(newWords.split("")).join("");
        //console.log(ranWords.join("")); // for scrambling
        msg.innerHTML = `Guess the Word: ${ranWords}`;
    }
    else 
    {
        let tempWord = guess.value;
        if(tempWord === newWords)
        {
            //console.log("Correct");
            play = false;
            msg.innerHTML = `It's Correct !! It is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden')
            guess.value="";
        }
        else 
        {
            //console.log("Wrong");
            msg.innerHTML = `It's incorrect !! Please try again ${ranWords}`;
        }
    }
})
