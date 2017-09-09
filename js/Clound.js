;(function(){
	
	function Clound(){
			this.ele = document.createElement("div");
			
			
			this.x = getR(0,document.body.offsetWidth);
			this.y = getR(10,50);
			this.speed = getR(1,3);
			
			this.ele.style.left = this.x +"px";
			this.ele.style.top  = this.y +"px";
			this.ele.className="clound";
			
			document.body.appendChild(this.ele);
		}
		
	Clound.prototype.move = function(){
		this.x -= this.speed;
		if(this.x < -100 ){
			this.x = getR(document.body.offsetWidth,document.body.offsetWidth+100);
		}
		this.ele.style.left = this.x +"px";
		 
	}
	
	
	window.Clound = Clound;
	
	
})()
