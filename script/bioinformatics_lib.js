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
	       return document.getElementById("hd").innerHTML =
	       "Error! String 1 is empty!";
	    }
	    // if str2 is empty
	    else if (str2 == null || str2 == "") {	       
	       return document.getElementById("hd").innerHTML =
	       "Error! String 2 is empty!";
	    }
	    // if str1's length differ from str2's
		else if(str1.length!==str2.length){			
			return document.getElementById("hd").innerHTML = 
			"Error! Strings are not equal!";
		}
		// if str1's length is same as str2's
		else if(str1.length == str2.length){			
			// check if str1 is not a valid nucleobase
			if(isValidString(str1, "CGATU")==false){				
				return document.getElementById("hd").innerHTML = 
				"Error! String 1 is not a nucleobase!";				
			}
			// check if str2 is not a valid nucleobase
			else if(isValidString(str2, "CGATU")==false){				
				return document.getElementById("hd").innerHTML = 
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
				return document.getElementById("hd").innerHTML = cnt;
			}
		}		
}// end of getHammingDistance()

function countSubstrPattern(original, pattern){	
/*******************************************************************************
	Given a string original and pattern, we will count the number of occurrence
	of pattern in original.
*******************************************************************************/		
	// check if original is greater than or equal to pattern
	if(original.length<pattern.length){
		return document.getElementById("sp").innerHTML = 
		"Error! Strings are not equal!";		
	}
	// check if original is not a valid nucloebase
	else if(isValidString(original, "CGATU")==false){
		return document.getElementById("sp").innerHTML = 
		"Error! Original is not a nucleobase!";	
	}
	// check if pattern is not a valid nucloebase
	else if(isValidString(pattern, "CGATU")==false){
		return document.getElementById("sp").innerHTML = 
		"Error! Pattern is not a nucleobase!";
	}
	else{
		var cnt=0;
		var i;
		for(i=0;i<=original.length-pattern.length;i++){
			// if the substring of original matches string pattern
			if(original.substring(i, pattern.length+i) == pattern) cnt++;
		}
		return document.getElementById("sp").innerHTML = cnt;
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
	if(patt.test(str)) return document.getElementById("vs").innerHTML = false;
	else return document.getElementById("vs").innerHTML = true;
	
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

	// check if str is a valid nucloebase
	if(isValidString(str, "CGATU")==false){
		return document.getElementById("gs").innerHTML = 
		"Error! String is not a nucleobase";
	}

	else{
		for(i=0;i<n;i++){
			if(str.charAt(i)=='G') g_count++;	// increment G count
			if(str.charAt(i)=='C') c_count++;	// increment C count
		}
		return document.getElementById("gs").innerHTML = g_count-c_count;
	}
}// end of getSkew()

function initCount(str){
/*******************************************************************************
	Given a genome str, initialize the starting value to be used by
	getMaxSkewN() and getMinSkewN().
*******************************************************************************/	
	var g_count=0;
	var c_count=0;

	if(str.charAt(1)=='G') g_count++;
	if(str.charAt(1)=='C') c_count++;
	return g_count-c_count;
}

function getMaxSkewN(str, n){
/*******************************************************************************
	Given a genome str of some length q (where q>0), it returns the maximum
	value of the number of Gs minus the number of Cs in the first n nucleotides 
	(q>=n). The value can be zero, negative or positive. The first position is 
	one (1) not zero(0) as we typically associate with string implementations.
*******************************************************************************/
	var i;
	var j=0;
	var temp=1;
	var max=initCount(str);

	for(i=0;i<n;i++){
		if(getSkew(str, i)>max){
			max = getSkew(str, i);
		}
	}

	return document.getElementById("max").innerHTML = max;
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