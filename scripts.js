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


//SCENE 1 APPENDING 
const rag_id = document.getElementById("rag");
const eavesdrop_id = document.getElementById("eavesdrop");
const cat_id = document.getElementById("cat")
const comforting_id = document.getElementById("comforting")
const feelings_id = document.getElementById("feelings")

rag_selected = false;
eavesdrop_selected = false;
cat_selected = false;
comfort_selected = false;
feelings_selected = false;
function scene1_append(choice) {
    
    var html = '';
    if(rag_selected == false){
        if(choice == 'dirty'){
            html+= `<p class = "line_padding"> You grab the old t-shirt. It's dirty but it works. And it's yours. Knowing Wally, she'll be relieved she doesn't have to look at the strange dirt that still clings to it. </p>`;
            console.log('selected dirty');
        }
        
        else if(choice=='clean'){
            html+=`<p class = "line_padding">You follow your hunch, even though it pains you. The black hole grows a bit bigger. Did it follow you to the register from the tables?</p>`
            console.log('selected clean');
        }

        common_text = 
        `<p class = "line_padding">
            You get started with the windows at the front. You work your way back, but as you turn to start on the nearest table, you notice the black hole again, just beyond the window panes.
        </p>
        <p class = "line_padding">
            You move toward it and reach out your hand but it disappears as quickly as it appeared. It turns out it was just a tough spot you missed, so you spray it some more and keep trying.
        </p>
        <p class = "line_padding">
            Out of the corner of your eye, you notice your boss glance at you and then back at Wally. You're curious: Are they talking about you?
        </p>
        <p class = "line_padding">
            Should you eavesdrop or stick to the windows?
        </p>
        
        <div class='row_container'>

            <div class="item">
                <p class="semi_bold btn btn-center" style="flex-grow: 0;" onclick= "scene1_append('eavesdrop')">
                    [ EAVESDROP ]  
                </p>
            </div>
            <div class="item">
                <p class="semi_bold btn btn-center" style="flex-grow: 0;" onclick= "scene1_append('ignore')">
                    [ IGNORE IT ]  
                </p>
            </div>
        </div>`;

        rag_id.innerHTML += (html + common_text);
        rag_selected = true;
    }

    else if(eavesdrop_selected == false){

        html+=`
        <p class = "line_padding">
            You finally get the spot out from the window and the moonlight peeks back at you. What could that black hole have been?
        </p>
        <p class = "line_padding">
            This time, when you head to clean the table nearest to you, your boss nods his head at you and beckons toward the trash. Guess he's letting you off early today.        </p>
        </p>`;

        if(choice == "eavesdrop"){
            html+= `
            <p class = "line_padding">
                But you linger for just a second too long and hear "If you can't work the hours..."            
            </p>`;
        }
        else if(choice == "ignore"){
            // Nothing additional
        }
        html+=`
        <p class = "line_padding">
            You double bag the trash and walk out into the alleyway to the side of the cafe.
        </p>
        <p class = "line_padding">
            The walk to the dumpster is short but you're stopped by a black cat, limping and mewling toward you. The only reason you can really see it is its piercing yellow eyes. It's clear that it wants your attention even though it's sticking to the sides of the alley, in the shadows.
        </p>
        
        <div class='row_container'>
            <div class="item">
                <p class="semi_bold btn btn-center" style="flex-grow: 0;" onclick= "scene1_append('feed')">
                    [ FEED THE CAT ]  
                </p>
            </div>
            <div class="item">
                <p class="semi_bold btn btn-center" style="flex-grow: 0;" onclick= "scene1_append('ignore_cat')">
                    [ IGNORE IT ]  
                </p>
            </div>
        </div>`;

        eavesdrop_id.innerHTML+=(html)
        eavesdrop_selected = true;
    }

    else if (cat_selected == false){
        if(choice == "feed"){
            html+=`
            <p class = "line_padding">
                What if it were Tony Cat? You step inside and grab one of the cans of tuna you bought for Tony on your way to work for today and give it to the cat.
            </p>
            `
        }
        else if(choice == "ignore_cat"){
            html+=`
            <p class = "line_padding">
                Black cats are bad luck anyway, so you ignore it.
            </p>`
        }
        html += `
        <p class="line_padding">
                Halfway down the alley, you hear a crumpling and look down. In red font, you see an all caps title that almost shouts:
        </p>
        <img class = "item" src="../resources/wanted_poster.png">
        <p class="line_padding">
            It's rare seeing that nowadays. Your eyes scan the flyer and get to the bottom and you notice one of the slips with the shop's phone number has been hastily torn off.
        </p>
        <object class = "line_break_padding" type="image/svg+xml" data="../resources/line.svg">
            Your browser does not support SVG
        </object>
        <p class="line_padding">
            When you get back, you see Wally clearing out her locker. She reeks of smoke. She opens her mouth, then stops—pausing to think. Finally, she works up the confidence, "Alex, I got fired."        
        </p>
        <div class='row_container'>
            <div class="item">
                <p class="semi_bold btn btn-center" style="flex-grow: 0;" onclick= "scene1_append('')">
                    [ GIVE HER A HUG ]  
                </p>
            </div>
            <div class="item">
                <p class="semi_bold btn btn-center" style="flex-grow: 0;" onclick= "scene1_append('')">
                    [ SAY SORRY ]  
                </p>
            </div>
        </div>
        `
        cat_id.innerHTML+=(html)
        cat_selected = true;
    }

    else if (comfort_selected == false){
        html +=`
        <p class="line_padding">
            "Alex, it's okay. I'm glad you'll still be here though. Make sure to keep in touch, all right?" and she leaves.
        </p>
        <p class="line_padding">
            The sudden knowledge that she won't be at work tomorrow, won't be there as you're heading out and she's just getting in... It scares you. You feel your heartbeat quicken and your breathing starts to shallow. In her empty cubby, you see the black hole forming, but you rush out, not even saying goodbye to your boss.
        </p>
        <p class="line_padding">
            The skate back home is a blur.
        </p>
        <p class="line_padding">
            You lock the door behind you and your phone buzzes.
        </p>
        <p class="line_padding">
            You pick up, and your uncle opens with the usual: "Alex, how are you doing?" but you doubt that's what he wants to talk about. It's usually like this. A couple minutes of pretend small talk where your uncle gets to act like he's a good listener but...   
        </p>

        <div class='row_container'>
            <div class="item">
                <p class="semi_bold btn btn-center" style="flex-grow: 0;" onclick= "scene1_append('fine')">
                    [ I'M FINE ]  
                </p>
            </div>
            <div class="item">
                <p class="semi_bold btn btn-center" style="flex-grow: 0;" onclick= "scene1_append('scared')">
                    [ I'M SCARED ]  
                </p>
            </div>
        </div>
        `
        comforting_id.innerHTML+=(html)
        comfort_selected = true;
    }

    else if (feelings_selected == false){
        if(choice == "fine"){
            html+=`
            <p class="line_padding">
                "I'm fine."
            </p>
            <p class="line_padding">
                "That's good to hear! I'm doing great too. You know how it is, just taking your cousins to school, prep school, all that jazz."
            </p>
            `
        }
        else if(choice == "scared"){
            html+=`
            <p class="line_padding">
                "What? Don't say that! Man up; don't be scared."
            </p>
            `
        }
        html+=`
        <p class="line_padding">
            "Anyway, I just wanted to check in on you. I know it's late but I just wanted to know you were doing fine."
        </p>
        <p class="line_padding">
            "Okay, good to hear from you too. I need to sleep so, good night."
        </p>
        <p class="line_padding">
            You put the phone down and hang up, and just before you push the red button, you hear "Before you go, I know times are tough, but could you send us some money?"
        </p>
        <p class="line_padding">
            You feel it happening again this time, but Tony wanders up to you and you calm just a little bit.
        </p>
        <p class="line_padding">
            "Tony, I really need this job. I know you really need me to have this job too," you say.
        </p>
        <p class="line_padding">
            Tony stares back at you both unknowingly and sagaciously.
        </p>
        <p class="line_padding">
            "I can't be fired next. What else am I going to do? It's been too long since school, and I don't even know where to start... I don't even know what I like or what I want to do."
        </p>
        <p class="line_padding">
            It looks like Tony nods at you.
        </p>
        <p class="line_padding">
            "Tony, you always know what to say. Thanks! All right, I'm going to bed."
        </p>
        <p class="line_padding">
            You pat Tony and go to bed.
        </p>

        <!-- Next scene button -->
        <div>
            <p class="item semi_bold btn btn-center" style="flex-grow: 0;" onclick= "location.href = 'scene2.html'; ">
                SCENE 2
            </p>
        </div>

        `
        feelings_id.innerHTML+=(html)
        feelings_selected = true;
    }

    
}

