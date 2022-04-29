var word = document.getElementById("name");
// word.addEventListener("keypress",function(event){
//     if(event.key==="Enter")
//     {
//         event.preventDefault();
//         getName()
//         document.getElementById("name").value="";
//     }
// });

function getName()
{
    var words =document.getElementById("name").value;
    localStorage.setItem("words",JSON.stringify(words));
    console.log(document.getElementById("name").value)
    document.getElementById("name").value="";
}
