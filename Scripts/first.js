function pageSwitcher(switchPageID1,switchPageID2){
    const landingPage=document.getElementById(switchPageID1);
    landingPage.classList.add('hidden');
    const playGround=document.getElementById(switchPageID2);
    playGround.classList.remove('hidden');
}
function getRandomLetter(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');
    
    const randomNumber=Math.random()*25;
    const indexNumber=Math.round(randomNumber);

    const alphabet=alphabets[indexNumber];
    return(alphabet);
}
function setBackgroundColorById(letterid){
    const x=letterid.innerText.toLowerCase();
    const addLetterBg=document.getElementById(x);
    addLetterBg.classList.add('bg-orange-500');
}
function removeBackgroundColorById(letterId){
    const y=letterId;
    const removeLetterBg=document.getElementById(y);
    removeLetterBg.classList.remove('bg-orange-500');
}
function continueGame(){
    const letter =getRandomLetter();
    const changeLetter=document.getElementById('letterId');
    changeLetter.innerText=letter;
    setBackgroundColorById(changeLetter);
}
function keyBoardBtnPress(event){
    const playerPressedBtn=event.key;

    const changedLetter=document.getElementById('letterId');
    const getLetterOnly=changedLetter.innerText;
    const getLetterInLowerCase=getLetterOnly.toLocaleLowerCase();

    if(playerPressedBtn===getLetterInLowerCase){
        console.log('You got a point');
        continueGame();
        removeBackgroundColorById(getLetterInLowerCase);
    }
    else{
        console.log('You loose,Try Again');
    }
}
document.addEventListener('keyup',keyBoardBtnPress)

function clickToSwitch(){
    pageSwitcher('landingPage','playground');
    continueGame();
}
