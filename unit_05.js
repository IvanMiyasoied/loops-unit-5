// const button1 = document.getElementById('b-1');
// const out1 = document.getElementById('out-1');


// button1.addEventListener("click",() => {

//     out1.innerHTML = '';
    

//     for (let i = 1; i <= 50; i++) {
//         setTimeout(() => {
//             out1.textContent += i + ' '

//         },i * 200)
       
//     }


// });




// const button2 = document.getElementById('b-2');
// const out2 = document.getElementById('out-2');


// button2.addEventListener("click",() => {

//     out2.innerHTML = '';
    

//     for (let i = 2; i <= 122; i+=2) {
//         setTimeout(() => {
//             out2.textContent += i + ' ';

//         },i * 100)
       
//     }


// });




// const button3 = document.getElementById('b-3');
// const out3 = document.getElementById('out-3');


// button3.addEventListener("click",() => {

//     out3.innerHTML = '';
    
//     for (let i = 25; i >= 7; i--) {
//         setTimeout(() => {
//             out3.textContent += i + ' ';

//         },(25-i) * 100)
       
//     }
    

// });


// const button4 = document.getElementById('b-4');
// const out4 = document.getElementById('out-4');


// button4.addEventListener("click",() => {

//     out4.innerHTML = '';
    
//     for (let i = 77; i >= 35; i-=3) {
//         setTimeout(() => {
//             out4.textContent += i + '_';

//         },(77-i) * 100)
       
//     }
    

// });


// const button5 = document.getElementById('b-5');
// const out5 = document.getElementById('out-5');


// button5.addEventListener("click",() => {

//     out5.innerHTML = '';
    
//     for (let i = 1; i <= 17; i++) {
//         setTimeout(() => {
//             if (i % 2 === 0) {
//                 out5.textContent += i + '_**';

//             } else if (i % 2 !== 0) {
//                 out5.textContent += i + '_*';
//             }

//         },i * 200)
       
//     }
    

// });


// const input6 = document.getElementById('input6');
// const button6 = document.getElementById('b-6');
// const out6 = document.getElementById('out-6');








// button6.addEventListener('click', () => {
//     let userValue = input6.value

//     out6.textContent = '';


//     for (let i = 0; i <= userValue - 1; i++) {

//         out6.innerHTML += "*".repeat(6) + "<br>"
//     }




// })

// Почему userValue вне слушателя, тогда не работает
// Почему out6.innerHTML = "*".repeat(6)  не работает


// const input7 = document.getElementById("input7");
// const button7 = document.getElementById("b-7");
// const out7 = document.getElementById("out-7");

// button7.addEventListener("click", () => {
//   let userValue = input7.value;

//   out7.textContent = "";

//   for (let i = userValue; i >= 0; i--) {
//     setTimeout(() => {

//         out7.innerHTML += i + " ";
//     }, (userValue - i) * 200)
//   }
// });




// const input81 = document.getElementById("input81");
// const input82 = document.getElementById("input82");
// const button8 = document.getElementById("b-8");
// const out8 = document.getElementById("out-8");


// button8.addEventListener("click",() => {

//     let userInp1 = input81.value;
//     let userInp2 = input82.value;

//     out8.textContent = "";

//       for (let i = userInp1; i <= userInp2; i++) {
//         setTimeout(() => {
    
//             out8.innerHTML += i + " ";
//         }, i * 200)
//       }

// })



// const input91 = document.getElementById("inp91");
// const input92 = document.getElementById("inp92");
// const button9 = document.getElementById("b-9");
// const out9 = document.getElementById("out-9");


// button9.addEventListener("click",() => {

//     let userInp1 = input91.value;
//     let userInp2 = input92.value;

//     out9.textContent = "";
//       if (userInp1 < userInp2) {
//         for (let i = userInp1; i <= userInp2; i++) {
          
  
//           setTimeout(() => {
      
//               out9.innerHTML += i + " ";
//           }, i * 200)
//         }

//       } else if (userInp1 > userInp2) {
//         for (let i = userInp2; i <= userInp1; i++) {
          
  
//           setTimeout(() => {
      
//               out9.innerHTML += i + " ";
//           }, i * 200)
//         }

//       }

// })


const button10 = document.getElementById('b-10');
const out10 = document.getElementById('out-10');


button10.addEventListener("click",() => {

    out10.innerHTML = '';
    
    const year1 = 1950;
    const year2 = 2000;

    let delay = 0

    for (let i = year1; i <= year2; i+=2) {
      if (i % 2 === 0) {
        setTimeout(() => {
            out10.textContent += i + ' '

        },delay)

      }
       delay += 200;
    }


});