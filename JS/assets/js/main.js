// /**

// Các kiểu phương thức của Array :
// toString() : chuyển mảng thành chuỗi
// join() : chuyển mảng thành chuỗi và thêm ký tự nối giữa các phần tử
// pop() : xóa phần tử cuối mảng và trả về phần tử đó
// push() : thêm phần tử vào cuối mảng và trả về độ dài mảng mới
// shift() : xóa phần tử đầu mảng và trả về phần tử đó
// unshift() : thêm phần tử vào đầu mảng và trả về độ dài mảng mới
// splice() : xóa phần tử trong mảng và thêm phần tử mới vào vị trí cần thêm
// slice() : lấy ra một phần mảng mới từ mảng cũ
// concat() : nối mảng mới vào mảng cũ
// reverse() : đảo ngược mảng
// sort() : sắp xếp mảng
// */
// const Arr = ["Java", "Javascript", "PHP", "Python", "C++"];
// console.log(Arr.splice(0, 3, "Ruby", "C#"));
// console.log(Arr.sort());
// console.log(Arr);
// console.log(Arr.reverse());
// console.log(Arr.concat(["Java", "Javascript", "PHP", "Python", "C++"]));
// console.log(Arr.slice(0, 3));
// console.log(Arr.shift());
// console.log(Arr.unshift("Java"));
// console.log(Arr.pop());
// console.log(Arr.push("C++"));
// console.log(Arr.join(" - "));
// console.log(Arr.toString());

// /**
//  * Các kiểu phương thức của Array :
//  * toString() : chuyển mảng thành chuỗi
//  * join() : chuyển mảng thành chuỗi và thêm ký tự nối giữa các phần tử
//  * pop() : xóa phần tử cuối mảng và trả về phần tử đó
//  * push() : thêm phần tử vào cuối mảng và trả về độ dài mảng mới
//  * shift() : xóa phần tử đầu mảng và trả về phần tử đó
//  * unshift() : thêm phần tử vào đầu mảng và trả về độ dài mảng mới
//  * splice() : xóa phần tử trong mảng và thêm phần tử mới vào vị trí cần thêm
//  * slice() : lấy ra một phần mảng mới từ mảng cũ
//  * concat() : nối mảng mới vào mảng cũ
//  * reverse() : đảo ngược mảng
//  * sort() : sắp xếp mảng
//  *
//  */
// const Arr = ["Java", "Javascript", "PHP", "Python", "C++"];
// console.log(Arr.splice(0, 3, "Ruby", "C#"));
// console.log(Arr.sort());
// console.log(Arr);
// console.log(Arr.reverse());
// console.log(Arr.concat(["Java", "Javascript", "PHP", "Python", "C++"]));
// console.log(Arr.slice(0, 3));
// console.log(Arr.shift());
// console.log(Arr.unshift("Java"));
// console.log(Arr.pop());
// console.log(Arr.push("C++"));
// console.log(Arr.join(" - "));
// console.log(Arr.toString());

// ----------------------------------------------------------------//
// ----------------------------------------------------------------//

// function getRandomItem(value) {
//     var Length = value.length - 1;
//     return value[Math.floor(Math.random() * Length)]
// }

// var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// const element = document.getElementById("random");
// setleterval(function() {
//     element.innerHTML = getRandomItem(arr)
// }, 1000);

// setleterval(myTimer, 1000);

// function myTimer() {
//     const date = new Date();
//     document.getElementById("calc__body").innerHTML = date.toLocaleTimeString();
// }

// ----------------------------------------------------------------//
// ----------------------------------------------------------------//

// function getRandNumbers(min, max, length) {
//     let array = [];
//     for (var i = 0; i < length; i++) {
//         var random = Math.floor(Math.random() * (max - min) + min);
//         array[i] = random;
//         console.log(random);
//     }
//     return array;
// }
// console.log(getRandNumbers(5, 15, 10));



// ----------------------------------------------------------------//
// ----------------------------------------------------------------//


// function getTotal(arr) {
//     let Length = arr.length;
//     let tong = 0;
//     for (i = 0; i < Length; i++) {
//         tong += arr[i];
//     }
//     return tong;

// }
// console.log(getTotal([4, 5, 3, 5]));
// // Expected results
// // getTotal([1, 2, 3]) // Output: 6
// // getTotal([4, 5, -3]) // Output: 6
// // getTotal([4, 5, 3, 5]) // Output: 17


// ----------------------------------------------------------------//
// ----------------------------------------------------------------//



// var orders = [{
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]


// console.log(orders[1])
// var title = orders[1].price;
// console.log(title)

// function getTotal(value) {
//     var sum = 0;
//     var valueLength = value.length;
//     console.log(valueLength);
//     for (var i = 0; i < valueLength; i++) {
//         sum += value[i].price
//     }
//     return sum;
// }
// Expected results:
// console.log(getTotal(orders)); // Output: 8700000


// ----------------------------------------------------------------//
// ----------------------------------------------------------------//


// function run(object) {
//     const arr = [];
//     for (var el in object) {
//         arr.push(`Thuộc tính ${el} có giá trị ${object[el]}`)
//     }
//     return arr;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]


