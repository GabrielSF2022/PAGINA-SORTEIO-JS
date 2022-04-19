function sortear(){
    
    let np = document.getElementById("value").value;
    
    let ns = Math.round(Math.random() * np);

    document.getElementById("result").innerHTML= ns


    if (!np){
        alert("Por favor digite um numero");
    }



}