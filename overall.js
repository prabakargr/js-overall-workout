function loopFunction() {
	var inpvalue=document.getElementById('ipv').value;
	var text=0;
	var numsArray=[1,2,3,4,5,1,2,3,4,5,6,1,2,3,4,5,6,7,1,2,3,4,5,6,7,8]
	for ( i = 0; i < numsArray.length; i++) {
	   if(numsArray[i]==inpvalue){
	   	text++
	   }
	}
	document.getElementById('output').innerHTML=text;
	document.getElementById('stdval').innerHTML=inpvalue;
}
function onkeyupFunction() {
	document.getElementById('ipv').style.backgroundColor="white";
}
function onkeydownFunction() {
	document.getElementById('ipv').style.backgroundColor="yellow";
}
function searchPin(){
		var text;
		var codes=document.getElementById('findpin').value;
		switch(codes) {
			case "Orathanad":
			text="Pincode: 614 625";
			break;
			case "Thennamanad":
			text="Pincode: 654 657";
			break;
			case"Adyar":
			text="Pincode: 454 534";
			break;
			case"Medavakkam":
			text="Pincode: 928 492";
			break;
			default:
			text="invalid"
		}
		document.getElementById('pin').innerHTML=text;
	}
function onfocusFunction() {
	document.getElementById('findpin').style.background="red";
}
function onblurFunction() {
	var inputnumber=document.getElementById('inpnumb').value;
	var i=0;
	var text="";
	while (i<inputnumber){
	text +="<br> the number is"+ i;
	i++;
	}
	document.getElementById('while').innerHTML=text;
}	