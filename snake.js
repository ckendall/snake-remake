function Snake(){
	this.position = createVector(width/2, height/2);
	this.directionOfSnake = "right";
	this.xSpeed = 2;
	this.ySpeed = 0;
	this.multiplier = 5;
	this.tail = [];
	this.tailCounter = 0;

	this.draw = function(){
		fill(255)
		for(var i = 0; i < this.tail.length; i++){

			ellipse(this.tail[i].x, this.tail[i].y, 20, 20)

		}

		fill(255);
		ellipse(this.position.x, this.position.y, 20, 20);
	};

	this.update = function() {

		if(this.tailCounter === this.tail.length){

			for(var i = 0; i < this.tail.length - 1; i++){

				this.tail[i] = this.tail[i + 1]

			}

		}

		this.tail[this.tailCounter - 1] = createVector(this.position.x, this.position.y)

		if(this.position.x > width){
			this.position.x = 0;
		}else if(this.position.x < 0){
			this.position.x = width;
		}else if(this.position.y > height){
			this.position.y = 0;
		}else if(this.position.y < 0){
			this.position.y = height;
		};

		this.position.x += this.xSpeed * this.multiplier;
		this.position.y += this.ySpeed * this.multiplier;
	};

	this.direction = function(keyForDirection, x, y){

		if (keyForDirection.key === "ArrowRight" && this.directionOfSnake != "left"){

			this.whichDirectionSnakeIsGoing(x, y)
			this.directionOfSnake = "right"
		
		}else if(keyForDirection.key === "ArrowLeft" && this.directionOfSnake != "right"){

			this.whichDirectionSnakeIsGoing(x, y)
			this.directionOfSnake = "left"
		
		}else if(keyForDirection.key === "ArrowUp" && this.directionOfSnake != "down"){

			this.whichDirectionSnakeIsGoing(x, y)
			this.directionOfSnake = "up"

		}else if(keyForDirection.key === "ArrowDown" && this.directionOfSnake != "up"){

			this.whichDirectionSnakeIsGoing(x, y)
			this.directionOfSnake = "down"

		}
		
	};

	this.eatFood = function() {
		var d = dist(this.position.x, this.position.y, food.position.x, food.position.y)
		if(d < 20){
			this.tailCounter++
			food.createPosition();
		}
	};

	this.whichDirectionSnakeIsGoing = function(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}
};

