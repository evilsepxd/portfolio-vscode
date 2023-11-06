import getDistance from "../functions/getDistance";

class Snake {
	constructor(initX, initY, context, canvasWidth, canvasHeight) {
		this.ctx = context;
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;

		this.speed = 1;
		this.dir = 'top';
		this.x = initX;
		this.y = initY;
		this.vx = 0;
		this.vy = -this.speed;

		this.radius = 6;
		this.tailLength = 150;
		this.tailIncrease = 20;
		this.points = [
			{
				x: this.x,
				y: this.y,
				alpha: 1
			},
			{
				x: this.x,
				y: this.y + ((this.tailLength / 3) >> 0),
				alpha: 0
			},
			{
				x: this.x + ((this.tailLength / 3) >> 0),
				y: this.y + ((this.tailLength / 3) >> 0),
				alpha: 0
			},
			{
				x: this.x + ((this.tailLength / 3) >> 0),
				y: this.y + ((this.tailLength * 2 / 3) >> 0),
				alpha: 0
			}
		]

		this.calcAlpha(true);
	}


	reset(initX, initY) {
		this.x = initX;
		this.y = initY;
		this.tailLength = 150;
		this.dir = 'top';
		this.vx = 0;
		this.vy = -this.speed;

		this.points = [
			{
				x: this.x,
				y: this.y,
				alpha: 1
			},
			{
				x: this.x,
				y: this.y + ((this.tailLength / 3) >> 0),
				alpha: 0
			},
			{
				x: this.x + ((this.tailLength / 3) >> 0),
				y: this.y + ((this.tailLength / 3) >> 0),
				alpha: 0
			},
			{
				x: this.x + ((this.tailLength / 3) >> 0),
				y: this.y + ((this.tailLength * 2 / 3) >> 0),
				alpha: 0
			}
		]

		this.calcAlpha(true);
	}


	increazeSize() {
		this.tailLength += this.tailIncrease;
		switch (this.dir) {
			case 'top':
				this.y = this.y - this.tailIncrease;
				break;
			case 'bot':
				this.y = this.y + this.tailIncrease;
				break;
			case 'left':
				this.x = this.x - this.tailIncrease;
				break;
			case 'right':
				this.x = this.x + this.tailIncrease;
				break;
		}
	}

	// вычисляем alpha для градиента
	calcAlpha(init) {
		for (let i = 1; i < this.points.length; i++) {
			const prevPoint = this.points[i - 1],
				 point = this.points[i];
			
			const lineLength = getDistance(prevPoint.x, prevPoint.y, point.x, point.y);
			point.alpha = prevPoint.alpha - lineLength / this.tailLength;
			if (!init) {
				const gradient = this.ctx.createLinearGradient(
					prevPoint.x,
					prevPoint.y,
					point.x,
					point.y
				);
				gradient.addColorStop(0, `rgba(67, 217, 173, ${prevPoint.alpha})`);
				gradient.addColorStop(1, `rgba(67, 217, 173, ${point.alpha})`);
	
				this.ctx.strokeStyle = gradient;
				this.ctx.lineTo(point.x, point.y);
				this.ctx.stroke();
			}
		}
	}


	addPoint() {
		this.points.unshift({ x: this.x, y: this.y, alpha: 1 });
	}


	isCollisedWithFood(foodX, foodY, foodRadius) {
		const distance = getDistance(this.x, this.y, foodX, foodY);
		if (distance <= (this.radius + foodRadius)) {
			return true;
		} return false;
	}


	isCoillisedWithBorder() {
		if (
			this.x <= this.radius
			|| this.x >= this.canvasWidth - this.radius
			|| this.y <= this.radius
			|| this.y >= this.canvasHeight - this.radius
		) {
			return true;
		}
	}


	isCollisedWithItself() {
		for (let i = 1; i < this.points.length; i++) {
			const prevPoint = this.points[i - 1],
				 point = this.points[i],
				 maxX = Math.max(prevPoint.x, point.x),
				 minX = Math.min(prevPoint.x, point.x),
				 maxY = Math.max(prevPoint.y, point.y),
				 minY = Math.min(prevPoint.y, point.y);

			if ((
					maxX === minX
					&& this.y < maxY
					&& this.y > minY
					&& this.x === maxX
				) || (
					maxY === minY
					&& this.x < maxX
					&& this.x > minX
					&& this.y === maxY
				)) {
				return true;
			}
		}
	}


	draw() {				// рисуем сначала голову змейки (полукруг), затем линию до каждой точки поворота
		this.ctx.lineWidth = this.radius * 2;
		this.ctx.lineJoin = 'round';
		this.ctx.lineCap = 'round';

		this.ctx.beginPath();
		this.ctx.moveTo(this.x, this.y);

		this.calcAlpha(false);
	}


	changeDirection(dir) {
		switch(dir) {
			case 'top':
				if (this.dir === 'left' || this.dir === 'right') {
					this.addPoint();
				}
				this.dir = 'top';
				this.vx = 0;
				this.vy = -this.speed;
				break;
			case 'bot':
				if (this.dir === 'left' || this.dir === 'right') {
					this.addPoint();
				}
				this.dir = 'bot';
				this.vx = 0;
				this.vy = this.speed;
				break;
			case 'left':
				if (this.dir === 'top' || this.dir === 'bot') {
					this.addPoint();
				}
				this.dir = 'left';
				this.vx = -this.speed;
				this.vy = 0;
				break;
			case 'right':
				if (this.dir === 'top' || this.dir === 'bot') {
					this.addPoint();
				}
				this.dir = 'right';
				this.vx = this.speed;
				this.vy = 0;
				break;
		}
	}


	// изменяем положение головы змейки,
	// перебираем каждый элемент хвоста
	move() {
		this.x += this.vx;
		this.y += this.vy;

		this.points[0].x = this.x;
		this.points[0].y = this.y;

		// двигаем последнюю точку в стороону первой, пока она её не достигнет,
		// после чего удаляем её и последней становится предпоследняя

		if (this.points.length > 1) {
			const lastPoint = this.points[this.points.length - 1];
			const preLastPoint = this.points[this.points.length - 2];
			const lastPointDistanceX = preLastPoint.x - lastPoint.x;
			const lastPointDistanceY = preLastPoint.y - lastPoint.y;

			if (lastPointDistanceX > 0) {
				lastPoint.x += this.speed;
			} else if (lastPointDistanceX < 0) {
				lastPoint.x -= this.speed;
			} else if (lastPointDistanceX === 0 && lastPointDistanceY === 0) {
				this.points.pop();
			}

			if (lastPointDistanceY > 0) {
				lastPoint.y += this.speed;
			} else if (lastPointDistanceY < 0) {
				lastPoint.y -= this.speed;
			}
		}
	}
}

export default Snake;