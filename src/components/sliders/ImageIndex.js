import React, { useState } from "react";
import './ImageIndex.css';
import ImageResizer from '../ImageResizer'

const ImageIndex = ({ images }) => {
  const [number, setNumber] = useState(0);

  const handleImageLeft = () => {
    console.log("handleImageLeft");

    number === 0 ?
      setNumber(images.length - 1) :
      setNumber(number - 1)

  }

  const handleImageRight = () => {
    console.log("handleImageRight");

    number === images.length - 1 ?
      setNumber(0) :
      setNumber(number + 1)

  }

  const handleImageTouch = (e, i) => {
    console.log('handleImageTouch index:', i);

    let index = i;
    setNumber(index);

  }

  React.useEffect(() => {
  }, [number])

  return (
    <div className="ImageIndex">
      <div id="MainImage" className="MainImage">
        <button
          className="buttonLeft"
          type="button"
          onClick={handleImageLeft}
        >
        </button>
        <div className="viewer"
          style={{
            transform: `translateX(${(number) * -125}%)`,
            transition: `all 0.2s ease-out`,
            transitionDuration: `0.5s`,
          }}
        >
          {images.map((image, i) => {
            return (
              <ImageResizer
                key={i}
                className="center"
                index={i}
                image={image}
              />
            )
          })}
        </div>
        <button
          className="buttonRight"
          type="button"
          onClick={handleImageRight}
        >
        </button>
      </div>
      {/* <div className="thumbnails">
        <div>
          {images.map((image, i) => {
            return (
              <li key={i}>
                <img
                  type="url"
                  src={image}
                  alt=""
                  onClick={e => handleImageTouch(e, i)}
                />
              </li>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};
export default ImageIndex;
