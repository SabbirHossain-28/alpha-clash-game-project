// Function for page switcher from home page to playground
function pageSwitcher(switchPageID1,switchPageID2){
    const landingPage=document.getElementById(switchPageID1);
    landingPage.classList.add('hidden');
    const playGround=document.getElementById(switchPageID2);
    playGround.classList.remove('hidden');
}

// Function for getting random alphabet
function getRandomLetter(){
    // Get letter array from the given string
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');
    
    // Get random number for index by using Math. method
    const randomNumber=Math.random()*25;
    const indexNumber=Math.round(randomNumber);

    // Return the random alphabet from the function
    const alphabet=alphabets[indexNumber];
    return(alphabet);
}

// Function for set the random alphabet into the playground screen
function continueGame(){
    // Call the function for return the randomlly generated alphabet
    const letter =getRandomLetter();
    const changeLetter=document.getElementById('letterId');
    // Set random alphabet as a inner text into the element
    changeLetter.innerText=letter;
    // Call the function for set the letterkey background color to the random alphabet
    setBackgroundColorById(changeLetter);
    // changeLetter is argument which pass as a function parameter
}

// Set background color into the keyboard for random alphabet
function setBackgroundColorById(letterid){
    const x=letterid.innerText.toLowerCase();
    // Add classlist into the element based on the alphabet
    const addLetterBg=document.getElementById(x);
    addLetterBg.classList.add('bg-orange-500');
}

// Remove background color from the pressed alphabet
function removeBackgroundColorById(letterId){
    const y=letterId;
    const removeLetterBg=document.getElementById(y);
    removeLetterBg.classList.remove('bg-orange-500');
}

// Create commonfunction for get number type value from the element;
function getNumberFromElement(numberTypeElementId){
    const getElement=document.getElementById(numberTypeElementId);
    const numberElement=parseInt(getElement.innerText);
    return(numberElement);
}

// Create common function for set the update value of score and life in the element
function setUpdateValueToTheElement(updatedElementId,updateValue){
    const targetElement=document.getElementById(updatedElementId);
    targetElement.innerText=updateValue
    return(targetElement)
}

// Function for player keypress functionalities
// create event on pressing key in the playground keyboard
function keyBoardBtnPress(event){
    // get the keyup event value when press the keyboard
    const playerPressedBtn=event.key;

    // get the display alphabet by elementId
    const changedLetter=document.getElementById('letterId');
    const getLetterOnly=changedLetter.innerText;
    const getLetterInLowerCase=getLetterOnly.toLocaleLowerCase();

    if(playerPressedBtn===getLetterInLowerCase){
        console.log('You got a point');

        // Again call the function for create new random alphabet into the display
        continueGame();

        // Call the function for remove the background color of pressed alphabet
        removeBackgroundColorById(getLetterInLowerCase);

        // score update functionalities
        // const currentScorePoint=document.getElementById('score-Point');
        // const scorePoint=currentScorePoint.innerText;
        // const scorePointNumber=parseInt(scorePoint);

        const scoreNumber=getNumberFromElement('score-Point');
        const addScoreNumber=scoreNumber+1;
        setUpdateValueToTheElement('score-Point',addScoreNumber)

        // add the score by pressing the right button
        // const updateScore=scorePointNumber+1;
    
        // update score point
        // currentScorePoint.innerText=updateScore;
    }
    else{
        // set the life reduce functionalities
        // const reduceLife=document.getElementById('reduce-life');
        // const reduceLifeNumber=parseInt(reduceLife.innerText);

        const rerduceLife=getNumberFromElement('reduce-life');
        const updateReduceLife=rerduceLife-1;
        setUpdateValueToTheElement('reduce-life',updateReduceLife)

        // Reduce life  when press wrong key
        // const updateLife=reduceLifeNumber-1;

        // uodate life value
        // reduceLife.innerText=updateLife; 
    }
}
// Add event handler to the whole document structure in playground
document.addEventListener('keyup',keyBoardBtnPress)

// Function for calling the page switcher function and set random alphabet into the display
function clickToSwitch(){
    pageSwitcher('landingPage','playground');
    continueGame();
}
