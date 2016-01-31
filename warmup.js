var my_max = function(arr){
	max = -1000000
	for(i = 0; i<arr.length; i++){
		if(max < arr[i]){
			max = arr[i]
		}
	}
	return max
}

var vowel_count = function(str){
	ctr = 0
	var is_vowel = function(c){
		if(c == "a" || c == "e" || c == "i" || c == "o" || c == "u"){
			return true
		}
		else{
			return false
		}
	}
	len = str.length
	for(i = 0; i< len; i++){
		if(is_vowel(str[i])){
			ctr++;
		}
	}
	return ctr
}

var reverse = function(str){
	var end = ""
	n = str.length
	for(i = 0; i < str.length; i++){
		end += str[n-1]
		n--;
	}
	return end
}

console.log(reverse("hello world"))