// ----------------------------------------------------------------//
//-----------------mô phỏng phép tính tay 3 chữ số -----------------//
// ----------------------------------------------------------------//


// var dv, chuc, tram;

// function calculator(a, b) {
//     dv = b % 10;
//     chuc = Math.floor((b % 100) / 10);
//     tram = Math.floor(b / 100);
//     console.log('Mô phỏng phép nhân tay 3 chữ số');
//     console.log('-------------------------------');
//     console.log(' ', a);
//     console.log('X', b);
//     console.log('-------------------------------');
//     console.log('    ', a * dv);
//     console.log('   ', a * chuc);
//     console.log(' ', a * tram);
//     console.log('-------------------------------');
//     console.log(a * b);
// }
// calculator(763, 589);


// ----------------------------------------------------------------//
//-------------------------Đêm số tờ tiền--------------------------// 
// ----------------------------------------------------------------//


// 100, 20, 5 và 1.
// t1 500 =>> 5 loại 100
// t2 951 =>> 9 loại 100 2 tờ 20 2 tờ 5 1 tờ 1
// t3 1345 >>> 13 tờ  100 2 tờ 20 1 tờ 5

// function rut(T) {
//     let soto = 0;
//     let T100 = 0;
//     let T20 = 0;
//     let T5 = 0;
//     let T1 = 0;

//     T100 = Math.floor(T / 100);
//     let T100du = Math.floor(T % 100);
//     T20 = Math.floor(T100du / 20);
//     let T20du = Math.floor(T100du % 20);
//     // T5 = Math.floor(((Math.floor(T % 100) - (T20 * 20)) / 5))
//     T5 = Math.floor((T20du / 5))
//         // T1 = Math.floor((T % 100) - (T20 * 20) - (T5 * 5));
//     T1 = T20du % 5
//     soto = T100 + T20 + T5 + T1;

//     console.log('Số tờ: ', soto);
//     console.log(`Mệnh giá 100k: ${T100} , Mệnh giá 20k: ${T20}, Mệnh giá 5k: ${T5}, Mệnh giá 1k: ${T1} `);

// }


// -------------------------Đỗi số la mã---------------------------//
//---------------------------Switch-case---------------------------//
// ----------------------------------------------------------------//


// 400 >> CD
// 653 >> 600 + 50 + 3 >> DCLIII
// 867 >> 800 + 60 + 7 >> DCCCLXVII



// function lama(value) {
//     if (value < 1000) {
//         let tram = 0;
//         let chuc = 0;
//         let dv = 0;

//         let tramLm = '';
//         let chucLm = '';
//         let dvLm = '';

//         tram = Math.floor(value / 100) * 100;
//         chuc = Math.floor((value % 100) / 10) * 10;
//         dv = value % 10;


//         switch (tram) {
//             case 100:
//                 tramLm = 'C';
//                 break;
//             case 200:
//                 tramLm = 'CC';
//                 break;
//             case 300:
//                 tramLm = 'CCC';
//                 break;
//             case 400:
//                 tramLm = 'CD';
//                 break;
//             case 500:
//                 tramLm = 'D';
//                 break;
//             case 600:
//                 tramLm = 'DC';
//                 break;
//             case 700:
//                 tramLm = 'DCC';
//                 break;
//             case 800:
//                 tramLm = 'DCCC';
//                 break;
//             case 900:
//                 tramLm = 'CM';
//                 break;

//         }
//         switch (chuc) {
//             case 10:
//                 chucLm = 'X';
//                 break;
//             case 20:
//                 chucLm = 'XX';
//                 break;
//             case 30:
//                 chucLm = 'XXX';
//                 break;
//             case 40:
//                 chucLm = 'XL';
//                 break;
//             case 50:
//                 chucLm = 'L';
//                 break;
//             case 60:
//                 chucLm = 'LX';
//                 break;
//             case 70:
//                 chucLm = 'LXX';
//                 break;
//             case 80:
//                 chucLm = 'LXXX';
//                 break;
//             case 90:
//                 chucLm = 'XC';
//                 break;

//         }
//         switch (dv) {
//             case 1:
//                 dvLm = 'I';
//                 break;
//             case 2:
//                 dvLm = 'II';
//                 break;
//             case 3:
//                 dvLm = 'III';
//                 break;
//             case 4:
//                 dvLm = 'IV';
//                 break;
//             case 5:
//                 dvLm = 'V';
//                 break;
//             case 6:
//                 dvLm = 'VI';
//                 break;
//             case 7:
//                 dvLm = 'VII';
//                 break;
//             case 8:
//                 dvLm = 'VIII';
//                 break;
//             case 9:
//                 dvLm = 'IX';
//                 break;

//         }

//         console.log(`Số: ${value} đổi sang Số la mã là: ${tramLm}${chucLm}${dvLm}`);
//     }
// }


// --------------------------Đỗi số la mã--------------------------//
//--------------------------Toán tử 3 ngôi-------------------------//
// ----------------------------------------------------------------//


// function lama(value) {
//     if (value < 1000) {
//         let tram = 0;
//         let chuc = 0;
//         let dv = 0;

//         let tramLm = '';
//         let chucLm = '';
//         let dvLm = '';

