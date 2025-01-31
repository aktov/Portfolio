import React, { useEffect } from "react";
import aos from "aos"; // Make sure to import AOS
import LazyLoad from 'react-lazyload';

const PageImage = (props) => {
  // Trigger AOS refresh once the image has loaded
  const handleImageLoad = () => {
    aos.refresh(); // Reinitialize AOS when the image is loaded
  };

  useEffect(() => {
    // Initialize AOS once when the component mounts
    aos.init();
  }, []);

  return (
    <div className='imageHolder' style={props.style || null}>
      {/* <LazyLoad 
        height={200} 
        offset={100}
      > */}
        <img 
          src={props.src} 
          alt='' 
          draggable='false'           
          data-aos='fade-up' 
          data-aos-offset='50' 
          data-aos-easing='ease-out-quad'
          data-aos-duration='400'
          data-aos-once={true}
          loading='lazy'
          onLoad={handleImageLoad} // Trigger AOS refresh on load
        /> 
      {/* </LazyLoad> */}
    </div>
  );
};

export default PageImage;
