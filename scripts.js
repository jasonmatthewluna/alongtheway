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

var rag_selected = false;
var eavesdrop_selected = false;
var cat_selected = false;
var comfort_selected = false;
var feelings_selected = false;
function scene1_append(choice) {
    
    var html = '';
    if(rag_selected == false && (choice=='dirty' || choice=='clean')){
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

    else if(eavesdrop_selected == false && (choice=='eavesdrop' || choice=='ignore')){

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
        </div>
        `;

        eavesdrop_id.innerHTML+=(html)
        eavesdrop_selected = true;
    }

    else if (cat_selected == false && (choice=='feed' || choice=='ignore_cat')){
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

    else if (comfort_selected == false && choice ==''){
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

    else if (feelings_selected == false && (choice=='fine' || choice=='scared')){
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

        <div class='row_container'>
            <div class="item">
            <p class = "btn btn-center" onclick="show_modal()" >
                WRITE IN JOURNAL
            </p>
            </div>
            <div class="item">
            <p class="item semi_bold btn btn-center" style="flex-grow: 0;" onclick= "location.href = 'scene2.html'; ">
                NEXT
            </p>
            </div>
        </div>
        `
        feelings_id.innerHTML+=(html)
        feelings_selected = true;
    }

    
}

var milk_id = document.getElementById("milk")
var milk_selected = false;
// var regmilk_selected = false;


function scene2_append(choice) {
    
    html = ''
    if(milk_selected==false && (choice=='soymilk' || choice=='regmilk')){
        if(choice=="soymilk"){
            sessionStorage.setItem("regmilk_selected", false);
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
            sessionStorage.setItem("regmilk_selected", true);
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

        html+=`
        <object class = "line_break_padding" type="image/svg+xml" data="../resources/line.svg">
            Your browser does not support SVG
        </object>
        <p class="line_padding">
            You hang up your apron, grab your keys, and starting walking back to your apartment, shuffling your feet after your long and tiring day. You make it no more than a couple blocks before the gray clouds open up and it starts drizzling. You don't have an umbrella, but you figure that the rain's light and you don't really need one anyway. But by the time you get home, everything's wet—from your soggy hair to your uncomfortable jeans that are almost as clingy as your first ex was. 
        </p>
        <p class="line_padding">
            Without any energy to even shower, you collapse onto your soft couch. Your eyes find your guitar leading against the wall, but the black void floats in front of you, and you decide that it's too much effort to get up. You might as well sleep here tonight.
        </p>
        <p class="line_padding">
        Just when your eyelids are starting to droop, you hear a small meow from across the room. Tony Cat trots over and jumps right through the black void and onto your lap. As you watch, the void ripples where it made contact with Tony, and surprisingly, it fades and disappears. From where he's squashing your legs, Tony purrs contentedly and burrows his head into your stomach. Your lips curl up in a hint of a smile.    
        </p>

        <div class='row_container'>
            <div class="item">
                <p class = "btn btn-center" onclick="show_modal()" >
                    WRITE IN JOURNAL
                </p>
            </div>
            <div class="item">
                <p class="item semi_bold btn btn-center" style="flex-grow: 0;" onclick= "location.href = 'scene3.html'; ">
                    NEXT
                </p>
            </div>
        </div>
        `
        milk_id.innerHTML+=html;
        milk_selected = true;
    
    }
}

// Get journal entries
function get_journal_entry(scene_question){
    if(scene_question=="scene1_question1"){
        var scene1_question1_id = document.getElementById("scene1_question1");
        console.log("What do you want right now? " + scene1_question1_id.value);
        sessionStorage.setItem("What do you want right now?", scene1_question1_id.value);
    }
    else if(scene_question=="scene1_question2"){
        var scene1_question2_id = document.getElementById("scene1_question2");
        console.log("What do you want for your future? " + scene1_question2_id.value);
        sessionStorage.setItem("What do you want for your future?", scene1_question2_id.value);
    }
    else if(scene_question=="scene2_question1"){
        var scene2_question1_id = document.getElementById("scene2_question1");
        console.log("Is there anything that you regret doing? " + scene2_question1_id.value);
        sessionStorage.setItem("Is there anything that you regret doing?", scene2_question1_id.value);
    }
    else if(scene_question=="scene4_question1"){
        var scene4_question1_id = document.getElementById("scene4_question1");
        console.log("What are three things you like about yourself? " + scene4_question1_id.value);
        sessionStorage.setItem("What are three things you like about yourself?", scene4_question1_id.value);
    }
    else if(scene_question=="scene4_question2"){
        var scene4_question2_id = document.getElementById("scene4_question2");
        console.log("What are three things you felt today? Why did you feel them? " + scene4_question2_id.value);
        sessionStorage.setItem("What are three things you felt today? Why did you feel them?", scene4_question2_id.value);
    }
    else if(scene_question=="scene5_question1"){
        var scene5_question1_id = document.getElementById("scene5_question1");
        console.log("What are you grateful for today? " + scene5_question1_id.value);
        sessionStorage.setItem("What are you grateful for today?", scene5_question1_id.value);
    }
    else if(scene_question=="scene5_question2"){
        var scene5_question2_id = document.getElementById("scene5_question2");
        console.log("How do you want your story to continue? " + scene5_question2_id.value);
        sessionStorage.setItem("How do you want your story to continue?", scene5_question2_id.value);
    }
}

// 1. Getting song

function get_fav_song(){
    <!-- var fav_song_id = document.getElementById("fav_song")
    console.log("fav song: " + fav_song_id.value); -->
 
    <!-- player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }); -->
        
}

