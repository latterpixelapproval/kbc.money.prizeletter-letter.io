function showInput() {
    document.getElementById('display').innerHTML = 
          document.getElementById("name").value;
                    
		document.getElementById('display2').innerHTML =
					document.getElementById("loanamount").value;
					
		document.getElementById('display3').innerHTML =
					document.getElementById("fee").value;
		
		document.getElementById('display4').innerHTML =
					document.getElementById("loanamount").value;
					
		document.getElementById('display5').innerHTML =
					document.getElementById("year").value;
					
		document.getElementById('display6').innerHTML =
		  document.getElementById("emi").value;
		
				}



var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();  
document.getElementById('date').innerHTML=day+"/0"+month+"/"+year;
