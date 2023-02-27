function saklar(params){
    console.log('testing');
    let lampu1= document.getElementById("lampu1")
    if(params=="on"){
        //if nyala
        lampu1.src= "on.gif";
    }
    if(params== "of"){
        //if mati
        lampu1.src= "off.gif"
    }
    return lampu1;
}