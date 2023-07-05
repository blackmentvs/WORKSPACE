//  = 1;
// let V = 5;
// let X = 10;
// let L = 50;
// let C = 100;
// let D = 500;
// let M = 1000;
// let soLama = '';
// let tramLama = '';
// let chucLama = '';
// let dvLama = '';


// // 867 >> 800 + 60 + 7 >> DCCC LX VII

// function Lama(value) {
//     if (value < 1000) {

//         let tram = Math.floor(value / 100) * 100;
//         console.log(tram);
//         if (tram >= 500 && tram <= 900) {
//             tramLama = (tram - 500) == 0 ? 'D' : `DCCC`
//             console.log(tramLama);

//         } 

//         }
//         let chuc = Math.floor((value % 100) / 10) * 10;
//         console.log(chuc);
//         let dv = value % 10;
//         console.log(dv);

//         console.log(`so: ${tram / 100}${chuc / 10}${dv}`);

//     } else {
//         console.log('Nhập số nhỏ hơn');
//     }






void main()
{
	int n, i, j, d;
	clrscr();
	printf("Nhap gia tri N : ");
	scanf("%d", &n);
	printf("Cac so nguyen to khong vuot qua %d la :\n", n);

	for (d = 0, i = 2; i <= n; i++)
	{
		for (j = 2; j <= i / 2; j++)
			if (i % j == 0) break;
		if (j == i / 2 + 1)
		{
			d++;
			printf(" %d", i);
		}
	}
	printf("\nTong so co %d so nguyen to", d);
	getch();
}