/*
	Created by: 		Leensey M. Lawas
	Dates Accomplished:	March 6, 7, 2016
*/

function getHammingDistance(str1, str2){
/*******************************************************************************
	Given two strings str1 and str2 of same length (length must never be 0 or
	negative!), the Hamming Distance of those two strings are the number of 
	inversions per character need to transform str1 to str2 or vise-versa. 
	Simply put, the Hamming Distance of two strings is the number of characters 
	that differ in ith position from position 1 to strlen(str1).
*******************************************************************************/
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

function countSubstrPattern(original, pattern){	
/*******************************************************************************
	Given a string original and pattern, we will count the number of occurrence
	of pattern in original.
*******************************************************************************/	
	var patt = /[^CGATU]/;

	// check if original is greater than or equal to pattern
	if(original.length<pattern.length){
		document.getElementById("sp").innerHTML = 
		"Error! Strings are not equal!";		
	}
	// check if original is a valid nucloebase
	else if(patt.test(original)==true){
		document.getElementById("sp").innerHTML = 
		"Error! Original is not a nucleobase!";	
	}
	// check if pattern is a valid nucloebase
	else if(patt.test(pattern)==true){
		document.getElementById("sp").innerHTML = 
		"Error! Pattern is not a nucleobase!";
	}
	else{
		var cnt=0;
		var i;
		for(i=0;i<=original.length-pattern.length;i++){
			// if the substring of original matches string pattern
			if(original.substring(i, pattern.length+i) == pattern) cnt++;
		}
		document.getElementById("sp").innerHTML = cnt;
	}
	
}// end of countSubstrPattern()

function isValidString(str, alphabet){
/*******************************************************************************
	Given an alphabet string where all letters are assumed to be unique, this
	function returns true if the string str is a valid string based on the 
	letters of alphabet.
*******************************************************************************/	
	// get regular expression from alphabet
	var patt = new RegExp("[^"+alphabet+"]", "g");

	// if pattern is true, display false
	if(patt.test(str)) document.getElementById("vs").innerHTML = false;
	else document.getElementById("vs").innerHTML = true;
	
}// end of isValidString()

function getSkew(str, n){
/*******************************************************************************
	Given a genome str of some length q (where q>0), it returns the number of
	Gs minus the number of Cs in the first n nucleotides (q>=n). The value can 
	be zero, negative or positive. The first position is one (1) not zero(0) 
	as we typically associate with string implementations.
*******************************************************************************/	
	var g_count=0;
	var c_count=0;
	var i;
	var patt = /[^CGATU]/;
	if(patt.test(str)){
		document.getElementById("gs").innerHTML = "Error! String is not a nucleobase";
	}
	else{
		for(i=0;i<n;i++){
			if(str.charAt(i)=='G') g_count++;
			if(str.charAt(i)=='C') c_count++;
		}
		document.getElementById("gs").innerHTML = g_count-c_count;
	}
}// end of getSkew()

function getMaxSkewN(){
/*******************************************************************************
	Given a genome str of some length q (where q>0), it returns the maximum
	value of the number of Gs minus the number of Cs in the first n nucleotides 
	(q>=n). The value can be zero, negative or positive. The first position is 
	one (1) not zero(0) as we typically associate with string implementations.
*******************************************************************************/

}// end of getMaxSkewN()

function getMinSkewN(){
/*******************************************************************************
	Given a genome str of some length q (where q>0), it returns the minimum
	value of the number of Gs minus the number of Cs in the first n nucleotides 
	(q>=n). The value can be zero, negative or positive. The first position is 
	one (1) not zero(0) as we typically associate with string implementations.
*******************************************************************************/
}// end of getMinSkewN()

/*

<script>
function myFunction() {
    return Math.PI;
}

document.getElementById("demo").innerHTML = myFunction();
</script>
*/