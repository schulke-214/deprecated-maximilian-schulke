import React, { PureComponent } from 'react';

class Sticky extends PureComponent {
    constructor( props ) {
        super( props );

        this.container = React.createRef();
        this.content = React.createRef();
        this.trigger = React.createRef();

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        this.handleResize();

        console.log("mounted sticky.js");
        // this.handleResize();
        // addEventListener('DOMContentLoaded', this.handleResize );
        // this.trigger.current.addEventListener('mousemove', () => console.log("test"))
    }

    componentDidUpdate() {
        console.log("updated")
        //<Link href="/project">
        //                                     <a>Link</a>
        //                                 </Link>
    }

    componentWillUnmount() {
        removeEventListener('resize', this.handleResize );
    }

    handleResize() {
        let rect = document.getElementById("test").getBoundingClientRect();

        console.log( rect );

        /*
        TweenLite.set( this.trigger.current, {
            left: - ( 50 - ( rect.width / 2 ) ),
            top: - ( 50 - ( rect.height / 2 ) )
        }); */
    }

    render() {
        return (
            <span id="test">text</span>
        );
    }
}

/*
<div id="container" style={{ position: "relative"}}>
                <span style={{ border: "1px solid orange" }} ref={ this.content }>link</span>
                <div id="trigger" style={{ border: "1px solid red", position: "absolute", width: 100, height: 100 }} ref={ this.trigger } ></div>
            </div>

    <style jsx>{`
                    #container {
                        position: relative;
                    }

                    #trigger {
                        position: absolute;
                        width: 100px;
                        height: 100px;
                        border: 1px solid red;
                        border-radius: 100%;
                    };

                    span {
                        display: block;
                        height: min-content;
                        width: min-content;
                    }
                `}</style>
            */

export default Sticky;