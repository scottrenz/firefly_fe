import React from 'react';
import ColorSlider from './ColorSlider';

const ColorSliderTest = () => {
    return (
        <div>
            <div>
                <ColorSlider value={160} updateColor={() => {}} />
            </div>
        </div>
    )
}

export default ColorSliderTest