<--
var player;

function onPlayerReady(event) {
  event.target.playVideo();
}
-->
    
<--
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
-->


var umbrella_id = document.getElementById("umbrella")
var umbrella_selected = false;
function scene3_append(choice) {
    var html='';
    if(umbrella_selected==false && (choice=='get_umbrella' || choice=='skate')){
        common_html= `
            <p class="line_padding">
                Enter your favorite song here:
            </p>

            <form>
                <input type="text" id="fav_song" >
                <br>
                <div id="player"></div>
                <input type="image" src="../resources/submit_btn.png" onclick="get_fav_song()">
            </form>
            
            

            <p class="line_padding">
                With this playing, the panic can't get to you. Your lips can't help but form a smile as you nod to the tune of the song—maybe today could be a good one.
            </p>
            <p class="line_padding">
                Then, you hop onto your skateboard and rush to work. The roads are a little more dangerous today, half because you're speeding past intersections without caution and half because you're late enough that people are beginning their lengthy morning commutes.
            </p>
            <p class="line_padding">
                You almost crash headlong into a customer exiting the cafe and you scuff up your shoes trying to brake. By now, it's pouring and you're drenched.
            </p>
            `
        if(choice=="get_umbrella"){
            html+=`
            <p class="line_padding">
            You turn around and rush back into your apartment to grab the ratty old umbrella you purchased from the corner store when you first moved here.            </p>
            `
            html+=common_html
            html+=`
            <p class="line_padding">
                Neither your jacket nor your umbrella was much help. The rain is coming down in sheets and it feels like it's coming at you from all sides.
            </p>
            `
        }
        else if(choice=="skate"){
            html+=`
            <p class="line_padding">
                Even though you're likely already late, you stop for a second to pop in your earbuds and queue up your favorite song. Seeing how it's going to rain and this day is already turning out so badly... Might as well listen to some good music to cheer yourself up.
            </p>
            `
            html+=common_html
        }
        
        common_html =
        `
        <p class="line_padding">
            Your sneakers squelch loudly as you walk into the cafe, and you feel your face redden as your manager gives you an embarrassing once-over. You can almost hear him judging you and you're happy he holds his tongue. He probably opened alone because you're so late. Lowering your head quickly, you run to the back and try to dry yourself off with a few paper towels.
        </p>
        <p class="line_padding">
            Nothing's going your way today.
        </p>
        <p class="line_padding">
            In the back, you toss your bag into your cubby and rush back out.
        </p>
        <p class="line_padding">
            You quickly rush to the back, toss your bag into your cubby, and rush back out.
        </p>
        <p class="line_padding">
            You mumble a quick apology to your manager and pretend you didn't hear the sigh of disappointment he lets out in response. Quickly getting into the motion of work, the day seems to fly by. The same mundane tasks and same boring interactions, just with the added spice that today you shiver from time to time. The wetness from your socks occasionally proves a reminder to you with sharp cold rush through your body but you push it aside and continue to work.
        </p>
        <p class="line_padding">
            While taking orders, you hear your boss.
        </p>
        <p class="line_padding">
            "Hey, Alexa, can you please get me some of the dark roast from the back?"
        </p>
        <p class="line_padding">
            Then, you feel a hand on your shoulder. Your boss is gruff and tells you "Head over to Sarah's. We need more dark roast."
        </p>
        <p class="line_padding">
            You can't tell if it's a good thing or a bad thing that you're being sent on an errand. On one hand, it's something the bots can't do. On the other, it doesn't feel great knowing your boss is nicer to Alexa than he is to you.
        </p>
        <p class="line_padding">
            The door hits you on the way out, but you still hear your boss.
        </p>
        <p class="line_padding">
            "And make it fast."
        </p>
        <p class="line_padding">
            You sneak back into the cafe from your skateboard from the back so you can get to Sarah's faster. It's just a couple blocks down, but in this rain and with your boss breathing down your neck, it's probably better to get this done as fast as possible.
        </p>
        <p class="line_padding">
            You get to Sarah's and she's already waiting for you under the cafe's awning. Her left hand, outstretched, offers you the beans. Sarah, however, is staring down at her right, scrolling on her phone.
        </p>
        <p class="line_padding">
            Still, she recognizes you're there, even before you take the beans.
        </p>
        <p class="line_padding">
            "I always tell him he should just get bots. They keep inventory better. Anyway, here, take your beans. Tell him he's paying me double next time this kind of thing happens." She laughs. "If you're even around."
        </p>
        <p class="line_padding">
            In your shock, all you can do is nod your head in deference and whisper out a soft "Thank you."
        </p>
        <p class="line_padding">
            The bell rings and she's gone, but you're at a standstill.
        </p>
        <img class = "img_padding" src="../resources/black_hole.png" width=300px></img>
        <p class="line_padding">
            The black hole appears and you walk toward it for a second before gaining a renewed resolve. You have to return to the cafe.
        </p>
        <p class="line_padding">
            The blood rushes to your head and your feet pound against the pavement as you speed down the street, back to the place where it all started. This time, you're going faster and faster until you actually trip, and the beans go flying.
        </p>
        <object class = "line_break_padding" type="image/svg+xml" data="../resources/line.svg">
            Your browser does not support SVG
        </object>
        <p class="line_padding">
            Before you know it, your shift is over. It’s closing shift so it’s lonely and dark and you run on autopilot as you want this day to be over as soon as possible.
        </p>
        <p class="line_padding">
            Today has just been a mass of rushing from place to place, high heart rate and stress-levels for you. 
        </p>
        <p class="line_padding">
            You take a slow walk to the bus stop, making your way back to the apartment.
        </p>
        <p class="line_padding">
            As you walk in, you see Tony Cat lift his head to greet you softly. Otherwise there is nothing excited for your return, frankly you’re not even happy to see yourself most days.  
        </p>
        <p class="line_padding">
            After a quick shower to finally get rid of those bone chilling wet clothes, you settle on your two-person couch, alone, with a bowl of quick ready to eat oatmeal, watching as the stars glimmer in the distance but the rain smell lingers in the air.
        </p>
        <p class="semi_bold btn btn-center" onclick= "location.href = 'scene4.html'; ">
            NEXT
        </p>
        `
        html+=common_html
        umbrella_id.innerHTML+=html;
        umbrella_selected = true;
    }
    
}

