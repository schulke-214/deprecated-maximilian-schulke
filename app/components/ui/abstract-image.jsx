import 'app/styles/components/abstract-image.scss';

class AbstractImage extends React.Component {
	canvas = React.createRef();
	wrapper = React.createRef();

	pixi = null;

	displacement = {
		sprite: null,
		filter: null
	};

	delta = {
		scale: 100,
		offset: 2.5
		// scale: 50, // 20,
		// offset: 2 // 1
	};

	raf = null;

	async componentDidMount() {
		await this.init();
		await this.load(this.props.src);

		this.animate();
		this.resize();

		addEventListener('load', this.resize, { passive: true });
		addEventListener('resize', this.resize, { passive: true });
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.raf);
		removeEventListener('load', this.resize, { passive: true });
		removeEventListener('resize', this.resize, { passive: true });
	}

	init = async () => {
		this.pixi = new PIXI.Application({
			width: this.props.width,
			height: this.props.height,
			view: this.canvas.current,
			transparent: true,
			legacy: true
		});

		this.pixi.renderer.view.style['touch-action'] = 'auto';

		this.displacement.sprite = new PIXI.Sprite.fromImage('static/map.jpg');
		this.displacement.sprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
		this.displacement.filter = new PIXI.filters.DisplacementFilter(this.displacement.sprite);

		this.pixi.stage.addChild(this.displacement.sprite);
		this.pixi.stage.filters = [this.displacement.filter];
	};

	load = async src => {
		this.pixi.loader.add('picture', src).load((_, resources) => {
			const texture = resources['picture'].texture;
			const sprite = new PIXI.Sprite(texture);

			const size = this.calcSize(
				{
					width: sprite.texture.baseTexture.realWidth,
					height: sprite.texture.baseTexture.realHeight
				},
				this.props.factor
			);

			sprite.width = size.width;
			sprite.height = size.height;
			sprite.x = size.x;
			sprite.y = size.y;

			this.pixi.stage.addChild(sprite);
		});
	};

	animate = () => {
		this.raf = requestAnimationFrame(this.animate);

		this.displacement.filter.scale.x = this.delta.scale;
		this.displacement.filter.scale.y = this.delta.scale;
		this.displacement.sprite.x += this.delta.offset;
		this.displacement.sprite.y += this.delta.offset;

		// this.pixi.stage.filters = [this.displacement.filter];
		// this.pixi.renderer.render(this.pixi.stage);
	};

	calcSize = (size, scale = 1) => {
		const proportion = {
			width: size.height / size.width,
			height: size.width / size.height
		};

		// CALC THE SIZES IN WHICH THEY WOULD FIT IN
		const factor = {
			width: this.props.width / size.width,
			height: this.props.height / size.height
		};

		let width, height, offsetX, offsetY;

		// CALC THE SMALLER SIDE TO FIT & THEN SCALE UP THE OTHER SITE PROPORTIONAL
		if (factor.width > factor.height) {
			width = size.width * factor.width;
			height = width * proportion.width;
		}

		// CALC THE SMALLER SIDE TO FIT & THEN SCALE UP THE OTHER SITE PROPORTIONAL
		else {
			height = size.height * factor.height;
			width = height * proportion.height;
		}

		height *= scale;
		width *= scale;

		offsetX = (this.props.width - width) / 2;
		offsetY = (this.props.height - height) / 2;

		return {
			width: Math.floor(width),
			height: Math.floor(height),
			x: Math.floor(offsetX),
			y: Math.floor(offsetY)
		};
	};

	resize = () => {
		let rect = this.wrapper.current.getBoundingClientRect();
		let factor = 1;

		// SET THE FACTOR BY THE VALUE WHICH IS SMALLER
		if (rect.width <= rect.height) factor = rect.width / this.props.width;
		else if (rect.height <= rect.width) factor = rect.height / this.props.height;

		// USE THE FACTOR TO CALC A FITTING POSITION
		if (this.props.width * factor <= rect.width && this.props.width >= this.props.height)
			factor = rect.width / this.props.width;

		if (this.props.height * factor <= rect.height && this.props.width >= this.props.height)
			factor = rect.height / this.props.height;

		if (this.props.height * factor <= rect.height && this.props.height >= this.props.width)
			factor = rect.height / this.props.height;

		if (this.props.width * factor <= rect.width && this.props.height >= this.props.width)
			factor = rect.width / this.props.width;

		TweenLite.set(this.canvas.current, {
			scale: factor,
			left: (rect.width - this.props.width) / 2,
			top: (rect.height - this.props.height) / 2
		});
	};

	render() {
		return (
			<div ref={this.wrapper} className='abstract-image ev__none'>
				<canvas ref={this.canvas} />
			</div>
		);
	}
}

export default AbstractImage;
