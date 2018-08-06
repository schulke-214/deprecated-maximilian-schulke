import React, {Component} from 'react';

class Sticky extends Component {
    constructor( props ) {
        super( props );

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        addEventListener('resize', this.handleResize );
    }

    componentWillUnmount() {
        removeEventListener('resize', this.handleResize );
    }

    handleResize() {
        console.log("calculating new pos")
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Sticky;