var quit_id = document.getElementById("quit")
var quit_selected = false;
// window.has_quit = false;
// sessionStorage["has_quit"] = false;
// sessionStorage.setItem("has_quit", false);

function scene4_append(choice) {
    
    var html = '';
    if(quit_selected == false && (choice=='apologize' || choice=='quit')){

        if(choice=="apologize"){
            sessionStorage.setItem("has_quit", false);
            html+=`
                <p class="line_padding">
                    "What is this?"
                </p>
                <p class="line_padding">
                    "Can you do anything right? Maybe I should've kept Wally instead of you! No, wait, Sarah was right, you're FIRED."
                </p>
            `
            if(sessionStorage.getItem("regmilk_selected")=="true"){
                html+=`
                    <p class="line_padding">
                        "You've been messing up ON PURPOSE with the customers. You could've really hurt someone."
                    </p>
                `
            }

            html+=`
                <p class="line_padding">
                    "And going to Sarah's? That's such a basic task, and you can't even do that. You're too slow and you don't pay any attention. If I replaced you with another Alexa, it'd be that much easier."
                </p>
                <p class="line_padding">
                    "I bet it was your fault the beans ran out. Imagine Alexa messing up on inventory. It wouldn't happen. Robots don't even need tips either."
                </p>
                <p class="line_padding">
                    "I don't even know why I keep you here. Get out."
                </p>
            `
        }
        else if(choice=="quit"){
            sessionStorage.setItem("has_quit", true);
            console.log('scene 4 ' + sessionStorage.getItem("has_quit"))
            html+=
            `
            <p class="line_padding">
                You murmur a small apology to your boss and manage out a "I quit."
            </p>
            <p class="line_padding">
                He's just staring at you, and you hold his gaze for a bit.
            </p>
            <p class="line_padding">
                "You quit?" He scoffs. "What, so you won't even take responsibility?"
            </p>
            <p class="line_padding">
                "You signed on for this job, and I thought you were a good kid who cared about the cafe. Are you telling me that you can't even handle restocking inventory? Sarah's is just down the street and you made a mistake. There wasn't any rush, but you come crawling back empty-handed. You're not even going to try to go to the grocery or wherever else? You're just going to leave us in the lurch?"
            </p>
            <p class="line_padding">
                "All right, if you won't do anything about it, just go. Fine."
            </p>
            `
        }
        html+=`
        <p class="line_padding">
        You clear out your cubby and grab your skateboard, but you don't have the energy to skate home so you stumble awkwardly down the street. The stares you get are piercing and you can feel eyes crawling all over you, wondering why such a wreck is wandering about in broad daylight.
        </p>
        <p class="line_padding">
        In the elevator, the other passengers shuffle to the other corner. You notice your next door neighbor trying to give you a small smile but avoiding eye contact at the same time.
        </p>
        <p class="line_padding">
        When you reach your floor, they don't even get off—maybe from shock, maybe out of embarrassment.
        </p>
        <p class="line_padding">
        You can't even bring yourself to be embarrassed at this point. All of the energy to do—to feel—anything has been sucked out off you.
        </p>
        <p class="line_padding">
        You collapse onto your bed and fall asleep for the rest of the weekend. When you wake, you take sips of water from a leftover water bottle that's been out for the past week. Every now and then, you feel Tony Cat sort of prod at you, but you can't be bothered to get out of bed.
        </p>
        <img class = "img_padding" src="../resources/Cat_Blackhole.png" width=300px></img>
        <p class="line_padding">
        After a couple days, you sit up in your bed. The black hole appears again, threatening to suck you back in, but Tony Cat jumps through it, tearing it to shreds.
        </p>
        <img class = "img_padding" src="../resources/cat.png" width=300px></img>
        <p class="line_padding">
        You drag yourself out of bed. Tony Cat's running out of food, and you're starting to starve.
        </p>

        <div class="item">
            <p class = "btn btn-center" onclick="show_modal('scene4_prompt1')" >
                WRITE IN JOURNAL
            </p>
        </div>

        <object class = "line_break_padding" type="image/svg+xml" data="../resources/line.svg">
            Your browser does not support SVG
        </object>
        <p class="line_padding">
            Your phone buzzes.
        </p>
        <p class="line_padding">
            "Hey, how are you? Haven't heard from you in a while!" There's a text from one of your friends from university. You scroll through for a second, and see a couple messages from Wally and your old co-workers.
        </p>
        <p class="line_padding">
            You decide you have to do something, at least look or feel presentable, or else you'd feel too ashamed to meet them.
        </p>
        <p class="line_padding">
            You sit in the shower for a while, skin pruning under the heat, but it feels good to finally be rid of it all.
        </p>
        <p class="line_padding">
            You head down to the skate park, practice a couple tricks—maybe you'll finally learn how to get into a crooked grind and lock into it.
        </p>
        <p class="line_padding">
            You grab your guitar and sing to Tony Cat for a little bit.
        </p>
        <p class="line_padding">
            You'll do it all, except for lay in bed all day.
        </p>
        <p class="line_padding">
            And after finally having a full day of just you, you go to bed and wake up, feeling refreshed for the first time in a long time.
        </p>

        <div class="item">
            <p class = "btn btn-center" onclick="show_modal('scene4_prompt2')" >
                WRITE IN JOURNAL
            </p>
        </div>

        <object class = "line_break_padding" type="image/svg+xml" data="../resources/line.svg">
            Your browser does not support SVG
        </object>
        <p class="line_padding">
            You wake up to a familiar tune and you pick up your phone, still half-asleep.        
        </p>
        <p class="line_padding">
            "Hey Alex! I'm in town today; want to meet up for lunch?"    
        </p>
        <p class="semi_bold btn btn-center" onclick= "location.href = 'scene5.html'; ">
            NEXT
        </p>
        `
        quit_id.innerHTML +=html;
        quit_selected = true;
    }
    
}

