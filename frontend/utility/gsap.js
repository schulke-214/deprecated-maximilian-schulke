import {
    TweenLite,
    TimelineLite,
    CSSPlugin,
    BezierPlugin,
    TextPlugin,
    Ease,
} from 'gsap';

import '../../static/CustomEase';
CustomEase.create( "basic", "M0,0 C0.7,0 0.3,1 1,1" );