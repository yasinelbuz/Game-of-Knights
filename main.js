//player
const knights = [
    { name: 'K1', heart: 100, alive: true },
    { name: 'K2', heart: 100, alive: true },
    { name: 'K3', heart: 100, alive: true },
    { name: 'K4', heart: 100, alive: true },
    { name: 'K5', heart: 100, alive: true },
    { name: 'K6', heart: 100, alive: true },
];

let damage = null;
let count = 0;
let win;

while (true) {

    //hasar number
    damage = Math.floor(Math.random() * 7) + 1;

    if (knights[count]?.alive) {
        let say = count;
        while (true) {
            if (knights[say + 1]?.alive) {
                knights[say + 1].heart -= damage;
                console.log(`${knights[count].name} hits ${knights[say + 1].name} by ${damage} damage points`);
                break;
            } else {
                if (knights.length == say) {
                    say = 0;
                    if (knights[say]?.alive) {
                        knights[say].heart -= damage;
                        console.log(`${knights[count].name} hits ${knights[say].name} by ${damage} damage points`);
                        break;
                    } else {
                        say += 1;
                        if (say === count) {
                            break;
                        }
                    }
                } else {
                    say += 1;
                }
            }
        }
    }



    if (knights[count]?.heart <= 0) {
        knights[count].alive = false;
    }



    if (knights.filter(k => k.alive === true).length == 1) {
        win = knights.find(k => k.alive === true);
        console.log(`win ${knights[count].name}`);
        break;
    }

    if (knights.length === count) {
        count = 0;
        console.log("--------------")
    } else {
        count += 1;
    }




}
