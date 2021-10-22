// Q1. WAF to check if the string entered is the palindrome string or not.

function Palindrome(str) {


    let len = str.length;

    for (let i = 0; i < len / 2; i++) {


        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// Q2. WAF to count the number of words in the string.

function Count(str) {

    var total = 0;

    for (var i = 0; i < str.length; i++)
        if (str[i] === " ") {
            total = total + 1;
        }
    total = total + 1;
    return total
}

// Q3. WAF to print the number of days in the month using switch case.

function month(n) {
    switch (n) {

        case 1:
            return "31 days";
            break;
        case 2:
            return "28/29 days";
            break;

        case 3:
            return "31 days";
            break;

        case 4:
            return "30 days";
            break;

        case 5:
            return "31 days";
            break;

        case 6:
            return "30 days";
            break;

        case 7:
            return "31 days";
            break;
        case 8:
            return "31 days";
            break;

        case 9:
            return "30 days";
            break;

        case 10:
            return "31 days";
            break;

        case 11:
            return "30 days";
            break;

        case 12:
            return "31 days";
            break;

        default:
            return "invalid";
            break;

    }
}

// Q4. WAF to check if the number is 0, -ve or +ve using switch case.

function intcheck(n) {
    switch (true) {

        case n < 0:
            return "negative";
            break;
        case n > 0:
            return "positive";
            break;
        case n == 0:
            return "zero";
            break;
        default:
            return "invalid";
            break;

    }
}

// Q5. WAF to check if the number is even or not using if else

function check(n) {
    if (n % 2 == 0) {
        console.log("the number is even.")
    }
    else {
        console.log("the number is odd.")
    }
}

// Q6. WAF to check if the number is even or not using switch case.

function check(n) {
    switch (true) {

        case n % 2 == 0:
            return "even";
            break;
        case n % 2 == 1:
            return "odd";
            break;
        default:
            return "invalid";
            break;

    }
}



// Q8. WAF to count the occurrence of a given characters in the string.

function countStr(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            count += 1;
        }
    }
    return count;
}