//         tram = Math.floor(value / 100) * 100;
//         chuc = Math.floor((value % 100) / 10) * 10;
//         dv = value % 10;

//         tramLm = (tram == 100) ? 'C' :
//             (tram == 200) ? 'CC' :
//             (tram == 300) ? 'CCC' :
//             (tram == 400) ? 'CD' :
//             (tram == 500) ? 'D' :
//             (tram == 600) ? 'DC' :
//             (tram == 700) ? 'DCC' :
//             (tram == 800) ? 'DCCC' :
//             (tram == 900) ? 'CM' : '';
//         chucLm = (chuc == 10) ? 'X' :
//             (chuc == 20) ? 'XX' :
//             (chuc == 30) ? 'XXX' :
//             (chuc == 40) ? 'XL' :
//             (chuc == 50) ? 'L' :
//             (chuc == 60) ? 'LX' :
//             (chuc == 70) ? 'LXX' :
//             (chuc == 80) ? 'LXXX' :
//             (chuc == 90) ? 'XC' : '';
//         console.log('dv', dvLm);
//         dvLm = (dv == 1) ? 'I' :
//             (dv == 2) ? 'II' :
//             (dv == 3) ? 'III' :
//             (dv == 4) ? 'IV' :
//             (dv == 5) ? 'V' :
//             (dv == 6) ? 'VI' :
//             (dv == 7) ? 'VII' :
//             (dv == 8) ? 'VIII' :
//             (dv == 9) ? 'IX' : '';

//         console.log(`Số: ${value} đổi sang Số la mã là: ${tramLm}${chucLm}${dvLm}`);
//     } else {
//         console.log('Vui lòng nhập số dưới 1000');
//     }
// }

// ----------------------------------------------------------------//
//--------------------------In cách đọc số-------------------------//
// ----------------------------------------------------------------//

//726 563 bảy trăm  hai mươi sáu ngàn năm trăm linh ba
//700 000 bảy trăm hai mươi sáu   ngàn năm trăm linh ba

// function docso(value) {
//     if (value < 1000000) {

//         let M100 = 100000;
//         let M10 = 10000;
//         let M = 1000;

//         let TnganSp = '';
//         let CnganSp = '';
//         let NganSp = '';
//         let TramSp = '';
//         let ChucSp = '';
//         let DvSp = '';

//         let Tngan = Math.floor(value / M100) * M100;
//         let Cngan = Math.floor((value % M100) / M10) * M10;
//         let Ngan = Math.floor((value % M10) / M) * M;
//         let Tram = Math.floor((value % M) / 100) * 100;
//         let Chuc = Math.floor((value % 100) / 10) * 10;
//         let Dv = value % 10;
//         console.log('tram Ngàn', Tngan);
//         console.log('chuc Ngàn', Cngan);
//         console.log('Ngan', Ngan);
//         console.log('Tram', Tram);
//         console.log('chuc', Chuc);
//         console.log('đơn vi', Dv);


//         TnganSp = (Tngan == (1 * M100)) ? 'Một trăm ' :
//             (Tngan == (2 * M100)) ? 'Hai trăm ' :
//             (Tngan == (3 * M100)) ? 'Ba trăm ' :
//             (Tngan == (4 * M100)) ? 'Bốn trăm ' :
//             (Tngan == (5 * M100)) ? 'Năm trăm ' :
//             (Tngan == (6 * M100)) ? 'Sáu trăm ' :
//             (Tngan == (7 * M100)) ? 'Bảy trăm ' :
//             (Tngan == (8 * M100)) ? 'Tám trăm ' :
//             (Tngan == (9 * M100)) ? 'Chín trăm ' : '';

//         CnganSp = (Cngan == (1 * M10)) ? 'mười ' :
//             (Cngan == (2 * M10)) ? 'hai mươi ' :
//             (Cngan == (3 * M10)) ? 'ba mươi ' :
//             (Cngan == (4 * M10)) ? 'bốn mươi ' :
//             (Cngan == (5 * M10)) ? 'năm mươi ' :
//             (Cngan == (6 * M10)) ? 'sáu mươi ' :
//             (Cngan == (7 * M10)) ? 'bảy mươi ' :
//             (Cngan == (8 * M10)) ? 'tám mươi ' :
//             (Cngan == (9 * M10)) ? 'chín mươi ' :
//             (Tngan == 0) ? '' : 'ngàn ';

//         NganSp = (Ngan == (1 * M)) ? 'mốt ngàn ' :
//             (Ngan == (2 * M)) ? 'hai ngàn ' :
//             (Ngan == (3 * M)) ? 'ba ngàn ' :
//             (Ngan == (4 * M)) ? 'bốn ngàn ' :
//             (Ngan == (5 * M)) ? 'năm ngàn ' :
//             (Ngan == (6 * M)) ? 'sáu ngàn ' :
//             (Ngan == (7 * M)) ? 'bảy ngàn ' :
//             (Ngan == (8 * M)) ? 'tám ngàn ' :
//             (Ngan == (9 * M)) ? 'chín ngàn ' :
//             (Cngan == 0) ? '' : 'ngàn ';

