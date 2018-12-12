import React from 'react';
import css from 'styled-jsx/css';

import Hover from '../../../common/hover/hover';
import { newTab } from '../../../../utility/windowLocation';

// STYLE IMPORTS
import commonStyles from '../../../../styles/components/metaData/metaData-common';
import desktopStyles from '../../../../styles/components/metaData/metaData-desktop';
import tabletStyles from '../../../../styles/components/metaData/metaData-tablet';
import mobileStyles from '../../../../styles/components/metaData/metaData-mobile';


export default props => {
    let dynamicStyles;

    if ( this.props.isTablet )
        dynamicStyles = tabletStyles;

    else if ( this.props.isMobile )
        dynamicStyles = mobileStyles;
    
    else
        dynamicStyles = dekstopStyles;

    return (
        <React.Fragment>
            <style jsx>{ commonStyles }</style>
            <style jsx>{ dynamicStyles }</style>
            <div id="container" >
                    <div id="wrap" >
                        <ul>
                            <li>
                                <span>category</span>
                                <span>{props.meta.category}</span>                         
                            </li>
                            <li>
                                <span>year</span>
                                <span>{props.meta.year}</span>                         
                            </li>
                            <li>
                                <span>role</span>
                                { props.meta.roles.map( role => (
                                    <span key={role} >{role}</span>
                                )) }                     
                            </li>
                        </ul>
                        <span id="visit-project">
                            <Hover handleClick={ () => newTab(props.meta.projectLink) } cursor={ props.cursor } text='visit project' style={{ fontWeight: 700 }} />
                        </span>
                    </div>
                </div>
        </React.Fragment>
    );
}