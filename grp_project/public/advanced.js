const api_url =  "https://random-word-api.herokuapp.com/word";
let spell;
i=0;
// Defining async function
async function getapi(url) 
{ 
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
   
    var data = await response.json();
    spell = data.toString();
    console.log('FETCHED WORD',data);
    document.getElementById("number").innerHTML= spell.length;;
    return "success";
}
async function getMeaning(urls)
{
    const responses = await fetch(urls);
    var data = await response.json();
    console.log('meaning',data);
    document.getElementById("meaning").value=data;
}
getapi("https://random-word-api.herokuapp.com/word");
document.getElementById("score").innerHTML=i;
var word = document.getElementById("input");
word.addEventListener("keypress",function(event){
    if(event.key==="Enter")
    {
        event.preventDefault();
        document.getElementById("submitbtn").click();
    }
});
function generate()
{
    var v;
    console.log(`Handling for generate`);
    getapi("https://random-word-api.herokuapp.com/word").then((v) => console.log(v));

//     if (spell.length<=6)
//     {
//         console.log(`Handling for generate`);
//         getapi("https://random-word-api.herokuapp.com/word").then((v) => console.log(v)); 
//     }
}
function speak()
{
    //var msg = new SpeechSynthesisUtterance(spell);
    //window.speechSynthesis.speak(msg);
    responsiveVoice.speak(spell);
}
function reload()
{
    location.reload();
}
function getInput()
 { 
     let spelling =  document.getElementById("input").value;
     console.log(spelling);
     return spelling;
}
function meaning()
{
getMeaning("https://api.dictionaryapi.dev/api/v2/entries/en/"+spell);
}
const ani = document.getElementById("input");
function match()
{ 
    let input1 = getInput();  
    if (input1==spell)
    {
        console.log("matched");
        document.getElementById("answer").innerHTML="Well Done";
        document.getElementById("color").style.backgroundColor='rgb(115, 230, 76)';
        document.getElementById("input").style.borderColor='rgb(115, 230, 76)'
        document.getElementById("input").value="";
        responsiveVoice.speak("well done");
setTimeout(function() {generate(); document.getElementById("answer").innerHTML=".";document.getElementById("input").style.borderColor='black';document.getElementById('color').style.backgroundColor='#fff5e2';}, 2000);
        i++;
        document.getElementById("score").innerHTML=i;
        // ani.classList.remove("boxswing")
    }
    else
    {
        console.log("unmatched");
        document.getElementById("answer").innerHTML="Try Again";
        document.getElementById("color").style.backgroundColor='red';
        document.getElementById("input").value="";
        document.getElementById("input").style.borderColor='red';
        responsiveVoice.speak("try again");
        setTimeout(function(){document.getElementById("answer").innerHTML=".";document.getElementById("input").style.borderColor='black';document.getElementById("color").style.backgroundColor='#fff5e2';},2000);
    }
}
