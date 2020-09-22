import React, {useState} from 'react';
import {Choice} from './Choice.js';
import {banner} from '../HomePage/Banner.js';

const bannerImageViewer = () => {
    return(
        <div className="imageViewer">
            {Choice[1]}
        </div>

    );
};

export default bannerImageViewer;
