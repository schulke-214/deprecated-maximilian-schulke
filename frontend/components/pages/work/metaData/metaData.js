import React from 'react';
import css from 'styled-jsx/css';

import Hover from '../../../common/hover/hover';
import { newTab } from '../../../../utility/windowLocation';

const styles = css`
    #container {
        width: 100%;
        height: 50vh;
        display: block;
        position: relative;
    }

    #wrap {
        position: relative;
        left: 25vw;
        top: 25vh;
    }

    #visit-project {
        position: absolute;
        top: 0;
        left: 25vw;
        font-weight: 700;
    }

    ul {
        display: flex;
        width: 25vw;
        list-style: none;
    }

    li {
        margin-right: 50px;
    }

    span:first-child {
        font-weight: 700;
    }
`;

export default props => {
    return (
        <React.Fragment>
            <style jsx>{ styles }</style>
            <div id="container" >
                <div id="wrap" >
                    <ul>
                        <li>
                            <span>category</span>                            
                        </li>
                        <li>
                            <span>year</span>                            
                        </li>
                        <li>
                            <span>role</span>                        
                        </li>
                    </ul>
                    <Hover handleClick={ () => newTab(props.meta.projectLink) } cursor={this.props.cursor} text='visit project' />
                </div>
            </div>
        </React.Fragment>
    );
}