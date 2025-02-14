import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Test = () => {
    return (
      <div className='test'> 
        <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5}>
          <p className={''}>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }}>
          <div className={''}>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5}>
          <div className={''}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5}>
          <div className={''}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>

      </div>
    );
}

export default Test;