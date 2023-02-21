function showInput() {
    document.getElementById('display').innerHTML = 
          document.getElementById("name").value;
                    
		document.getElementById('display1').innerHTML =
					document.getElementById("amount").value;
					
		document.getElementById('display2').innerHTML =
					document.getElementById("name").value;
		
		document.getElementById('display3').innerHTML =
					document.getElementById("amount").value;
					
		document.getElementById('display4').innerHTML =
					document.getElementById("charge").value;
		
				}



var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();  
document.getElementById('date').innerHTML=day+"/0"+month+"/"+year;
