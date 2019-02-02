import React, { PureComponent } from 'react';

import Hover from '../../../common/hover/hover';
import { newTab } from '../../../../utility/windowLocation';

// STYLE IMPORTS
import commonStyles from '../../../../styles/components/metaData/metaData-common';
import desktopStyles from '../../../../styles/components/metaData/metaData-desktop';
import tabletStyles from '../../../../styles/components/metaData/metaData-tablet';
import mobileStyles from '../../../../styles/components/metaData/metaData-mobile';

class MetaData extends PureComponent {
    render() {
        console.log("rendered")

        let dynamicStyles;

        if ( this.props.isTablet )
            dynamicStyles = tabletStyles;
    
        else if ( this.props.isMobile )
            dynamicStyles = mobileStyles;
        
        else
            dynamicStyles = desktopStyles;

        return (
            <React.Fragment>
            <style jsx>{ commonStyles }</style>
            <style jsx>{ dynamicStyles }</style>
            <div id="container" className="unclickable" >
                    <div id="wrap" >
                        <ul>
                            <li>
                                <span>category</span>
                                <span>{this.props.meta.category}</span>                         
                            </li>
                            <li>
                                <span>year</span>
                                <span>{this.props.meta.year}</span>                         
                            </li>
                            <li>
                                <span>role</span>
                                { this.props.meta.roles.map( role => (
                                    <span key={role} >{role}</span>
                                )) }                     
                            </li>
                        </ul>
                        <span id="visit-project">
                            <Hover handleClick={ () => newTab(this.props.meta.projectLink) } cursor={ this.props.cursor } text='visit project' style={{ fontWeight: 700 }} />
                        </span>
                    </div>
                </div>
        </React.Fragment>
        )
    }
}

export default MetaData;