//         TramSp = (Tram == 100) ? 'một trăm ' :
//             (Tram == 200) ? 'hai trăm ' :
//             (Tram == 300) ? 'ba trăm ' :
//             (Tram == 400) ? 'bốn trăm ' :
//             (Tram == 500) ? 'năm trăm ' :
//             (Tram == 600) ? 'sáu trăm ' :
//             (Tram == 700) ? 'bảy trăm ' :
//             (Tram == 800) ? 'tám trăm ' :
//             (Tram == 900) ? 'chín trăm ' : 'không trăm ';
//         // (Ngan !== 0 && Dv !== 0) ? 'không trăm ' : '';

//         ChucSp = (Chuc == 10) ? 'mười ' :
//             (Chuc == 20) ? 'hai mươi ' :
//             (Chuc == 30) ? 'ba mươi ' :
//             (Chuc == 40) ? 'bốn mươi ' :
//             (Chuc == 50) ? 'năm mươi ' :
//             (Chuc == 60) ? 'sáu mươi ' :
//             (Chuc == 70) ? 'bảy mươi ' :
//             (Chuc == 80) ? 'tám mươi ' :
//             (Chuc == 90) ? 'chín mươi ' :
//             (CnganSp == 'ngàn ' && Dv !== 0) ? 'linh ' :
//             (NganSp == 'ngàn ') ? 'linh ' :
//             (TramSp == 'không trăm ') ? 'linh ' : '';


//         DvSp = (Dv == 1) ? 'một ' :
//             (Dv == 2) ? 'hai ' :
//             (Dv == 3) ? 'ba ' :
//             (Dv == 4) ? 'bốn ' :
//             (Dv == 5) ? 'năm ' :
//             (Dv == 6) ? 'sáu ' :
//             (Dv == 7) ? 'bảy ' :
//             (Dv == 8) ? 'tám ' :
//             (Dv == 9) ? 'chín ' : '';

//         document.getElementById("date").innerHTML = (`Số: ${value} đọc là: ${TnganSp}${CnganSp}${NganSp}${TramSp}${ChucSp}${DvSp}`);
//     }
// }

//-------test-mang----
// function docso(value) {
//     if (value < 1000000) {

//         let M100 = 100000;
//         let M10 = 10000;
//         let M = 1000;

//         let TnganSp = '';
//         let CnganSp = '';
//         let NganSp = '';
//         let TramSp = '';
//         let ChucSp = '';
//         let DvSp = '';
//         let Soarr = ['Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín'];
//         let Soarr1 = ['một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];

//         let Tngan = Math.floor(value / M100);
//         let Cngan = Math.floor((value % M100) / M10);
//         let Ngan = Math.floor((value % M10) / M);
//         let Tram = Math.floor((value % M) / 100);
//         let Chuc = Math.floor((value % 100) / 10);
//         let Dv = value % 10;
//         console.log('tNgàn', Tngan);
//         console.log('cNgàn', Cngan);
//         console.log(' Ngan', Ngan);
//         console.log(' Tram', Tram);
//         console.log(' chuc', Chuc);
//         console.log('  đvi', Dv);


//         //${} `${Soarr[Tngan - 1]} trăm `
//         TnganSp = Tngan ==
//             CnganSp = Cngan == 0 ? ' ngàn' :
//             Cngan == 1 ? 'mười' : 'mươi';



//         // NganSp =
//         // TramSp =
//         // ChucSp =
//         // DvSp =



//         // if (van) {
//         //     chv = van / 10;
//         //     dv = van % 10;
//         //     if (chv == 1)
//         //         cout << "muoi ";
//         //     else if (chv > 1)
//         //         cout << doc[chv - 1] << " muoi ";
//         //     if (dv)
//         //         cout << doc[dv - 1];
//         //     cout << " van ";
//         // }

//         // if ((ngan == 0) && van)
//         //     cout << " khong ngan ";
//         // else if (ngan)
//         //     cout << doc[ngan - 1] << " ngan ";

//         // if ((tram == 0) && (van || ngan))
//         //     cout << " khong tram ";
//         // else if (tram)
//         //     cout << doc[tram - 1] << " tram ";

//         // if ((chuc == 0) && donvi && (van || ngan || tram))
//         //     cout << "le ";
//         // else if (chuc == 1)
//         //     cout << " muoi ";
//         // else
//         //     cout << doc[chuc - 1] << " muoi ";
//         // if (donvi)
//         //     cout << doc[donvi - 1];




//         document.getElementById("date").innerHTML = (`Số: ${value} đọc là: ${TnganSp}${CnganSp}${NganSp}${TramSp}${ChucSp}${DvSp}`);
//     }
// }

// ----------------------------------------------------------------//
//----------------------Giải phương trình bậc 2--------------------//
// ----------------------------------------------------------------//


// let a;
// let b;
// let c;


// function giaiPt(a, b, c) {
//     if (a > 0) {
//         d = b * b - 4 * a * c;
//         if (d < 0) {
//             console.log('Phương trình vô nghiệm');
//         }
//         if (d == 0) {
//             console.log('Phương trình nghiệm kép: ', -0.5 * b / a);
//         }
//         if (d > 0) {
//             console.log('Hai nghiem phan biet: ');
//             console.log('X1: ', 0.5 * (-b - Math.sqrt(d)) / a);
//             console.log('X2: ', 0.5 * (-b + Math.sqrt(d)) / a);
//         }
//     }
// }


