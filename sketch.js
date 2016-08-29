var snake, food, button, gameStart;

function setup() {
	gameStart = false;
	createCanvas(600, 500);
	button = createButton("Start the Game")
	button.position(width/2 - 30, height/2);
	button.mousePressed(startTheGame)
	snake = new Snake;
	food = new Food;
	food.createPosition();
};

function draw() {
	if (gameStart){
		button.hide();
		background(51);

		fill('rgba(100%,0%,100%,0.5)');
		ellipse(food.position.x, food.position.y, 20, 20)

		snake.draw();
		snake.update();
		snake.eatFood();
		
	}else{
		background(51)
		button.show();
	}
};

function keyPressed() {

	if(keyCode === UP_ARROW){

		snake.direction(0, -2)

	}else if(keyCode === DOWN_ARROW){

		snake.direction(0, 2)

	}else if(keyCode === RIGHT_ARROW){

		snake.direction(2, 0)

	}else if(keyCode === LEFT_ARROW){

		snake.direction(-2, 0)

	}
};

function startTheGame() {
	gameStart = true;
	background(51);

}