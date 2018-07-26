import React, { Component } from 'react';

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
            delta_offset: 1
        };

        this.canvas = React.createRef();
        this.zIndex = 1;

        // THIS FIXES
        this.animate = this.animate.bind(this);

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    componentDidMount() {
        // document.getElementById(this.props.current).style.zIndex = this.zIndex;

        /* NEW CODE */
        this.pixi.renderer = PIXI.autoDetectRenderer( 320, 540, {
            view: this.canvas
        });

        // create the root of the scene
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


        let bg = PIXI.Sprite.fromImage('static/slider/1.jpg');
        bg.width = this.pixi.renderer.width * 1.5;
        bg.height = this.pixi.renderer.height * 1.5;

        bg.x = - this.pixi.renderer.width / 4;
        bg.y = - this.pixi.renderer.height / 4;

        this.pixi.container.addChild(bg);

        // let newImg = PIXI.Sprite.fromImage('./img/example_3.jpg');
        //
        // newImg.width = renderer.width * 1.5;
        // newImg.height = renderer.height * 1.5;
        //
        // newImg.x = - renderer.width / 4;
        // newImg.y = - renderer.height / 4;
        //
        // newImg.alpha = 0;
        // container.addChild(newImg);
        // let opacityInc = 0;



        // renderer.view.onclick = () =>  opacityInc = 0.01  ;

        this.animate();
    }

    animate() {
        this.raf = requestAnimationFrame(this.animate);

        this.pixi.displacementFilter.scale.x = this.pixi.delta_scale;
        this.pixi.displacementFilter.scale.y = this.pixi.delta_scale;
        this.pixi.displacementSprite.x += this.pixi.delta_offset;
        this.pixi.displacementSprite.y += this.pixi.delta_offset;

        /*console.log( opacityInc, newImg.alpha )
        if( newImg.alpha <= 1 )
            newImg.alpha += opacityInc;*/

        this.pixi.stage.filters = [ this.pixi.displacementFilter ];
        this.pixi.renderer.render( this.pixi.stage );
    }

    next( callback ) {
        // this.props.updateCurrent('+');
        //
        // this.zIndex++;
        // document.getElementById(this.props.current).style.zIndex = this.zIndex;
        // TweenLite.from( document.getElementById( this.props.current ) , 0.5, { y: "100%", ease: Power2.easeOut, onComplete: callback} )
    }

    prev( callback ) {
        // this.props.updateCurrent('-');
        //
        // this.zIndex++;
        // document.getElementById(this.props.current).style.zIndex = this.zIndex;
        // TweenLite.from( document.getElementById( this.props.current ) , 0.5, { y: "-100%", ease: Power2.easeOut, onComplete: callback} )
    }

    render() {
        const dynamicStyles = this.props.isMobile ?  mobileStyles : dekstopStyles;

        return (
            <React.Fragment>
                <style jsx>{ commonStyles }</style>
                <style jsx>{ dynamicStyles }</style>

                { this.pixi.view }

                <canvas ref={ instance => this.canvas = instance }></canvas>
            </React.Fragment>
        )
    }
}

export default Slider;