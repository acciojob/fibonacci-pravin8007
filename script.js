function fibonacci(num){
	if(num === 0 || num === 1){
		return 0 ;
	}
	 else{
		 let a = 0 , b = 1 ;
		 
		 for(let n = 2 ; n < num ; n++){
			 let temp = b ;
			 b = a + b;
			 a = temp ;
		 }
		 return b ;
	 }
}

let ans = fibonacci(prompt());
alert(ans);