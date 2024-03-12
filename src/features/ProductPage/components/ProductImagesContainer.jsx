import { useState } from "react";

import '../styles/ProductImagesContainer.css'
import 'material-symbols'

export default function ProductImagesContainer({imagesList}) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectedImageUrl = imagesList[selectedIndex];

    function thumbnailClickHandler(index) {        
        setSelectedIndex(index);
    }
    function nextClickHandler() {
        setSelectedIndex( index => {
            if (index == imagesList.length -1) {
                return 0;
            }
            else {
                return index + 1;
            }
        })
    }
    function previousClickHandler() {
        setSelectedIndex( index => {
            if (index == 0) {
                return imagesList.length - 1;
            }
            else {
                return index - 1;
            }
        })
    }

    return (
        <div 
            style={ {backgroundImage: `url(${selectedImageUrl})`} }
            className="product-images-container">

            <div className="image-navigation-buttons-container">
                <button 
                    onClick={previousClickHandler}
                    className="image-navigation-button material-symbols-outlined">
                        navigate_before
                </button>

                <button 
                    onClick={nextClickHandler}
                    className="image-navigation-button material-symbols-outlined">
                        navigate_next
                </button>
            </div>            
            
            <div className="image-selectors-container">
                {
                    imagesList.map((image, index) => {

                        return (
                            <div
                                key={index}
                                onClick={()=>{
                                    thumbnailClickHandler(index)
                                }}
                                className={"selector-thumbnail-container" + 
                                    ((index == selectedIndex) ? ' selected' : '')}>

                                    <img src={image}/>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}