var if_quit_id = document.getElementById("if_quit");
var if_quit_selected = false;

function scene5_append(choice) {
    var q = sessionStorage.getItem("has_quit");
    var html ='';
    if(if_quit_selected==false){
        console.log('scene 5.2 ' + q)
        if(q == "true"){
            html+=`
            <p class="line_padding">
                The last time you were here, you kind of quit.
            </p>    
            `
        }
        else if(q =="false"){
            html+=`
            <p class="line_padding">
                The last time you were here, you were kind of fired.
            </p>   
            `
        }
        html+=
        `
        <p class="line_padding">
            "I just wanted to grab a cup of coffee," you reply, "and you know I can't stand that Starbucks crap."
        </p>
        <p class="line_padding">
        He gives a booming laugh at that, and the tension in your shoulders eases a little. 
        </p>   
        <p class="line_padding">
        "Well, it's nice to see a familiar human face around here," he chuckles and notices your guitar. "Are you planning to play somewhere?" he asks, motioning towards the case.
        </p>   
        <p class="line_padding">
        "Hopefully, I'm still trying to find a place right now," you say. 
        </p>   
        <p class="line_padding">
        He nods, "Well, how about trying it out here? I'm sure our customers would appreciate some live music, and I'll tell you what—you can have as much coffee as you want, on the house."
        </p>   
        <p class="line_padding">
        You take a seat at one of the tables scattered throughout the cafe and begin to take out your guitar. The black hole settles down on top of a chair, waiting for your performance. You take a deep breath and begin.
        </p>   
        <p class="line_padding">
        The cafe's customers aren't the most engaged audience, but you still enjoy playing in the cozy space. Most of the people pass you by, only stopping for a brief moment to get their coffee before continuing on with their busy lives. One of the Alexas—you don't remember which one—works dutifully at the coffee machine to make their orders as fast as she can. 
        </p>   
        <p class="line_padding">
        After an hour of playing, one of the customers stops in front of you. They listen, swaying to the rhythm as they sip at their coffee. When you finish the song, they give you a small smile and some enthusiastic applause. 
        </p>   
        <p class="line_padding">
        "What song was that? I loved it!" they gush.
        </p>   
        <p class="line_padding">
        You look down, a little embarrassed at the attention, and reply, "[name of the song they chose in scene 3]. I'm glad you liked it, it's one of my favorites."
        </p>   
        <p class="line_padding">
        They laugh and wave it off. 
        </p>   
        <p class="line_padding">
        "Of course, you're so talented! You know, I'm glad that you're playing here. These days, coffee shops just don't feel as inviting as they used to."
        </p>  

        <object class = "line_break_padding" type="image/svg+xml" data="../resources/line.svg">
        Your browser does not support SVG
        </object>

        <p class="line_padding">
        You play for several hours, taking breaks to chat with a couple more customers who stop long enough to talk to you and to get refills on your free coffee. When you finally say goodbye to your old manager and leave the cafe, the sun's already going down. 
        </p>   
        <p class="line_padding">
        It feels like you've just worked a shift at the cafe, but it's the first time you feel energized skating the familiar route back home. 
        </p>   
        <p class="line_padding">
        You unlock your apartment door and step inside. Immediately, Tony Cat pounces on you, meowing loudly for attention and for food. Of course, you indulge him. He gets his dinner, and once he's done eating, you play with him until he's begun to fall asleep. You pick him up and settle him on your lap as you sit down at your desk.
        </p>   
        <p class="line_padding">
        The deadline for your rent stares at you from where it's written on a huge Post-it note. But besides the fact that you're technically unemployed, you're feeling pretty relaxed and grateful for your day today. In fact, it's the first time in a long while that you didn't wish you could be a robot. The journal you used to write in when you were feeling stressed catches your eye.
        </p>  

        <div class="item">
            <p class = "btn btn-center" onclick="show_modal('scene5_prompt1')" >
                WRITE IN JOURNAL
            </p>
        </div>

        <div class="title_padding"> </div>
        <div class="item">
            <p class = "btn btn-center" onclick="show_modal('scene5_prompt2')" >
                HOW DO YOU WANT YOUR STORY TO CONTINUE?
            </p>
        </div>

        `
        if_quit_selected = true;
        if_quit_id.innerHTML += html;
    }
}


