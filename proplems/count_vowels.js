const text ="hello there"

let countingVowels = (str)=>{
    let vowels='aeiouAEIOU';
    let count =0;
    for(let letter of str){
        // console.log(letter);
        if(vowels.includes(letter)){
            count++;
        }
    }
    console.log(count);
}
countingVowels(text)