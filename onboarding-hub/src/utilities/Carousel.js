import React, { useState } from 'react';
import { CarouselDiv } from '../styles/styled-components/styles';

const Carousel = (props) => {
  const [images, setImages] = useState(props.images || []);


  return (
    <CarouselDiv className='carousel' style={ props.styles ? props.styles : {} }>
      {images.map(i => {
        return <img className='carousel-img' src={i} alt='Carousel' />;
      })}
    </CarouselDiv>
  );
};

export default Carousel;