// MUSIC
// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }


// JOURNAL

var modal_bg = document.querySelector('.modal-bg');
// var modal_close = document.querySelector('.modal-close');

function show_modal(scene_prompt){

    if(scene_prompt=="scene4_prompt1"){
        var modal_id = document.getElementById('scene4') ;
        modal_id.innerHTML = 
        `
        <div class = "modal">
            <h2>What are three things you like about yourself?</h2>
            <span class = "modal-close" onclick="close_modal();">X</span>
            <form>
                <textarea name="journal_entry" id="scene4_question1" col="50" placeholder="Type here."></textarea>
            </form>
            <div class="click_padding"></div>
            <div class="container">
                    <input type="image" src="../resources/submit_btn.png" onclick="get_journal_entry('scene4_question1'); close_modal();" >
            </div>
        </div>
        `;
        modal_bg.classList.add('bg-active');
    }
    else if(scene_prompt=="scene4_prompt2"){
        var modal_id = document.getElementById('scene4') ;
        modal_id.innerHTML = `
        <div class = "modal">
            <h2>What are three things you felt today? Why did you feel them?</h2>
            <span class = "modal-close" onclick="close_modal();">X</span>
            <form>
                <textarea name="journal_entry" id="scene4_question2" col="50" placeholder="Type here."></textarea>
            </form>
            <div class="click_padding"></div>
            <div class="container">
                    <input type="image" src="../resources/submit_btn.png" onclick="get_journal_entry('scene4_question2'); close_modal();" >
            </div>
        </div>
        `;
        modal_bg.classList.add('bg-active');
    }
    else if(scene_prompt=="scene5_prompt1"){
        var modal_id = document.getElementById('scene5') ;
        modal_id.innerHTML = `
        <div class = "modal">
            <h2>What are you grateful for today?</h2>
            <span class = "modal-close" onclick="close_modal();">X</span>
            <form>
                <textarea name="journal_entry" id="scene5_question1" col="50" placeholder="Type here."></textarea>
            </form>
            
            <div class="click_padding"></div>
            <div class="container">
                <input type="image" src="../resources/submit_btn.png" onclick="get_journal_entry('scene5_question1'); show_modal('scene5_view_journal');" >
            </div>
        </div>
        `;
        modal_bg.classList.add('bg-active');
    }
    else if(scene_prompt=="scene5_prompt2"){
        var modal_id = document.getElementById('scene5') ;
        modal_id.innerHTML = `
        <div class = "modal">
            <h2>How do you want your story to continue?</h2>
            <span class = "modal-close" onclick="close_modal();">X</span>
            <form>
                <textarea name="journal_entry" id="scene5_question2" col="50" placeholder="Type here."></textarea>
            </form>
            
            <div class="click_padding"></div>
            <div class="container">
                <input type="image" src="../resources/submit_btn.png" onclick="show_modal('scene5_thanks');" >
            </div>
        </div>
        `;
        modal_bg.classList.add('bg-active');
    }
    else if(scene_prompt=="scene5_view_journal"){
        var modal_id = document.getElementById('scene5') ;

        a1 = `<p>` + sessionStorage.getItem('What do you want right now?') + `</p>`;
        a2 = `<p>` + sessionStorage.getItem('What do you want for your future?') + `</p>`;
        a3 = `<p>` + sessionStorage.getItem('Is there anything that you regret doing?') + `</p>`;
        a4 = `<p>` + sessionStorage.getItem('What are three things you like about yourself?') + `</p>`;
        a5 = `<p>` + sessionStorage.getItem('What are three things you felt today? Why did you feel them?') + `</p>`;
        a6 = `<p>` + sessionStorage.getItem('What are you grateful for today?') + `</p>`;

        no_entry = `<p>No entry recorded for this day.</p>`;
        
        if(sessionStorage.getItem('What do you want right now?')==null){
            a1= no_entry;
        }
        if(sessionStorage.getItem('What do you want for your future?')==null){
            a2=no_entry;
        }
        if(sessionStorage.getItem('Is there anything that you regret doing?')==null){
            a3=no_entry;
        }
        if(sessionStorage.getItem('What are three things you like about yourself?')==null){
            a4=no_entry;
        }
        if(sessionStorage.getItem('What are three things you felt today? Why did you feel them?')==null){
            a5=no_entry;
        }
        if(sessionStorage.getItem('What are you grateful for today?')==null){
            a6=no_entry;
        }


        console.log
        console.log("a1" + a1);
        const question_padding = `<div class="title_padding"></div>`;
        modal_id.innerHTML = 
        question_padding + 
        `<div class = "modal">
            <h2>What do you want right now?</h2>
            <span class = "modal-close" onclick="close_modal();">X</span>`
        + a1 
        + question_padding
        +
        `
            <h2>What do you want for your future?</h2>
        `
        + a2 
        + question_padding
        +
        `
            <h2>Is there anything that you regret doing?</h2>
        `
        + a3 
        + question_padding
        +
        `
            <h2>What are three things you like about yourself?</h2>
        `
        + a4 
        + question_padding
        +
        `
            <h2>What are three things you felt today? Why did you feel them?</h2>
        `
        + a5 
        + question_padding
        +
        `
            <h2>What are you grateful for today?</h2>
        `
        + a6 
        + question_padding
        ;
        modal_bg.classList.add('bg-active');
    }
    else if(scene_prompt=="scene5_thanks"){
        var modal_id = document.getElementById('scene5') ;
        modal_id.innerHTML = `
        <div class = "modal">
            <div class = "container">
                <h2>Thank you for coming Along The Way with us!</h2>
                <span class = "modal-close" onclick="close_modal();">X</span>
            <div>
        </div>
        `;
        modal_bg.classList.add('bg-active');
    }
    else{
        modal_bg.classList.add('bg-active');
        console.log('clickeddd');
    }
}

function close_modal(){
    modal_bg.classList.remove('bg-active');
    console.log('submitted');
}
