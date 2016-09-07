var snake, food, button, restartButton, gameStart, snakeDead;
var rate = 10;

function setup() {
	var test = $('#my-container')

	snakeDead = false;
	gameStart = false;

	myCanvas = createCanvas(600, 500);
	myCanvas.parent('my-container')

	button = createButton("Start the Game")
	button.position(test.width()/2, height/2);
	button.mousePressed(startTheGame)

	restartButton = createButton("Play Again?")
	restartButton.position(test.width()/2, height/2);
	restartButton.hide();

	frameRate(rate)
	snake = new Snake;
	food = new Food;
	food.createPosition();
};

function draw() {
	if (gameStart && snakeDead === false){
		button.hide();
		restartButton.hide();
		background(51);

		fill('rgba(100%,0%,100%,0.5)');
		ellipse(food.position.x, food.position.y, 20, 20)

		snake.draw();
		snake.update();
		snake.eatFood();
		snake.isSnakeDead();
		
	}else if(snakeDead){
		restartButton.show();
		restartButton.mousePressed(restartTheGame)
	}else{
		background(51)
		button.show();
	}
};

function keyPressed(direction) {
	if(direction.key === "ArrowUp"){

			snake.movement(direction, 0, -2)

	}else if(direction.key === "ArrowDown"){

		snake.movement(direction, 0, 2)

	}else if(direction.key === "ArrowRight"){

		snake.movement(direction, 2, 0)

	}else if(direction.key === "ArrowLeft"){

		snake.movement(direction, -2, 0)
	}
};

function startTheGame() {
	gameStart = true;
	background(51);

}

function restartTheGame() {
	snakeDead = false;
	snake = new Snake;
	food = new Food;
	food.createPosition();
	draw();
}