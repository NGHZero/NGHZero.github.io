// Bài 1
function factorial() {
    let num = prompt("Nhập vào 1 số bất kì để tính ra giai thừa của số đó");
    let factorialResult = 1;
    for (var i = 1; i <= num; i++) {
      factorialResult = factorialResult * i;
    }
    console.log(factorialResult);
    }

// Bài 2
function loop() {
    let num = prompt("Nhập vào 1 chuỗi kí tự bất kì");
    let loop = ""
    for (let i = 0; i < 10; i++) {
      loop = loop + num + "-";
    }
    console.log(loop.slice(0,- 1));
}
// Bài 3

console.log("Chia hết cho 2")
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log("Chia hết cho 3")
for (let i = 0; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

console.log("Chia hết cho 4")
for (let i = 0; i <= 50; i++) {
    if (i % 4 == 0) {
        console.log(i)
    }
}


// Bài 6

var n = prompt("Nhập một số: ");
function daySet() {
    if ( n <= 7 , n>1 ) {
        console.log("Hôm nay là thứ " + n)
        
            
        
    }
    else{
        if(n == 0) {
        console.log("Hôm nay là Chủ Nhật" )
    }
    else
        console.log("Số nhập vào không hợp lệ")
    }
}
daySet(n)