import React, { useState } from 'react';
import './EkPrint.css';

const ekPrintimages = [
    {
        src:"assets/EkPrint/EkPrint_img_1.png",
        caption:"eK Brochure"
    }
];

export function EkPrint() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleDownload = (image) => {
    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'image.png'; // you can set the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='EkPrint' className='EkPrint_Page'>
      <h1 className='EkPrint_heading1'>eK Print</h1>
      <div className='EkPrint_Media'>
        {ekPrintimages.map(image => (
          <div key={image.src} className='EkPrint_Media_Items'>
            <img
              src={image.src}
              alt={image.alt}
              className='EkPrint_Media_Item'
              onClick={() => handleImageClick(image)}
            />
            <h3>{image.caption}</h3>
            <button onClick={() => handleDownload(image)}>Download</button>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className='EkPrint_Modal'>
          <span className='EkPrint_Modal_Close' onClick={handleCloseModal}>
            ×
          </span>
          <img src={selectedImage.src} alt={selectedImage.alt} className='EkPrint_Modal_Image' />
        </div>
      )}
    </div>
  );
}
