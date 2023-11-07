let montanas = [];
while (true) {
    for (let i = 0; i < 8; i++){
        const mountainH = parseInt(readline());
        let montana={
            altura: mountainH,
            posicion: i,
        }
       montanas.push(montana);
    }
    montanas.sort(function (a, b){ return b.altura - a.altura });
    for (let j = 0; j < montanas.length; j++){
        console.log(montanas[j].posicion);
    }
}
