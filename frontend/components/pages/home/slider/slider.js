import React, { Component } from 'react';

// JSON IMPORTS
import sizes from '../../../../../static/slider/sizes';

// STYLE IMPORTS
import commonStyles from '../../../../styles/components/slider/slider-common';

// DYNAMICALLY INSERTED STYLESHEET - DEPENDING ON SCREEN SIZE
import mobileStyles from '../../../../styles/components/slider/slider-mobile';
import tabletStyles from '../../../../styles/components/slider/slider-tablet';
import dekstopStyles from '../../../../styles/components/slider/slider-desktop';

class Slider extends Component {
    constructor( props ) {
        super( props );

        this.pixi = {
            stage: null,
            renderer: null,
            container: null,

            displacementSprite: null,
            displacementFilter: null,

            delta_scale: 25,
            delta_offset: 1.5,
            width: 1000,
            height: 1500
        };

        this.canvas = React.createRef();
        this.wrapper = React.createRef();

        this.raf = null;

        // THIS FIXES
        this.addImg = this.addImg.bind(this);
        this.calcSize = this.calcSize.bind(this);
        this.initPixi = this.initPixi.bind(this);
        this.setAlpha = this.setAlpha.bind(this);

        this.animate = this.animate.bind(this);
        this.imageTransition = this.imageTransition.bind(this);

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        this.initPixi();

        for( let i = 1; i <= this.props.length; i++ )
            this.addImg( i );

        this.setAlpha();
        this.handleResize();
        this.animate();

        window.addEventListener('load', this.handleResize);
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.cancelAnimationFrame( this.raf );

        window.removeEventListener('load', this.handleResize);
        window.removeEventListener('resize', this.handleResize);
    }

    initPixi() {
        this.pixi.renderer = PIXI.autoDetectRenderer( this.pixi.width, this.pixi.height, {
            transparent: true,
            view: this.canvas.current,
            legacy: true
        });

        this.pixi.stage = new PIXI.Container();
        this.pixi.stage.interactive = true;

        this.pixi.container = new PIXI.Container();
        this.pixi.stage.addChild( this.pixi.container );

        this.pixi.displacementSprite = PIXI.Sprite.fromImage('static/slider/map.jpg');
        this.pixi.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        this.pixi.displacementFilter = new PIXI.filters.DisplacementFilter( this.pixi.displacementSprite );

        this.pixi.displacementFilter.scale.x = 2;
        this.pixi.displacementFilter.scale.y = 2;

        this.pixi.stage.addChild( this.pixi.displacementSprite );
        this.pixi.container.filters = [ this.pixi.displacementFilter ];
    }

    addImg( num ) {
        let img = PIXI.Sprite.fromImage(`static/slider/${num}-min.jpg`);
        let imgSize = this.calcSize( sizes[ num - 1 ], 1.25 );

        img.width = imgSize.width;
        img.height = imgSize.height;
        img.x = imgSize.x;
        img.y = imgSize.y;

        img.zIndex = num;

        if( num !== this.props.current )
            img.alpha = 0;

        this.pixi.container.addChild(img);
    }

    calcSize( size, scale = 1 ) {
        let widthProportion = ( size.height / size.width );
        let heightProportion = ( size.width / size.height );

        // CALC THE SIZES IN WHICH THEY WOULD FIT IN
        let widthFactor = ( this.pixi.width / size.width  );
        let heightFactor = ( this.pixi.height / size.height );

        let width, height, offsetX, offsetY;

        if ( widthFactor > heightFactor ) {
            // CALC THE SMALLER SIDE TO FIT & THEN SCALE UP THE OTHER SITE PROPORTIONAL
            width = size.width * widthFactor;
            height = width * widthProportion;
        }

        else {
            // CALC THE SMALLER SIDE TO FIT & THEN SCALE UP THE OTHER SITE PROPORTIONAL
            height = size.height * heightFactor;
            width = height * heightProportion;
        }

        height *= scale;
        width *= scale;

        offsetX = ( this.pixi.width - width ) / 2;
        offsetY = (  this.pixi.height - height ) / 2;

        return {
            width: Math.floor( width ),
            height: Math.floor( height ),
            x: Math.floor( offsetX ),
            y: Math.floor( offsetY )
        }
    }

