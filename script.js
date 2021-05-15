"use strict";

// 1. Replace With Alphabet Position - codewars - 6kyu
/* 
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string) */

function alphabetPosition(text) {
    const alph = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for (let char of text) {
        if (alph.indexOf(char.toLowerCase()) !== -1)
            str += alph.indexOf(char.toLowerCase()) + 1 + " ";
    }

    return str.trim();
}
console.log(alphabetPosition("ali"));
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function alphabetPosition2(text) {
    const alph = "abcdefghijklmnopqrstuvwxyz";
    let str = [];
    for (let char of text) {
        if (alph.indexOf(char.toLowerCase()) !== -1)
            str.push(alph.indexOf(char.toLowerCase()) + 1);
    }

    return str.join(" ");
}
console.log(alphabetPosition2("The sunset sets at twelve o' clock."));

// 2. Disemvowel Trolls - codewars - 7kyu
/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 */
function disemvowel(str) {
    const vowels = "A, E, I, O, U".split(", ");
    for (let vow of vowels) {
        str = str.replaceAll(vow, "");
        str = str.replaceAll(vow.toLowerCase(), "");
    }
    return str;
}
function disemvowel2(str) {
    let vowelsRegex = /aueoi/gi;

    return str.replace(/[aueoi]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel2("This website is for losers LOL!"));
