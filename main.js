//player
const knights = [
    { name: 'K1', heart: 100, alive: true },
    { name: 'K2', heart: 100, alive: true },
    { name: 'K3', heart: 100, alive: true },
    { name: 'K4', heart: 100, alive: true },
    { name: 'K5', heart: 100, alive: true },
    { name: 'K6', heart: 100, alive: true },
];

//başlangıç değişkenleri
let damage = null;
let count = 0;
let win;

while (true) {

    //rastgele hasar
    damage = Math.floor(Math.random() * 7) + 1;

    //saldıracak oyuncu yaşıyor mu?
    if (knights[count]?.alive) {

        //gecici bir değişken
        let say = count;

        while (true) {

            //hedef oyuncu yaşıyor mu?
            if (knights[say + 1]?.alive) {
                knights[say + 1].heart -= damage;
                console.log(`${knights[count].name} hits ${knights[say + 1].name} by ${damage} damage points`);
                break;
            } else {

                //eğer son oyuncuysa
                if (knights.length == say) {
                    say = 0;

                    //ilk baştaki oyuncu yaşıyor mu?
                    if (knights[say]?.alive) {
                        knights[say].heart -= damage;
                        console.log(`${knights[count].name} hits ${knights[say].name} by ${damage} damage points`);
                        break;
                    } else {

                        //oyunu kontrol ediyoruz döngü bitti mi?
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


    //canı bitenleri false yapıyoruz.
    if (knights[count]?.heart <= 0) {
        knights[count].alive = false;
    }



    //kazananı bulmak için
    if (knights.filter(k => k.alive === true).length == 1) {
        win = knights.find(k => k.alive === true);
        console.log(`win ${knights[count].name}`);
        break;
    }

    //son oyuncuya geldi mi?
    if (knights.length === count) {
        count = 0;
        console.log("--------------")
    } else {
        count += 1;
    }




}
