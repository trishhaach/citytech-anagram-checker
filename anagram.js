const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first string: ", (s) => {
    rl.question("Enter second string: ", (t) => {

        s = s.toLowerCase();
        t = t.toLowerCase();

        // Check length
        if (s.length !== t.length) {
            console.log("Not an anagram");
            rl.close();
            return;
        }

        // Count characters
        const count = {};

        for (let i = 0; i < s.length; i++) {
            count[s[i]] = (count[s[i]] || 0) + 1;
            count[t[i]] = (count[t[i]] || 0) - 1;
        }

        // Check if all counts are zero
        let isAnagram = true;
        for (let key in count) {
            if (count[key] !== 0) {
                isAnagram = false;
                break;
            }
        }

        if (isAnagram) {
            console.log("Anagram");
        } else {
            console.log("Not an anagram");
        }

        rl.close();
    });
});
