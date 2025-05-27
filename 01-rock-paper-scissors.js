document.body.style = 'background-color:black;color:white;'
let step = 0;
let myScores = 0;
let pcScores = 0;
function randItem(mychoice) {
    let arrRand = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * arrRand.length);
    let choice = arrRand[randIndex];
    if (choice == mychoice) {
        document.querySelector('.js-div').innerHTML = mychoice;
        document.querySelector('.js-second-div').innerHTML = choice;
        document.querySelector('.js-result').innerHTML = 'Same';
        document.querySelector('.js-second-result').innerHTML = 'Anyone win';
        document.querySelector('.js-second-result').style = 'background-color:gray;color:white;';
        pcScores += 0;
        myScores += 0;
    }
    else {
        let Mychoice = document.querySelector('.js-div').innerHTML = mychoice;
        let pcchoice = document.querySelector('.js-second-div').innerHTML = choice;
        document.querySelector('.js-result').innerHTML = 'Not Same';
        if (Mychoice == 'Rock' && pcchoice == 'Scissors') {
            document.querySelector('.js-second-result').innerHTML = 'You win✨';
            document.querySelector('.js-second-result').style = 'background-color:green;color:white;';
            pcScores += 0;
            myScores += 1;
        }


        if (Mychoice == 'Scissors' && pcchoice == 'Paper') {
            document.querySelector('.js-second-result').innerHTML = 'You win✨';
            document.querySelector('.js-second-result').style = 'background-color:green;color:white;';
            pcScores += 0;
            myScores += 1;
        }
        if (Mychoice == 'Paper' && pcchoice == 'Rock') {
            document.querySelector('.js-second-result').innerHTML = 'You win✨';
            document.querySelector('.js-second-result').style = 'background-color:green;color:white;';
            pcScores += 0;
            myScores += 1;
        }
        if (Mychoice == 'Scissors' && pcchoice == 'Rock') {
            document.querySelector('.js-second-result').innerHTML = 'You loss😢';
            document.querySelector('.js-second-result').style = 'background-color:red;color:white;';
            pcScores += 1;
            myScores += 0;
        }
        if (Mychoice == 'Paper' && pcchoice == 'Scissors') {
            document.querySelector('.js-second-result').innerHTML = 'You loss😢';
            document.querySelector('.js-second-result').style = 'background-color:red;color:white;';
            pcScores += 1;
            myScores += 0;
        }
        if (Mychoice == 'Rock' && pcchoice == 'Paper') {
            document.querySelector('.js-second-result').innerHTML = 'You loss😢';
            document.querySelector('.js-second-result').style = 'background-color:red;color:white;';
            pcScores += 1;
            myScores += 0;
        }
    }
    if (myScores == 3 | pcScores == 3) {
        if (myScores == 3) {
            alert('You are win✨');
        }
        else if (pcScores == 3) {
            alert('You are loss :(');
        }
        else {
            alert('Game stopped');
        }
        window.location.reload();
    }
}
function alertScores() {
    alert("Your score : " + myScores + "\nPc score : " + pcScores);
}