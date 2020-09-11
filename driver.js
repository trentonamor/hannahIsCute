//Initialize variables
var start = Date.now();
var level = 0;
let levelArray = [10,100,1000000];
var displayText = "I believe in you!";
var isGreen = false;

//Functions
function countTime() {
    if(isGreen) {
        if(level == 2) {
            window.location = "winner.html";
        } else {
            level++;
            reset();
        }
    } else {
        start = Date.now();
    }
}

function checkTime() {
    let end = new Date();
    let delta = (end - start)/1000;
    if(delta == levelArray[level]) {
        document.getElementById("button").style.backgroundColor = "#22FE05";
        document.getElementById("button").style.color = "#000000";
        isGreen = true;
        displayText = "You did it in exactly " + levelArray[level] +  " seconds!!!! You must be a counting Machine!!!! <br> Wait are you a machine? " +
            "That doesn't matter. Press the green button to progress to the next level!"
    } else if (delta > levelArray[level] - 0.52 && delta < levelArray[level] + 0.52) {
        document.getElementById("button").style.backgroundColor = "#22FE05";
        document.getElementById("button").style.color = "#000000";
        isGreen = true;
        displayText = "You did it in about " +
            levelArray[level] +
            " seconds! Good job! I mean it wasn't exact but you were within 1 standard " +
            "deviation, so close enough. <br> Press the green button to progress to the next level!"
    } else {
        //Randomize failure message
        let rng = Math.floor(Math.random() * 7);
        switch (rng) {
            case 0:
                displayText = "You might not have done it, but your're pretty cute!";
                break;
            case 1:
                displayText = "In times like these, I like to ask: What would Jesus do?";
                break;
            case 2:
                displayText = "Your Kevin Bacon number is the number of seconds you held this button.";
                break;
            case 3:
                displayText = "Were you eating chocolate instead of counting?";
                break;
            case 4:
                displayText = "Did MJ mistake your computer mouse for a real mouse again?";
                break;
            case 5:
                displayText = "It is probably a good thing you didn't become a math major.";
                break;
            default:
                displayText = "So close! It is a shame this isn't a game of horseshoes. You would win for sure!";
        }

        displayText += "<br>You did it in " + delta + " seconds";
        if(level == 2) {
            displayText = "Just kidding! I'm surprised you lasted " + delta + "seconds though." +
                "You're pretty awesome.<br>Go ahead, press the green button. You earned it!"
        }
    }

    document.getElementById("displayTextHeader").innerHTML = displayText;
}

function reset() {
    document.getElementById("button").style.backgroundColor = "#FE5605";
    document.getElementById("button").style.color = "#FFFFFF";
    updateText();
}

function updateText() {
    switch (level) {
        case 1:
            document.getElementById("paragraph").innerHTML = "Please press the purely functional" +
                " red button (which does absolutely everything) for exactly one hundred seconds, " +
                "then click the green button to proceed.";
            break;
        case 2:
            document.getElementById("paragraph").innerHTML = "Please regard the purely decorative " +
                "red button (which does absolutely nothing) for exactly ONE MILLION SECONDS, then click " +
                "the green button to proceed.";
            break;
        default:
            document.getElementById("paragraph").innerHTML = "This shall be a three-part test of your " +
                "personal integrity and counting skills." +
                "<br>To begin, please press the purely functional red button (which does absolutely everything) " +
                "for exactly ten seconds, then click the green button to proceed." +
                "<br>And don't try to trick me. I'll figure it out.";
            level = 0;
    }
}