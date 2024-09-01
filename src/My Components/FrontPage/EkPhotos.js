import React, { useState } from 'react';
import './EkPhotos.css';


const ekphotosimages = [
  {
    src: 'assets/EkPhotos/ek_Carnatic_Music_Music_India.png',
    alt: 'Carnatic Music'
  },
  {
    src: 'assets/EkPhotos/ek_Kuchipudi_Dance_Telangana.png',
    alt: 'Kuchipudi Dance'
  },
  {
    src: 'assets/EkPhotos/ek_Manipuri_Dance_Assam.png',
    alt: 'Manipuri Dance'
  },
  {
    src: 'assets/EkPhotos/ek_Odissi_Dance_Odisha.png',
    alt: 'Odissi Dance'
  },
  {
    src: 'assets/EkPhotos/ek_Bhangra_Dance_India.png',
    alt: 'Bhangra Dance'
  },
  {
    src: 'assets/EkPhotos/ek_Bharatnatyam_Dance_India.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Bhortal_Dance_Assam.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Bihu_Dance_Assam.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Chhau_Dance_Odisha.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Dumhal_Dance_J&K.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Garba_Dance_India.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Ghoomar_Dance_India.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Gotipua_Dance_Odisha.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Hindustani_Music_Music_India.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Kathak_Dance_India.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Kathakali_Dance_India.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Koli_Dance_Dance_Maharashtra.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Kud_Dance_J&K.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Lambadi_Dance_Telangana.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Lavani_Dance_Maharashtra.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Mahari_Dance_Odisha.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Mohiniyattam_Dance_Telangana.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Rauf_Dance_Dance_J&K.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Sambalpuri_Dance_Odisha.png',
    alt: ''
  },
  {
    src: 'assets/EkPhotos/ek_Sattriya_Dance_Asaam.png',
    alt: ''
  }
  
];

export function EkPhotos() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id='EkPhotos' className='EkPhotos_Page'>
      <h1 className='EkPhotos_heading1'>eK PHOTOS</h1>
      <div className='EkPhotos_Media'>
        {ekphotosimages.map(image => (
          <div key={image.src} className='EkPhotos_Media_Items'>
            <img
              src={image.src}
              alt={image.alt}
              className='EkPhotos_Media_Item'
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className='EkPhotos_Modal'>
          <span className='EkPhotos_Modal_Close' onClick={handleCloseModal}>
            ×
          </span>
          <img src={selectedImage.src} alt={selectedImage.alt} className='EkPhotos_Modal_Image' />
        </div>
      )}
    </div>
  );
}
