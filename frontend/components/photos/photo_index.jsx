import React from 'react';

const PhotosIndex = ({ imageUrls }) => {
  return (
    <div className="photo-index">
      { imageUrls.map(url =>
        <div className="photo-index-image container">
          <img src={url} alt="photo-index-item"/>
        </div>
        )}
    </div>
  )
}

export default PhotosIndex;