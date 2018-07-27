import React, { Component } from 'react';

// JSON IMPORTS
import sizes from '../../../../../static/slider/sizes';

// STYLE IMPORTS
import commonStyles from '../../../../styles/components/slider/slider-common';

// DYNAMICALLY INSERTED STYLESHEET - DEPENDING ON SCREEN SIZE
import mobileStyles from '../../../../styles/components/slider/slider-mobile';
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

            delta_scale: 10,
            delta_offset: 1,
            width: 1000,
            height: 1500
        };

        this.canvas = React.createRef();
        this.wrapper = React.createRef();

        this.raf = null;

        // THIS FIXES
        this.animate = this.animate.bind(this);

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
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

        let bg = PIXI.Sprite.fromImage('static/slider/3-min.jpg');
        let imgSize = this.calcSize( sizes[2], 1.25 );

        bg.width = imgSize.width;
        bg.height = imgSize.height;

        bg.x = imgSize.x;
        bg.y = imgSize.y;


        console.log("bug found: component mounts twice");


        // bg.width = sizes[0].width;
        // bg.height = sizes[0].height;

        // bg.x = - this.pixi.renderer.width / 4;
        // bg.y = - this.pixi.renderer.height / 4;

        this.pixi.container.addChild(bg);

        this.animate();
        this.handleResize();

        window.addEventListener('load', this.handleResize);
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.cancelAnimationFrame( this.raf );

        window.removeEventListener('load', this.handleResize);
        window.removeEventListener('resize', this.handleResize);
    }

    calcSize( size, scale = 1 ) {
        let factor = 1;

        let widthProportion = ( size.height / size.width );
        let heightPropotion = ( size.width / size.height );

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
            width = height * heightPropotion;
        }

        height *= scale;
        width *= scale;

        offsetX = ( this.pixi.width - width ) / 2;
        offsetY = (  this.pixi.height - height ) / 2;

        console.log( width, height, offsetX, offsetY );

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

    next( callback ) {
        // this.props.updateCurrent('+');

        // this.zIndex++;
        // document.getElementById(this.props.current).style.zIndex = this.zIndex;
        // TweenLite.from( document.getElementById( this.props.current ) , 0.5, { y: "100%", ease: Power2.easeOut, onComplete: callback} )
    }

    prev( callback ) {
        // this.props.updateCurrent('-');

        // this.zIndex++;
        // document.getElementById(this.props.current).style.zIndex = this.zIndex;
        // TweenLite.from( document.getElementById( this.props.current ) , 0.5, { y: "-100%", ease: Power2.easeOut, onComplete: callback} )
    }

    handleResize() {
        let { width, height } = this.pixi;
        let rect = this.wrapper.current.getBoundingClientRect();
        let factor = 1;

        // SET THE FACTOR BY THE VALUE WHICH IS SMALLER
        if( rect.width < rect.height )
            factor = rect.width / width;

        else if ( rect.height < rect.width )
            factor = rect.height / height;

        // USE THE FACTOR TO CALC A FITTING POSITION
        if ( this.pixi.height * factor < rect.height )
            factor = rect.height / height;

        else if ( this.pixi.width * factor < rect.width )
            factor = rect.width / width;

        TweenLite.set( this.canvas.current, {
            scale: factor,
            left: ( rect.width - this.pixi.width ) / 2,
            top: ( rect.height - this.pixi.height ) / 2
        });
    }

    render() {
        const dynamicStyles = this.props.isMobile ?  mobileStyles : dekstopStyles;

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