// ----------------------------------------------------------------//
//-------------------kiểm tra 3 cạnh của tam giác------------------//
// ----------------------------------------------------------------//

// let a;
// let b;
// let c;
// let p = 0;

// function xet(a, b, c) {
//     if (a + b > c && a + c > b && b + c > a) {
//         let tamgiac = (a * a == (b * b) + (c * c) || b * b == (a * a) + (c * c) || c * c == (b * b) + (a * a)) ? console.log('a ,b ,c là cạnh của 1 Tam giác vuông') :
//             (a == b && b == c) ? console.log('a ,b ,c là cạnh của 1 Tam giác đều') :
//             ((a == b || a == c || b == c) && (Math.floor(a * a) == (b * b) + (c * c) || Math.floor(b * b) == (a * a) + (c * c) || Math.floor(c * c) == (b * b) + (a * a))) ? console.log('a ,b ,c là cạnh của 1 Tam giác vuông cân') :
//             (a == b || a == c || b == c) ? console.log('a ,b ,c là cạnh của 1 Tam giác cân') :
//             (a * a > b * b + c * c || b * b > a * a + c * c || c * c > a * a + b * b) ? console.log('a ,b ,c là cạnh của 1 Tam giác tù') :
//             console.log('a ,b ,c là cạnh của 1 Tam giác nhọn');
//         p = (a + b + c) / 2;
//         console.log('Chu vi của tam giác có canh a,b,c là: ',
//             p * 2);
//         console.log('Diện tích của tam giác có cạnh a,b,c là: ',
//             Math.sqrt(p * (p - a) * (p - b) * (p - c)));


//     } else {
//         console.log('a ,b ,c không phải là cạnh của 1 Tam giác');
//     }


//     // if (a + b > c && a + c > b && b + c > a) {
//     //     if (a * a == (b * b) + (c * c) || b * b == (a * a) + (c * c) || c * c == (b * b) + (a * a)) {
//     //         console.log('a ,b ,c là cạnh của 1 Tam giác vuông');
//     //     } else {
//     //         if (a == b && b == c) {
//     //             console.log('a ,b ,c là cạnh của 1 Tam giác đều');
//     //         } else {
//     //             if (a == b || a == c || b == c) {
//     //                 console.log('a ,b ,c là cạnh của 1 Tam giác cân');
//     //             } else {
//     //                 if (a * a > b * b + c * c || b * b > a * a + c * c || c * c > a * a + b * b) {
//     //                     console.log('a ,b ,c là cạnh của 1 Tam giác tù');
//     //                 } else {
//     //                     console.log('a ,b ,c là cạnh của 1 Tam giác nhọn');
//     //                 }
//     //             }
//     //         }
//     //     }
//     // } else {
//     //     console.log('a ,b ,c không phải là cạnh của 1 Tam giác');
//     // }
// }


// ----------------------------------------------------------------//
//-------------------Tính số năm cần gửi tiết kiệm-----------------//
// ----------------------------------------------------------------//

// t = 70tr s = 15tr p = 7%;


// function sonam(t, s, p) {
//     let lg = 0;
//     let lshn = 0;
//     let tr = 1000000;
//     lg = s * tr;
//     for (let i = 1; i < 1000; i++) {
//         lg = lg + lshn;
//         lshn = (lg * p) / 100;
//         if ((lshn + lg) >= (t * tr)) {
//             console.log('');
//             console.log('Lãi suất: ', p, '%năm');
//             console.log(`Số tiền gốc : ${s}tr`);
//             console.log(`Lãi và gốc sau ${i} năm:`, Math.floor(lshn + lg));
//             console.log(`Số năm cần để có số tiền tiết kiệm ${t}tr là: ${i} năm với lãi suất ${p}% năm `);
//             break;
//         };
//     }
// }


// function sonam(t, s, p) {
//     for (p = 0.01 * p, n = 0; s < t; s = s + (s * p), n++);
//     console.log(`Số năm cần để có số tiền tiết kiệm ${t}tr là: ${n} năm với số tiền có là ${Math.floor(s)}tr`);
// }
// sonam(70, 15, 7);


// ----------------------------------------------------------------//
//----------------------------Bài tập F8 Js------------------------//
// ----------------------------------------------------------------//


