;(function(){
	
	function getR(m,n){
		var r = Math.random();
		
		return Math.round( r*(n - m) + m) ;
	}
	
	window.getR = getR;
})();