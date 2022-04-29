var synth = window.speechSynthesis;
var newWord ='';
const sayBtn  = document.querySelector("#play");
const input = document.querySelector('#generate');
const submitBtn = document.querySelector('#submit');
const skipBtn = document.querySelector('#skip');
const tryAgain = document.querySelector('.tryAgain');

//Fetching Random word from RandomWordAPI
async function getWord(){
 
  let response= await fetch("https://random-word-api.herokuapp.com/word");
  let data = await response.json();
  newWord = await JSON.stringify(data).replace('\"','').replace('\"','').replace('\[','').replace('\]','');
  let charLength= newWord.length;
  if(charLength > 6){
    getWord();
  } else{
    document.getElementById("wordLength").style.display = "block";
    //document.getElementById('newWord').innerHTML= newWord;  //for TESTING
    document.getElementById('charLength').innerHTML= charLength;
    
    console.log(newWord);
    
    submitBtn.style.display= "block";
    skipBtn.style.display= "block";
    generateBox(charLength);
    getDef();
  } 
}

//Fetching definition from WordAPI

async function getDef(){
  let myResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`);
  let ans = await myResponse.json();
  let data = await JSON.stringify(ans);
  let mean = data.meanings;
  console.log(data);
}


var voices = [];


//Text-To-Speech API which is used to dictate the word
function sayIt(){
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
}
  if (newWord !== '') {
    var sayThis = new SpeechSynthesisUtterance(newWord);
    sayThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    sayThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }
    
    sayThis.voice = voices[9];
    sayThis.pitch = 1;
    sayThis.rate = 0.9;
    synth.speak(sayThis);
  }
}

//Generate the Input Boxes based on character lenght of the word
function generateBox(length){
      for(let i=1; i<=length; i++){
   		  input.innerHTML += `<input type='text' class='inputBox' id='newId${i}' maxlength='1' oninput="this.value=this.value.toLowerCase()" required></input>`;
    }   
  }

var score = 0; 
const scoreBoard = document.querySelector('#scoreNo');
scoreBoard.innerHTML= score;
//Set focus to next Input field

var container = document.getElementsByClassName("userInput")[0];
container.onkeyup = function(e) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

//On Submit click after entering values
let arr = [];    
submitBtn.addEventListener( 'click', () =>{

  const inputBox = document.querySelectorAll('.inputBox');
      
    for(let i = 0;i < inputBox.length; i++)
    {
    arr.push(inputBox[i].value)
      
    }
  let userWord= arr.toString().replace(/,/g,'');
  console.log(userWord);
  
  for(let x=0; x<inputBox.length;x++){
      if(newWord[x]!=inputBox[x].value){
          
          inputBox[x].style.color = "red";
          inputBox[x].style.borderColor = "red";
      }
  }
  // Validation to check if the word input UserInput is equal to the word generated NewWord
  var threeAtt= false; 

  if(userWord == newWord){
      for(let x=0; x<inputBox.length;x++){
        if(newWord[x]==inputBox[x].value){
            
            inputBox[x].style.color = "#07dd13";
            inputBox[x].style.borderColor = '#07dd13';
        }
    }

    //alert( "You spelled it right!:" + newWord);
    var ansRes = new SpeechSynthesisUtterance("You got it! Well Done!");
    score++;
    scoreBoard.innerHTML= score;
    arr=[];
    
    ansRes.voice = voices[9];
    ansRes.pitch = 1;
    ansRes.rate = 0.9;
    synth.speak(ansRes);
    tryAgain.innerHTML = `<p class="correct">You got it!</p>`;
    setTimeout(()=>{
      tryAgain.innerHTML = ``;
      removeElementsByClass('inputBox');
      
      getWord();
    },2000)

  }

   else {
    //alert( "You got it incorrect, Try Again");
    var element = document.querySelector('.userInput');
    // using className Property
    // adding single class
    element.className += ' boxSwing';
    arr=[];
    setTimeout(()=>element.classList.remove("boxSwing"),2000);
    var inRes = new SpeechSynthesisUtterance("Try Again!");
    inRes.voice = voices[9];
    inRes.pitch = 1;
    inRes.rate = 0.9;
    synth.speak(inRes);
    tryAgain.innerHTML = `<p class="try">Try Again!</p>`;
    setTimeout(()=>{tryAgain.innerHTML = ``},2000)
  } 
});

//Resets the boxes to default:none
function removeElementsByClass(className){
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}
  
skipBtn.addEventListener('click',()=>{
  removeElementsByClass('inputBox');
  getWord();
})