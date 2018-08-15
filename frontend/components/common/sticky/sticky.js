import React, { PureComponent } from 'react';
import css from 'styled-jsx/css';

const styles = css`
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
`;

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
        addEventListener('DOMContentLoaded', this.handleResize );
        this.trigger.current.addEventListener('mousemove', () => console.log("test"))
    }

    componentWillUnmount() {
        removeEventListener('DOMContentLoaded', this.handleResize );
    }

    handleResize() {
        let rect = this.content.current.getBoundingClientRect();

        TweenLite.set( this.trigger.current, {
            left: - ( 50 - ( rect.width / 2 ) ),
            top: - ( 50 - ( rect.height / 2 ) )
        });
    }

    handleMouseOver() {

    }

    render() {
        return (
            <React.Fragment>
                <style jsx>{styles}</style>

                <div id="container">
                    <span style={{ border: "1px solid orange" }} ref={ this.content }>{ this.props.children }</span>
                    <div id="trigger" ref={ this.trigger } />
                </div>

            </React.Fragment>
        );
    }
}


export default Sticky;