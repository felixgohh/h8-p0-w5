function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if (arrPenumpang.length === 0) {
        return []
    }

    var hitung = 0;
    var result = [];

    for (var i = 0; i < arrPenumpang.length; i++) {
        var object = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0,
        }
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] === object.naikDari) {
                hitung = j
            }
            if (rute[j] === object.tujuan) {
                hitung -= j
                var jarak = Math.abs(hitung)
            }

        }
        object.bayar = jarak * 2000
        result.push(object)

    }

    return result

}


//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]