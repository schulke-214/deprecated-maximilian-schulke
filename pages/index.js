import React from 'react';
import Link from 'next/link';

const home = props => {
    console.log(props)
    return (
        <Link href="work/zwanzig-grad">
            <a>my work</a>
        </Link>
    )
}

export default home;