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
    console.log('your random leter',alphabet);
    return(alphabet);
}
function setBackgroundColorById(letterid){
    const x=letterid.innerText.toLowerCase();
    const displayletter=document.getElementById(x);
    displayletter.classList.add('bg-orange-500');
}
function continueGame(){
    const letter =getRandomLetter();
    const changeLetter=document.getElementById('letterId');
    changeLetter.innerText=letter;
    setBackgroundColorById(changeLetter);
}
function keyBoardBtnPress(event){
    const playerPressedBtn=event.key;
    console.log('Player pressed', playerPressedBtn);

    const changedLetter=document.getElementById('letterId');
    const getLetterOnly=changedLetter.innerText;
    const getLetterInLowerCase=getLetterOnly.toLocaleLowerCase();
    console.log(playerPressedBtn,getLetterInLowerCase);
}
document.addEventListener('keyup',keyBoardBtnPress)

function clickToSwitch(){
    pageSwitcher('landingPage','playground');
    continueGame();
}
