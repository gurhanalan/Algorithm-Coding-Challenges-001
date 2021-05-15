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

// ##############################################################################
// 3. Who likes it? - codewars - 6kyu
/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
 */
// Likes function
function likes(names) {
    let length = names.length;
    if (length === 0) return "no one likes this";
    if (length === 1) return `${names[0]} likes this`;
    if (length === 2) return `${names[0]} and ${names[1]} likes this`;
    if (length === 3)
        return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
    if (length >= 4) {
        return `${names[0]}, ${names[1]} and ${length - 2} others likes this`;
    }
}
console.log(likes([]));
// likes (["Peter"]) // must be "Peter likes this"
// likes (["Jacob", "Alex"]) // must be "Jacob and Alex like this"
// likes (["Max", "John", "Mark"]) // must be "Max, John and Mark like this"
// likes (["Alex", "Jacob", "Mark", "Max"]) // must be "Alex, Jacob and 2 others like this"
