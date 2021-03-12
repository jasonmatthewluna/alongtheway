// const img_chosen = document.getElementById("img_chosen");
// const img = document.getElementById("img");
// const s3 = document.getElementById("s3");

// function myFunction(btn) {
    
//     if(btn == "button1"){
//         img_chosen.src = "jackie.jpg";
//     }
//     else if(btn == "button2"){
//         img_chosen.src = "jason.jpg";
//         console.log("jason");
//     }
//   }

//   const firstWP = new Waypoint({
//       element: img,
//       handler: function(direction){
//           console.log("hi")
//           if(direction === "down"){
//             img_chosen.classList.remove("img");
//             img_chosen.classList.add("img_chosen_class");
//             img_chosen.classList.add("sticky")
//             console.log("down!")
//           }
//           else{
//               img_chosen.classList.remove("img_chosen_class");
//               img_chosen.classList.add("img");
//           }
//       },
//       offset: '0%'
//   });

//   const secondWP = new Waypoint({
//       element: s3, 
//       handler: function(direction){
//           if(direction == "down"){
//                 img_chosen.classList.remove("img_chosen_class");
//               img_chosen.classList.add("img");
//           }
//           else{
//             img_chosen.classList.add("img_chosen_class");
//             img_chosen.classList.remove("img");
//           }
//       }
//   })

// function startJourney(){
//     document.getElementById("begin_button").onclick = function () {
//         console.log("hihi")
//         location.href = "scenes/act1.html";
//     };
// }


// const typedTextSpan = document.querySelector(".typed-text")
// // const intro = document.getElementById("intro-text").textContent;
// const intro = 
// "Along the Way is a short choose your own adventure-themed story of twenty-two-year-old Alex (they/them) who lives in a world overrun by robots, not of the cool, Kaiju-slaying variant. Instead, the bots are boring old service bots, brewing drinks or policing the streets. While Alex works their job at a local cafe as a barista—the only job they could get in their gap year after college—the robots begin to replace all of his human coworkers, the only ones who were able to keep Alex sane during the hustle and bustle of the store's comings and goings. As the world around Alex starts to change, the daily minutiae and cafe's strict schedule only begin to pick up in pace. The situation with the customers isn't much better: As much as Alex might try, the relationships are always transient and never familiar. Will Alex be able to keep up and move on to tomorrow or will they be left behind?"
// const typingDelay = 30;
// const erasingDelay = 100;
// let textArrayIndex = 0;
// let charIndex = 0;
// function type(){
//     console.log(charIndex);
//     if(charIndex < intro.length){
//         typedTextSpan.textContent += intro.charAt(charIndex);
//         charIndex++;
//         setTimeout(type, typingDelay);
//     }
// }

// type();