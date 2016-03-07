/*
	Created by: 		Leensey M. Lawas
	Dates Accomplished:	March 6, 7, 2016
*/

function getHammingDistance(){
	// get value from the form and store to variables
	var str1 = document.forms["hammingDistance"]["str1"].value;
	var str2 = document.forms["hammingDistance"]["str2"].value;

		// if str1 is empty
		if (str1 == null || str1 == "") {	       
	       document.getElementById("hd").innerHTML =
	       "Error! String 1 is empty!";
	    }
	    // if str2 is empty
	    else if (str2 == null || str2 == "") {	       
	       document.getElementById("hd").innerHTML =
	       "Error! String 2 is empty!";
	    }
	    // if str1's length differ from str2's
		else if(str1.length!==str2.length){			
			document.getElementById("hd").innerHTML = 
			"Error! Strings are not equal!";
		}
		// if str1's length is same as str2's
		else if(str1.length == str2.length){
			var pattern = /[^CGATU]/;
			// check if str1 is a valid nucleobase
			if(pattern.test(str1)){				
				document.getElementById("hd").innerHTML = 
				"Error! String 1 is not a nucleobase!";				
			}
			// check if str2 is a valid nucleobase
			else if(pattern.test(str2)){				
				document.getElementById("hd").innerHTML = 
				"Error! String 2 is not a nucleobase!";				
			}
			else{
				var cnt=0; 
				var i;
				for(i=0;i<str1.length; i++){
					// if character at str1 index i not equal to
					// character at str2 index i, iterate cnt
					if(str1.charAt(i)!==str2.charAt(i)) cnt++;					
				}
				document.getElementById("hd").innerHTML = cnt;
			}
		}		
}// end of getHammingDistance()

function countSubstrPattern(){
	// get value from the form and store to variables
	var o = document.forms["substringPattern"]["original"].value;
	var p = document.forms["substringPattern"]["pattern"].value;
	var patt = /[^CGATU]/;

	// check if original is greater than or equal to pattern
	if(o.length<p.length){
		document.getElementById("sp").innerHTML = 
		"Error! Strings are not equal!";		
	}
	// check if original is a valid nucloebase
	else if(patt.test(o)==true){
		document.getElementById("sp").innerHTML = 
		"Error! Original is not a nucleobase!";	
	}
	// check if pattern is a valid nucloebase
	else if(patt.test(p)==true){
		document.getElementById("sp").innerHTML = 
		"Error! Pattern is not a nucleobase!";
	}
	else{
		var cnt=0;
		var i;
		for(i=0;i<=o.length-p.length;i++){
			// if the substring of o matches string p			
			if(o.substring(i, p.length+i) == p) cnt++;
		}
		document.getElementById("sp").innerHTML = cnt;
	}
	
}// end of countSubstrPattern()

function isValidString(){
	// get value from the form and store to variables
	var str = document.forms["validString"]["str3"].value;
	var a = document.forms["validString"]["alphabet"].value;
	var patt = new RegExp("[^"+a+"]", "g");			

	if(patt.test(str)) document.getElementById("vs").innerHTML = false;
	else document.getElementById("vs").innerHTML = true;
	
}// end of isValidString()

function getSkew(){

}// end of getSkew()

function getMaxSkewN(){

}// end of getMaxSkewN()

function getMinSkewN(){

}// end of getMinSkewN()