import React, { useState, useEffect } from 'react';

interface PhotoViewerProps {
}

const PhotoViewer: React.FC<PhotoViewerProps> = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageFolder = '/me'; 
  const images = ['me1.jpg', 'me2.jpg', 'me3.jpg'];
  const currentImage = images[currentImageIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className='photo-view'>
      <div className='photo'>
        <img src={`${imageFolder}/${currentImage}`} alt={`Image ${currentImageIndex + 1}`} />
      </div>
    </div>
  );
};

export default PhotoViewer;
