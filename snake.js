function Snake(){
	this.position = createVector(width/2, height/2);
	this.xSpeed = 2;
	this.ySpeed = 0;

	this.draw = function(){
		fill(255);
		ellipse(this.position.x, this.position.y, 20, 20);
	};

	this.update = function() {

		if(this.position.x > width){
			this.position.x = 0;
		}else if(this.position.x < 0){
			this.position.x = width;
		}else if(this.position.y > height){
			this.position.y = 0;
		}else if(this.position.y < 0){
			this.position.y = height;
		};

		this.position.x += this.xSpeed;
		this.position.y += this.ySpeed;
	};

	this.direction = function(x, y){
		this.xSpeed = x;
		this.ySpeed = y;
	};

	this.eatFood = function() {
		var d = dist(this.position.x, this.position.y, food.position.x, food.position.y)
		if(d < 15){
			food.createPosition();
		}
	};
};