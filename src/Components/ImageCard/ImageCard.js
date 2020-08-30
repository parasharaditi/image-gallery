import React from 'react';

import './style.css';

const ImageCard =(props) => {
    return(
<img alt="Added picture" className="imagecard" src={props.imgUrl} />

    )


}
export default ImageCard;