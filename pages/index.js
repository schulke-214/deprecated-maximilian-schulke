import React from 'react';
import Link from 'next/link';

const Home = props => {
    let styles = (
        <style jsx>{`
            a { 
                border: 2px solid red; 
            }
        `}</style>
    );

    return (
        <React.Fragment>
            <Link href="project/zwanzig-grad">
                <a>my work</a>
            </Link>
            { styles }
        </React.Fragment>
    )
}

export default Home;