    animate() {
        this.raf = requestAnimationFrame( this.animate );

        this.pixi.displacementFilter.scale.x = this.pixi.delta_scale;
        this.pixi.displacementFilter.scale.y = this.pixi.delta_scale;
        this.pixi.displacementSprite.x += this.pixi.delta_offset;
        this.pixi.displacementSprite.y += this.pixi.delta_offset;

        this.pixi.stage.filters = [ this.pixi.displacementFilter ];
        this.pixi.renderer.render( this.pixi.stage );
    }

    imageTransition( el, alpha, callback ) {
        TweenLite.to( this.pixi, 0.5, { delta_offset: 5, ease: Power2.easeIn });
        TweenLite.to( this.pixi, 0.5, { delta_offset: 1.5,  ease: Power2.easeOut,  delay: 0.5 });

        TweenLite.to( el, 1, { alpha, ease: Power2.easeInOut, onComplete: callback });
    }

    setAlpha() {
        for(let i = 0; i < this.props.current - 1; i++ )
            this.pixi.container.children[i].alpha = 1;
    }

    next( callback ) {
        this.props.updateCurrent('+', () => {
            // RUNS WHEN STATE IS UPDATED
            if( this.props.current === 1 )
                for( let i = 2; i <= this.pixi.container.children.length; i++ )
                    this.imageTransition(this.pixi.container.children[i -1], 0, callback);
            else
                this.imageTransition(this.pixi.container.children[ this.props.current - 1 ], 1, callback);
        });
    }

    prev( callback ) {
        this.props.updateCurrent('-', () => {
            // RUNS WHEN STATE IS UPDATED
            if( this.props.current === this.props.length )
                for( let i = 1; i <= this.pixi.container.children.length; i++ )
                    this.imageTransition(this.pixi.container.children[i -1], 1, callback);
            else
                this.imageTransition(this.pixi.container.children[ this.props.current ], 0, callback);
        });
    }

    handleResize() {
        let { width, height } = this.pixi;
        let rect = this.wrapper.current.getBoundingClientRect();
        let factor = 1;

        // SET THE FACTOR BY THE VALUE WHICH IS SMALLER
        if (rect.width <= rect.height)
            factor = rect.width / width;

        else if (rect.height <= rect.width)
            factor = rect.height / height;

        // USE THE FACTOR TO CALC A FITTING POSITION
        if ( this.pixi.width * factor <= rect.width && width >= height )
            factor = rect.width / width;

        if ( this.pixi.height * factor <= rect.height && width >= height )
            factor = rect.height / height;

        if ( this.pixi.height * factor <= rect.height && height >= width )
            factor = rect.height / height;

        if ( this.pixi.width * factor <= rect.width && height >= width )
            factor = rect.width / width;

        TweenLite.set( this.canvas.current, {
            scale: factor,
            left: ( rect.width - this.pixi.width ) / 2,
            top: ( rect.height - this.pixi.height ) / 2
        });
    }

    render() {
        let dynamicStyles;

        if ( this.props.isSmall )
            dynamicStyles = tabletStyles;

        else if ( this.props.isPhone )
            dynamicStyles = mobileStyles;
        
        else
            dynamicStyles = dekstopStyles;

        return (
            <React.Fragment>
                <style jsx>{ commonStyles }</style>
                <style jsx>{ dynamicStyles }</style>

                <div ref={ this.wrapper } >
                    <canvas ref={ this.canvas } />
                </div>
            </React.Fragment>
        )
    }
}

export default Slider;