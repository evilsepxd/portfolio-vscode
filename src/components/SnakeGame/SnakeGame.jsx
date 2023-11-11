import StartMode from './js/modes/StartMode';
import endMode from './js/modes/endMode';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import listenForDirectionChange from './js/functions/listenForDirectionChange';

import Snake from './js/classes/snake';
import Food from './js/classes/food';

import bgGreenBlurSrc from '../../assets/img/helloPage/bg-green-blur.svg';
import bgBlueBlurSrc from '../../assets/img/helloPage/bg-blue-blur.svg';
import boltUpLeftSrc from './assets/img/bolt-up-left.svg';
import boltUpRighttSrc from './assets/img/bolt-up-right.svg';
import boltDownLeftSrc from './assets/img/bolt-down-left.svg';
import boltDownRightSrc from './assets/img/bolt-down-right.svg';
import imgFoodSrc from './assets/img/food.svg';

import Arrows from './js/components/Arrows';

import './style/style.scss';
import './style/game.scss'

function SnakeGame() {

	const snakeInit = {
		x: 98,
		y: 120
	};
	const foodInit = {
		x: 98,
		y: 64
	}

	const foodAmountInit = 10;
	const foodAmount = useRef(0);

	const canvas = useRef(null);
	const animationId = useRef(null);
	const startBtnRef = useRef(null);

	const [snake, setSnake] = useState(null);
	const [food, setFood] = useState(null);
	const [mode, setMode] = useState('start');

	useEffect(() => {
		animationId.current = requestAnimationFrame(game);

		function game() {

			if (!canvas) return;
			const ctx = canvas.current.getContext('2d');
		
			const canvasWidth = canvas.current.width,
				canvasHeight = canvas.current.height;
		
			setSnake(new Snake(snakeInit.x, snakeInit.y, ctx, canvasWidth, canvasHeight));
			setFood(new Food(foodInit.x, foodInit.y, ctx, canvasWidth, canvasHeight));
		
			listenForDirectionChange(snake);
	

			switch (mode) {
				case 'start':
					food?.draw();
					snake?.draw();
	
					startBtnRef.current.addEventListener('click', () => {
						setMode('game');
						animationId.current = requestAnimationFrame(game);
					});
					break;
	
				case 'end':
					const endBtn = endMode(false);
	
					endBtn.addEventListener('click', () => {
						reset();
	
						animationId.current = requestAnimationFrame(game);
					});
	
					break;
	
				case 'win':
					const winBtn = endMode(true);
	
					winBtn.addEventListener('click', () => {
						reset();
	
						animationId.current = requestAnimationFrame(game);
					});
	
					break;
	
				case 'game':
					ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	
					food.draw();
					snake.draw();
					snake.move();
			
					if (snake.isCollisedWithFood(food.x, food.y, food.radius)) {
						foodAmount.current++;
						if (foodAmount.current === foodAmountInit) {
							setMode('win');
						} else {
							food.setNewFood();
							snake.increazeSize();
						}
					}
					
					if (snake.isCoillisedWithBorder() || snake.isCollisedWithItself()) {
						setMode('end');
					}
	
					animationId.current = requestAnimationFrame(game);
					break;
			}
	
	
			function reset() {
				setMode('game');
				snake.reset(snakeInit.x, snakeInit.y);
				food.reset(foodInit.x, foodInit.y);
				setFoodAmount(0);
			}
		}
		
		return () => {
			cancelAnimationFrame(animationId.current);
		}
	}, [canvas.current, mode]);


	const renderFood = () => {
		const resFood = [];
		for (let i = 0; i < foodAmountInit; i++) {
			resFood.push(
				<img 
					key={i} 
					src={imgFoodSrc} 
					alt="food" 
					className={"food__img" + (i < foodAmount.current ? ' eaten' : '')} />
			);
		}
		return resFood;
	}
	
	const renderMode = () => {
		switch (mode) {
			case 'start':
				return (
					<StartMode btnRef={startBtnRef} />
				);
		}
	}


	return (
		<div className="game">
			<img src={bgGreenBlurSrc} alt="bg-blur" className="hello__bg hello__bg_green" />
			<img src={bgBlueBlurSrc} alt="bg-blur" className="hello__bg hello__bg_blue" />

			<div className="game__field">
				<canvas className="canvas" ref={canvas} width="240" height="405"></canvas>
				{ renderMode() }
			</div>

			<img src={boltUpLeftSrc} alt="bolt" className="game__bolt game__bolt_up-left"/>
			<img src={boltUpRighttSrc} alt="bolt" className="game__bolt game__bolt_up-right"/>
			<img src={boltDownLeftSrc} alt="bolt" className="game__bolt game__bolt_down-left"/>
			<img src={boltDownRightSrc} alt="bolt" className="game__bolt game__bolt_down-right"/>

			<div className="arrows">
				<Arrows/>
			</div>

			<div className="food">
				<div className="food__text text">
					&#47;&#47; food left
				</div>
				<div className="food__inner">
					{ renderFood() }
				</div>
			</div>
			<Link to='/about' className="game__skip">
				skip
			</Link>
		</div>
	);
}

export default SnakeGame;