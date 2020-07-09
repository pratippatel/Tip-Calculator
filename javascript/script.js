function calculator(){
    
    var billamt= document.getElementById("billamt").value;
    var quality= document.getElementById("quality").value;
    var members= document.getElementById("member").value;
    
    console.log(billamt);
    console.log(quality);
    console.log(members);
    
    if(billamt=="" || quality=="" || members=="")
        {
            alert("* fields are mandatory");
        }
    if(members <=1)
        {
            alert("1 member");
            members=1;
            document.getElementById("each").style.display="none";
        }
    var total = ((billamt * quality)/members)*0.35;
    total.toPrecision();
    
    document.getElementById("tip").innerHTML= total;
}
var btn= document.getElementById("calbtn")
//console.log(btn);
btn.addEventListener("click",function(){
    calculator();
});