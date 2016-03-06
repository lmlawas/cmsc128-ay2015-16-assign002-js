function getHammingDistance(){
	var str1 = document.forms["hammingDistance"]["str1"].value;
	var str2 = document.forms["hammingDistance"]["str2"].value;
		if (str1 == null || str1 == "") {	       
	       document.getElementById("hd").innerHTML =
	       "Error! String 1 is empty!";
	    }
	    else if (str2 == null || str2 == "") {	       
	       document.getElementById("hd").innerHTML =
	       "Error! String 2 is empty!";
	    }
		else if(str1.length!==str2.length){			
			document.getElementById("hd").innerHTML = 
			"Error! Strings are not equal!";
		}
		else if(str1.length == str2.length){
			var pattern = /[^CGATU]/;
			if(pattern.test(str1)){				
				document.getElementById("hd").innerHTML = 
				"Error! String 1 is not a nucleobase!";				
			}
			else if(pattern.test(str2)){				
				document.getElementById("hd").innerHTML = 
				"Error! String 2 is not a nucleobase!";				
			}
			else{
				var cnt=0;
				var i;
				for(i=0;i<str1.length; i++){
					if(str1.charAt(i)!==str2.charAt(i)) cnt++;					
				}
				document.getElementById("hd").innerHTML = cnt;
			}
		}		
}// end of getHammingDistance() 