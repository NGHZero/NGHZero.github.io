let arr=[   
    {
        name : " iphone 11",
        price: 10000
    },

    {
        name : " iphone 12",
        price: 6000
    },

    {
        name : " iphone 13",
        price: 7000
    }
    ]






// let bai1= arr.map((e) => {
//     // console.log(e);
   
   
//     return {name: e.name   ,price: e.price*0.75}

   
// });

// console.log(bai1);




let sale = (discount) => {
 let bai1 = arr.map((e) => {
     let r0bj = {

        name : e.name,
        price : e.price*(1-discount),

     };

return r0bj;
 })

 console.log(bai1);

}