// var watchList = [{
//         "Title": "Inception",
//         "Year": "2010",
//         "Rated": "PG-13",
//         "Released": "16 Jul 2010",
//         "Runtime": "148 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Christopher Nolan",
//         "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//         "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea leto the mind of a CEO.",
//         "Language": "English, Japanese, French",
//         "Country": "USA, UK",
//         "imdbRating": "8.8",
//         "imdbVotes": "1,446,708",
//         "imdbID": "tt1375666",
//         "Type": "movie",
//     },
//     {
//         "Title": "leterstellar",
//         "Year": "2014",
//         "Rated": "PG-13",
//         "Released": "07 Nov 2014",
//         "Runtime": "169 min",
//         "Genre": "Adventure, Drama, Sci-Fi",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan, Christopher Nolan",
//         "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//         "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         "Language": "English",
//         "Country": "USA, UK",
//         "imdbRating": "8.6",
//         "imdbVotes": "910,366",
//         "imdbID": "tt0816692",
//         "Type": "movie",
//     },
//     {
//         "Title": "The Dark Knight",
//         "Year": "2008",
//         "Rated": "PG-13",
//         "Released": "18 Jul 2008",
//         "Runtime": "152 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//         "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//         "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//         "Language": "English, Mandarin",
//         "Country": "USA, UK",
//         "imdbRating": "9.0",
//         "imdbVotes": "1,652,832",
//         "imdbID": "tt0468569",
//         "Type": "movie",
//     },
//     {
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "Rated": "PG-13",
//         "Released": "15 Jun 2005",
//         "Runtime": "140 min",
//         "Genre": "Action, Adventure",
//         "Director": "Christopher Nolan",
//         "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//         "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//         "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//         "Language": "English, Urdu, Mandarin",
//         "Country": "USA, UK",
//         "imdbRating": "8.3",
//         "imdbVotes": "972,584",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//     },
//     {
//         "Title": "Avatar",
//         "Year": "2009",
//         "Rated": "PG-13",
//         "Released": "18 Dec 2009",
//         "Runtime": "162 min",
//         "Genre": "Action, Adventure, Fantasy",
//         "Director": "James Cameron",
//         "Writer": "James Cameron",
//         "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//         "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//         "Language": "English, Spanish",
//         "Country": "USA, UK",
//         "imdbRating": "7.9",
//         "imdbVotes": "876,575",
//         "imdbID": "tt0499549",
//         "Type": "movie",
//     }
// ];

// function calculateRating(arr) {
//     let nameDirector = arr.filter(function(list) {
//         return list.Director === 'Christopher Nolan';
//     });
//     let imdbIDscore = nameDirector.reduce(function(imbdOutput, movie) {
//         let Imbd = movie.imdbRating;
//         return imbdOutput += parseFloat(Imbd);
//     }, 0.0);
//     return imdbIDscore / nameDirector.length;
// }

// // Expected results
// console.log(calculateRating(watchList)); // Output: 8.675


// ----------------------------------------------------------------//
//----------------------------Bài tập F8 Js------------------------//
// ----------------------------------------------------------------//




// Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// //-------------BEGIN-newReduce---------------
// Array.prototype.reducetvs = function(callback, result) {
//     let i = 0;
//     if (arguments.length < 2) {
//         i = 1;
//         result = this[0];
//     }
//     for (; i < this.length; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result
// };
// //------------END-newReduce---------------
// function arrToObj(value) {
//     let result = value.reducetvs(function(newObject, itemArr) {
//         newObject[itemArr[0]] = itemArr[1];
//         return newObject
//     }, {})
//     return result
// }
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }



// ----------------------------------------------------------------//
//----------------------Tìm và in số hoàn hảo----------------------//
// ----------------------------------------------------------------//


// function Hoanhao(n) {

//     let i;
//     let j;
//     let s;
//     let shh;

//     console.log(`Các số hoàn hảo không vượt qua ${n} là: `);
//     for (shh = 0, i = 2; i <= n; i++) {
//         s = 1;
//         for (j = 2; j <= i / 2; j++)
//             if (i % j == 0) {
//                 s += j;
//             }
//         if (s == i) {
//             text = ''
//             shh++;
//             for (j = 2; j <= i / 2; j++) {
//                 if (i % j == 0) {
//                     text += " + " + j;
//                 }
//             }
//             console.log(`${i} = 1${text}`);
//         }
//     }

//     if (shh) {
//         console.log(`Có tất cả ${shh} số hoàn hảo`);
//     } else {
//         console.log("Không có số hoàn hảo");
//     }
// }
// Hoanhao(1000);


// ----------------------------------------------------------------//
//---------------Tìm và in các số nguyên tố nhỏ hơn n--------------//
// ----------------------------------------------------------------//

/// 3, 5, 7, 13, 17, 23, 29, 97, 101, 997…



// function songuyento(val) {
//     let so;
//     let j;
//     let i;
//     let text = '';
//     for (so = 0, i = 2; i <= val; i++) {
//         for (j = 2; j <= Math.floor(i / 2); j++) {
//             if (i % j == 0) {
//                 break;
//             }
//         }
//         if (j == Math.floor(i / 2) + 1) {
//             so++;
//             text += " " + i + " ";
//         }
//     }

//     document.getElementById("title").innerHTML = "Tìm và in các số nguyên tố nhỏ hơn n";
//     document.getElementById("calc__body1").innerHTML = `Các số nguyên tố không vượt qua ${val} là:  `;
//     document.getElementById("calc__body2").innerHTML = text;
//     document.getElementById("calc__body3").innerHTML = `Tổng có ${so} số nguyên tố`;
// }
// songuyento(100);


// // ----------------------------------------------------------------//
// let name = 'Kiểm tra số chính phương';
// // ----------------------------------------------------------------//
// let scp;
// let xetscp = '';
// let sptg;
// let xetsptg = '';
// let i;
// let tong;


// function chinhphuong(val) {
//     scp = Math.sqrt(val);
//     console.log(scp);
//     console.log(Math.floor(scp));

