let friends = ["Morgan", "Rumble", "Reed", "Alex", "Zack"];

for (i = 0; i < friends.length; i++) {
    console.log(friends[i].toUpperCase() + ':');

    for (j = 99; j > 0; j--) {
        if(j > 1) {
            let number = j;
            let name = friends[i];
            console.log(number + ' lines of code in the file, ' + number + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (number-1) + ' lines of code in the file');
        }
        else {
            let number = j;
            let name = friends[i];
            console.log(number + ' line of code in the file, ' + number + ' line of code; ' + name + ' strikes one out, clears it all out, ' + 'no more lines of code in the file');
        }
        }
    }

