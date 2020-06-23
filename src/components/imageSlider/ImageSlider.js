import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import './ImageSlider.css'
class ImageSlider extends React.Component {
    render() {
        const images = [
            { url: process.env.PUBLIC_URL+"/images/1.png" },
            { url: process.env.PUBLIC_URL+"/images/2.png" },
            { url: process.env.PUBLIC_URL+"/images/3.png" },
        ];

        return (
            <div id="image-slider">
                <SimpleImageSlider
                    width={300}
                    height={200}
                    images={images}
                    // style={{justifyContent:"center"}}
                    
                />
            </div>
        );
    }
}


export default ImageSlider