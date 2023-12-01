// var wrapper = document.querySelector('.marquee-wrapper'),
//     marquee = document.querySelectorAll('.marquee'),
//     wrapperWidth = wrapper.offsetWidth,
//     marqueeWidth = marquee.scrollWidth;


// function move(direction = false) {
//   if(!direction){
//     marquee.forEach(m => {
//       var currentTX = getComputedStyle(m).transform.split(',');
//       if( currentTX[4] === undefined ) {
//         currentTX = -1;
//       } else {
//         currentTX = parseFloat(currentTX[4]) - 1;
//       }

//       if(-currentTX >= marqueeWidth) {
//         m.style.transform = 'translateX(' + wrapperWidth + 'px)';

//       } else {
//         m.style.transform = 'translateX(' + currentTX + 'px)';
//       }
//     })

//   }

// }

// var interval = setInterval(move, 40);