//     if (scp == Math.floor(scp)) {
//         xetscp = 'Là số chính phương';
//         for (i = 1; i < val; i++)
//             if (Math.sqrt(i) == Math.floor(Math.sqrt(i)) && Math.sqrt(val - i) == Math.floor(Math.sqrt(val - i))) {
//                 break;
//             }
//         if (i < val) {
//             document.getElementById("calc__body4").innerHTML = `Bộ ba của số pitago đó là: ${val} = ${val - i} + ${i} `;
//             xetsptg = 'Cũng là Số Pitago';
//         } else {
//             xetsptg = 'Nhưng Không phải là Số Pitago';
//         }
//     } else {
//         xetscp = 'Không phải là Số chính phương';
//         xetsptg = 'Không phải là Số Pitago';
//     }

//     document.getElementById("title").innerHTML = name;
//     document.getElementById("calc__body1").innerHTML = `Số ${val}  `;
//     document.getElementById("calc__body2").innerHTML = xetscp;
//     document.getElementById("calc__body3").innerHTML = xetsptg;
//     // document.getElementById("calc__body4").innerHTML = xetsptg;
//     // document.getElementById("calc__body5").innerHTML = xetsptg;
//     // document.getElementById("calc__body6").innerHTML = xetsptg;
// }
// chinhphuong(100);


// // // ----------------------------------------------------------------//
// let name = 'Giải bất phương trình bậc nhất';
// // // ----------------------------------------------------------------//
// //ax + b > 0 >> ax > -b >>
// // a = 12 b = 5 >> 12x + 5 > 0 >> x > 0 
// function giaibpt(a, b) {
//     if (a > 0) {
//         document.getElementById("calc__body3").innerHTML = `phương trình có nghiệm là : x > -${b}/${a}`;
//         console.log(-b / a)
//     } else {
//         document.getElementById("calc__body3").innerHTML = `phương trình có nghiệm là : x < -${b}/${a}`;

//     }



//     document.getElementById("title").innerHTML = name;
//     document.getElementById("calc__body1").innerHTML = `Phương trình:  ax + b > 0 `;
//     document.getElementById("calc__body2").innerHTML = `Với:  a = ${a} ; b = ${b} `;
//     //     // document.getElementById("calc__body4").innerHTML = xetsptg;
//     //     // document.getElementById("calc__body5").innerHTML = xetsptg;
//     //     // document.getElementById("calc__body6").innerHTML = xetsptg;
// }

// giaibpt(12, 5);


// // // // ----------------------------------------------------------------//
// let name = 'Viết hàm đệ quy tìm ước chung lớn nhất';
// // // // ----------------------------------------------------------------//


// function ucln(a, b) {

//     let d, p;
//     if ((a <= 0) || (b <= 0)) {
//         document.getElementById("calc__body1").innerHTML = `Vui lòng nhập số lớn hơn 0`;
//         document.getElementById("calc__body2").innerHTML = `a = ${a}, b = ${b}`;

//     } else {
//         d = usc(a, b);
//         p = bsc(a, b);
//         document.getElementById("calc__body1").innerHTML = `Ước số chung lớn nhất của (${a}, ${b}) là : ${d}  `;
//         document.getElementById("calc__body2").innerHTML = `Bội số chung nhỏ nhất của (${a}, ${b}) là : ${p}  `;

//     }

//     function usc(a, b) {
//         if (a * b == 0) return a + b;
//         else if (a > b) return usc(a - b, b);
//         else return usc(a, b - a);
//     }

//     function bsc(a, b) {
//         return a * b / usc(a, b);
//     }
//     document.getElementById("title").innerHTML = name;

// }
// ucln(15, 21);


// // // // // ----------------------------------------------------------------//
// let name = 'Tính giai thừa cách của số nguyên dương n';
// // // // // ----------------------------------------------------------------//
// document.getElementById("title").innerHTML = name;


// function giaithua(n) {
//     let i;
//     let gt = 1;
//     if (n % 2 !== 0) {
//         for (i = 1; i <= n; i += 2) {
//             gt = gt * i;
//             document.getElementById("calc__body1").innerHTML = `${n}!! = ${gt}`;
//             console.log(`giai thừa ${i} là ${gt} `)
//         }
//     } else {
//         for (i = 2; i <= n; i += 2) {
//             gt = gt * i;
//             document.getElementById("calc__body1").innerHTML = `${n}!! = ${gt}`;
//             console.log(`giai thừa ${i} là ${gt} `)
//         }
//     }

// }

// function gtc(n) {
//     console.log('gia tri n: ', n);
//     if ((n == 0) || (n == 1)) return 1;
//     else

//         return n * gtc(n - 2);
// }
// document.getElementById("calc__body1").innerHTML = `${n}!! = ${gtc(15)}`;
// console.log(gtc(14));
// giaithua(14);



// // // // ----------------------------------------------------------------//
// let name = 'Viết hàm đệ quy giải bài toán tháp Hà Nội';
// // // // ----------------------------------------------------------------//
// document.getElementById("title").innerHTML = name;

// let d;

// function dqthn(n) {
//     d = 0;
//     doi(n, 'A', 'B', 'C');
//     document.getElementById("calc__body1").innerHTML = `Tổng số lần chuyển = ${d}`;
// }

