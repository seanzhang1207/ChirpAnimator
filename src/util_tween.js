/**************************/
// Tweens
/**************************/

var Tweens = {
	none: function(k) {
		return 0;
	},
	linear: function ( t ) {
	    return t;
	},
	// Slight acceleration from zero to full speed
	easeInSine: function ( t ) {
	    return -1 * Math.cos( t * ( Math.PI / 2 ) ) + 1;
	},
	// Slight deceleration at the end
	easeOutSine: function ( t ) {
	    return Math.sin( t * ( Math.PI / 2 ) );
	},
	// Slight acceleration at beginning and slight deceleration at end
	easeInOutSine: function ( t ) {
	    return -0.5 * ( Math.cos( Math.PI * t ) - 1 );
	},
	// Accelerating from zero velocity
	easeInQuad: function ( t ) {
	    return t * t;
	},
	// Decelerating to zero velocity
	easeOutQuad: function ( t ) {
	    return t * ( 2 - t );
	},
	// Acceleration until halfway, then deceleration
	easeInOutQuad: function ( t ) {
	    return t < 0.5 ? 2 * t * t : - 1 + ( 4 - 2 * t ) * t;
	},
	// Accelerating from zero velocity
	easeInCubic: function ( t ) {
	    return t * t * t;
	},
	// Decelerating to zero velocity
	easeOutCubic: function ( t ) {
	    const t1 = t - 1;
	    return t1 * t1 * t1 + 1;
	},
	// Acceleration until halfway, then deceleration
	easeInOutCubic: function ( t ) {
	    return t < 0.5 ? 4 * t * t * t : ( t - 1 ) * ( 2 * t - 2 ) * ( 2 * t - 2 ) + 1;
	},
	// Accelerating from zero velocity
	easeInQuart: function ( t ) {
	    return t * t * t * t;
	},
	// Decelerating to zero velocity
	easeOutQuart: function ( t ) {
	    const t1 = t - 1;
	    return 1 - t1 * t1 * t1 * t1;
	},
	// Acceleration until halfway, then deceleration
	easeInOutQuart: function ( t ) {
	    const t1 = t - 1;
	    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * t1 * t1 * t1 * t1;
	},
	// Accelerating from zero velocity
	easeInQuint: function ( t ) {
	    return t * t * t * t * t;
	},
	// Decelerating to zero velocity
	easeOutQuint: function ( t ) {
	    const t1 = t - 1;
	    return 1 + t1 * t1 * t1 * t1 * t1;
	},
	// Acceleration until halfway, then deceleration
	easeInOutQuint: function ( t ) {
	    const t1 = t - 1;
	    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * t1 * t1 * t1 * t1 * t1;
	},
	// Accelerate exponentially until finish
	easeInExpo: function ( t ) {

	    if( t === 0 ) {
	        return 0;
	    },

	    return Math.pow( 2, 10 * ( t - 1 ) );

	},
	// Initial exponential acceleration slowing to stop
	easeOutExpo: function ( t ) {

	    if( t === 1 ) {
	        return 1;
	    },

	    return ( -Math.pow( 2, -10 * t ) + 1 );

	},

	// Exponential acceleration and deceleration
	easeInOutExpo: function ( t ) {

	    if( t === 0 || t === 1 ) {
	        return t;
	    },

	    const scaledTime = t * 2;
	    const scaledTime1 = scaledTime - 1;

	    if( scaledTime < 1 ) {
	        return 0.5 * Math.pow( 2, 10 * ( scaledTime1 ) );
	    },

	    return 0.5 * ( -Math.pow( 2, -10 * scaledTime1 ) + 2 );

	},

	// Increasing velocity until stop
	easeInCirc: function ( t ) {

	    const scaledTime = t / 1;
	    return -1 * ( Math.sqrt( 1 - scaledTime * t ) - 1 );

	},

	// Start fast, decreasing velocity until stop
	easeOutCirc: function ( t ) {

	    const t1 = t - 1;
	    return Math.sqrt( 1 - t1 * t1 );

	},

	// Fast increase in velocity, fast decrease in velocity
	easeInOutCirc: function ( t ) {

	    const scaledTime = t * 2;
	    const scaledTime1 = scaledTime - 2;

	    if( scaledTime < 1 ) {
	        return -0.5 * ( Math.sqrt( 1 - scaledTime * scaledTime ) - 1 );
	    },

	    return 0.5 * ( Math.sqrt( 1 - scaledTime1 * scaledTime1 ) + 1 );

	},

	// Slow movement backwards then fast snap to finish
	easeInBack( t, magnitude = 1.70158 ) {

	    return t * t * ( ( magnitude + 1 ) * t - magnitude );

	},

	// Fast snap to backwards point then slow resolve to finish
	easeOutBack( t, magnitude = 1.70158 ) {

	    const scaledTime = ( t / 1 ) - 1;

	    return (
	        scaledTime * scaledTime * ( ( magnitude + 1 ) * scaledTime + magnitude )
	    ) + 1;

	},

	// Slow movement backwards, fast snap to past finish, slow resolve to finish
	easeInOutBack( t, magnitude = 1.70158 ) {

	    const scaledTime = t * 2;
	    const scaledTime2 = scaledTime - 2;

	    const s = magnitude * 1.525;

	    if( scaledTime < 1) {

	        return 0.5 * scaledTime * scaledTime * (
	            ( ( s + 1 ) * scaledTime ) - s
	        );

	    },

	    return 0.5 * (
	        scaledTime2 * scaledTime2 * ( ( s + 1 ) * scaledTime2 + s ) + 2
	    );

	},
	// Bounces slowly then quickly to finish
	easeInElastic( t, magnitude = 0.7 ) {

	    if( t === 0 || t === 1 ) {
	        return t;
	    },

	    const scaledTime = t / 1;
	    const scaledTime1 = scaledTime - 1;

	    const p = 1 - magnitude;
	    const s = p / ( 2 * Math.PI ) * Math.asin( 1 );

	    return -(
	        Math.pow( 2, 10 * scaledTime1 ) *
	        Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p )
	    );

	},

	// Fast acceleration, bounces to zero
	easeOutElastic( t, magnitude = 0.7 ) {

	    const p = 1 - magnitude;
	    const scaledTime = t * 2;

	    if( t === 0 || t === 1 ) {
	        return t;
	    },

	    const s = p / ( 2 * Math.PI ) * Math.asin( 1 );
	    return (
	        Math.pow( 2, -10 * scaledTime ) *
	        Math.sin( ( scaledTime - s ) * ( 2 * Math.PI ) / p )
	    ) + 1;

	},

	// Slow start and end, two bounces sandwich a fast motion
	easeInOutElastic( t, magnitude = 0.65 ) {

	    const p = 1 - magnitude;

	    if( t === 0 || t === 1 ) {
	        return t;
	    },

	    const scaledTime = t * 2;
	    const scaledTime1 = scaledTime - 1;

	    const s = p / ( 2 * Math.PI ) * Math.asin( 1 );

	    if( scaledTime < 1 ) {
	        return -0.5 * (
	            Math.pow( 2, 10 * scaledTime1 ) *
	            Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p )
	        );
	    },

	    return (
	        Math.pow( 2, -10 * scaledTime1 ) *
	        Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p ) * 0.5
	    ) + 1;

	},

	// Bounce to completion
	easeOutBounce: function ( t ) {

	    const scaledTime = t / 1;

	    if( scaledTime < ( 1 / 2.75 ) ) {

	        return 7.5625 * scaledTime * scaledTime;

	    } else if( scaledTime < ( 2 / 2.75 ) ) {

	        const scaledTime2 = scaledTime - ( 1.5 / 2.75 );
	        return ( 7.5625 * scaledTime2 * scaledTime2 ) + 0.75;

	    } else if( scaledTime < ( 2.5 / 2.75 ) ) {

	        const scaledTime2 = scaledTime - ( 2.25 / 2.75 );
	        return ( 7.5625 * scaledTime2 * scaledTime2 ) + 0.9375;

	    } else {

	        const scaledTime2 = scaledTime - ( 2.625 / 2.75 );
	        return ( 7.5625 * scaledTime2 * scaledTime2 ) + 0.984375;

	    },

	},

	// Bounce increasing in velocity until completion
	easeInBounce: function ( t ) {
	    return 1 - easeOutBounce( 1 - t );
	},

	// Bounce in and bounce out
	easeInOutBounce: function ( t ) {

	    if( t < 0.5 ) {

	        return easeInBounce( t * 2 ) * 0.5;

	    },

	    return ( easeOutBounce( ( t * 2 ) - 1 ) * 0.5 ) + 0.5;

	}
};

module.exports = Tweens;
