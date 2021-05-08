import React, { useState, useEffect } from 'react'

const ImageResizer = ({ index, image }) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const getWH = () => {
    return (
      [
        width,
        height,
      ]
    )
  }

  useEffect(() => {
    if (!width || !height) {
      var obj = document.querySelector(".MainImage");
      const w = obj.getBoundingClientRect().width;
      const h = obj.getBoundingClientRect().height;
      setWidth(w);
      setHeight(h);
    }
  }, [width, height])

  return (
    <img
      style={{
        position: `absolute`,
        width: `${getWH()[0]}px`,
        height: `${getWH()[1]}px`,
        transform: `translateX(${index * 125}%)`,
        background: `#000`,
        objectFit: `contain`,
        borderStyle: `none`,
        WebkitTransition: `0.3s`
      }}
      src={image}
      alt=''
    />
  )
}
export default ImageResizer;