milk_id = document.getElementById("milk")
milk_selected = false;
regmilk_selected = false;
function scene2_append(choice) {
    
    html = ''
    if(milk_selected==false){
        if(choice="soymilk"){
            html+=`
            <p class="line_padding">
                You make Loser's drink as quickly as you can, making sure to use the soy milk. When it's done, you slide the cup onto the pick-up counter and call out Loser's name. He picks it up and takes a long, drawn-out sip right in front of you. Satisfied, he gives you a nod of approval and leaves without saying thanks.
            </p>
            <p class="line_padding">
                You heave a sigh of relief and decide it's time for your 15. You deserve a break for choosing not to be petty.
            </p>
            <p class="line_padding">
                You take your break in the back of the shop, sitting down next to the dishwasher that Wally once broke because she tried to triple-stack the blenders. Your little corner of the shop seems surprisingly big without her constant snarkiness to fill it up. Your shoulders slump forwards as you think about how utterly alone you are in this world. Beside you, the black void seems to grow a little bit bigger.
            </p>
            `
        }
        else if(choice=="regmilk"){
            regmilk_selected = true;
            html+=`
            <p class="line_padding">
                You make Loser's drink, but use regular milk instead of soy. When it's done, you slide the cup onto the pick-up counter with a secretive smile and call out Loser's name. He picks it up and takes a long, drawn-out sip right in front of you. As you watch, his eyebrows draw together in annoyance and his nostrils flare. <i>Uh oh.</i> It seems like you forgot that people can actually taste the difference between regular milk and soy milk.
            </p>
            <p class="line_padding">
                Loser is absolutely furious. He turns so red as he yells at you that you wonder if he's forgetting to breathe. For the most part, you tune him out, but when he bites out the words "I need to speak to your manager," you know you won't be getting out of this scot-free. Begrudging, you call your boss and tell him he has to come in to handle a situation.
            </p>
            <p class="line_padding">
                Thankfully, your boss handles Loser's anger for you, and Loser goes back to work with a new drink and a $20 gift card. After he leaves, your boss turns to you, mouth set is a disappointed grimace. 
            </p>
            <img class = "img_padding" src="../resources/Manager.png">
            <p class="line_padding">
                "I know you know that Mr. Louis can't have regular milk—you've never made that mistake and you make his drink every day. Am I supposed to believe this was an accident?"
            </p>
            <p class="line_padding">
                Your cheeks burn and you look down at your shoes. You consider trying to lie yourself out of this, but you don't want to add even more guilt to carry on your shoulders today. Half-heartedly, you admit, "No, it wasn't an accident. I'm sorry, it won't happen again."
            </p>
            <p class="line_padding">
                He sighs and gives you a nod. "Well, it won't be happening again today at least. Go home, Alex."
            </p>
            `
        }
    }
    
    html+=`
    <p class="line_padding">
        You hang up your apron, grab your keys, and starting walking back to your apartment, shuffling your feet after your long and tiring day. You make it no more than a couple blocks before the gray clouds open up and it starts drizzling. You don't have an umbrella, but you figure that the rain's light and you don't really need one anyway. But by the time you get home, everything's wet—from your soggy hair to your uncomfortable jeans that are almost as clingy as your first ex was. 
    </p>
    <p class="line_padding">
        Without any energy to even shower, you collapse onto your soft couch. Your eyes find your guitar leading against the wall, but the black void floats in front of you, and you decide that it's too much effort to get up. You might as well sleep here tonight.
    </p>
    <p class="line_padding">
    Just when your eyelids are starting to droop, you hear a small meow from across the room. Tony Cat trots over and jumps right through the black void and onto your lap. As you watch, the void ripples where it made contact with Tony, and surprisingly, it fades and disappears. From where he's squashing your legs, Tony purrs contentedly and burrows his head into your stomach. Your lips curl up in a hint of a smile.    
    </p>

    <p class="semi_bold btn btn-center" onclick= "location.href = 'scene3.html'; ">
        [TAKE ME TO THE NEXT DAY]
    </p>
    `
    milk_id.innerHTML+=html;
    milk_selected = true;
}

// JOURNAL
// var writing_icon = document.getElementById('svgContainer');
// var modal_bg = document.querySelector('.modal-bg');
// var modal_close = document.querySelector('.modal-close');
// function show_modal(){
//     modal_bg.classList.add('bg-active');
//     console.log('clickeddd');
// }

// modal_close.addEventListener('click', function(){
//     modal_bg.classList.remove('bg-active');
//     console.log('clickeddd');
// })