// function doi(n, a, b, c) {
//     if (n == 1) {
//         console.log(`Lần ${++d} : Từ Tháp ${a} Sang Tháp ${b} `);
//     } else {
//         console.log("Giá trị Tháp A:", a)
//         console.log("Giá trị Tháp B:", b)
//         console.log("Giá trị Tháp C:", c)
//         doi(n - 1, a, c, b);
//         console.log("Giá trị Tháp A1:", a)
//         console.log("Giá trị Tháp B1:", b)
//         console.log("Giá trị Tháp C1:", c)
//         doi(1, a, b, c);
//         console.log("Giá trị Tháp A2:", a)
//         console.log("Giá trị Tháp B2:", b)
//         console.log("Giá trị Tháp C2:", c)
//         doi(n - 1, c, b, a);

//     }
// }
// dqthn(3);



// // // // // ----------------------------------------------------------------//
// let name = ' In các phần tử của mảng theo yêu cầu';
// // // // // ----------------------------------------------------------------//
// document.getElementById("title").innerHTML = name;

// let max 100;

// function inphantu() {
//     let i, j, n;
//     float a[max], tbc, pmax, pmin;
//     cout << "Nhap so phan tu n<" << max << ", n= ";
//     cin >> n;
//     cout << "Nhap cac phan tu cua mang :\n";
//     for (i = 0; i < n; i++) {
//         cout << "A[" << i + 1 << "]=";
//         cin >> a[i];
//     }

//     pmax = pmin = tbc = a[0];
//     for (i = 1; i < n; i++) {
//         tbc += a[i];
//         if (pmax < a[i]) pmax = a[i];
//         if (pmin > a[i]) pmin = a[i];
//     }

//     tbc = tbc / n;
//     cout << "\nPhan tu max=" << pmax;
//     cout << "\nPhan tu min=" << pmin;
//     cout << "\nGia tri TBC=" << tbc;
//     cout << "\nCac phan tu<TBC:\n";
//     for (i = 0; i < n; i++)
//         if (a[i] < tbc) cout << a[i] << " ";
//     cout << "\nCac phan tu > TBC:\n";
//     for (i = 0; i < n; i++)
//         if (a[i] > tbc) cout << a[i] << " ";
// }

// // // // // ----------------------------------------------------------------//
// let name = ' Nhập, sắp xếp, in mảng';
// // // // // ----------------------------------------------------------------//
// document.getElementById("title").innerHTML = name;

// let max 100;

// let nhap(let[], let);
// let sapxep(let[], let);
// let xuat(let[], let);

// function nxxim() {
//     let a[max], n;
//     clrscr();
//     cout << "Nhap so phan tu n<" << max << ", n= ";
//     cin >> n;
//     nhap(a, n);
//     cout << "Mang truoc khi sap xep :\n";
//     xuat(a, n);
//     sapxep(a, n);
//     cout << "\nMang sau khi sap xep :\n";
//     xuat(a, n);
// }

// function nhap(a[], n) {
//     let i;
//     cout << "Nhap cac phan tu cua mang :\n";
//     for (i = 0; i < n; i++) {
//         cout << "A[" << i + 1 << "]=";
//         cin >> a[i];
//     }
// }

// function xuat(a[], n) {
//     let i, j;
//     for (i = 0; i < n; i++) cout << a[i] << " ";
// }

// function sapxep(a[], n) {
//     let i, j, tg;
//     for (i = 0; i < n - 1; i++)
//         for (j = i + 1; j < n; j++)
//             if (a[i] > a[j]) {
//                 tg = a[i];
//                 a[i] = a[j];
//                 a[j] = tg;
//             }
// }

// // // // // ----------------------------------------------------------------//
let name = 'Nhập, in mảng, đếm đoạn theo các tiêu chí';
// // // // // ----------------------------------------------------------------//
document.getElementById("title").innerHTML = name;


function nimdd(n) {
    let a[max], i, d, c;
    nhap(a, n);
    cout << "Mang da nhap:\n";
    xuat(a, n);
    cout << "\nSo doan tang :" << sodoantang(a, n) << endl;
    timdoantangmax(a, n, d, c);
    cout << "\nDoan tang dai nhat la : ";
    for (i = d; i <= c; i++) cout << a[i] << " ";
}

function nhap(a[], n) {
    let i;
    for (i = 0; i < n; i++) {
        cout << "A[" << i + 1 << "]=";
        cin >> a[i];
    }
}

function xuat(a[], n) {
    let i;
    for (i = 0; i < n; i++) {
        a[i]
    };
}

let sodoantang(a[], n) {
    let i, d;
    if (n > 0) d = 1;
    else d = 0;
    for (i = 0; i < n - 1; i++)
        if (a[i + 1] < a[i]) d++;
    return d;
}

function timdoantangmax(a[], n, d, c) {
    let t, p;
    p = 0;
    d = c = 0;
    do {
        t = p;
        for (p = t;
            (p < n - 1) && (a[p] <= a[p + 1]); p++);
        if (p - t > c - d) {
            d = t;
            c = p;
        }
        if (p < n - 1) p++;
    } while (p < n - 1);
}