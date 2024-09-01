import React from 'react';
import "./ProductDetials.css";
import Partner_Navbar from '../Partner_Navbar';
import StarRating from '../Common/star';
import { useState } from 'react';


export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [selectedImage, setSelectedImage] = useState('assets/ProductStore/image1.png');

  const handleThumbnailClick = (newImage) => {
    setSelectedImage(newImage);
  };

  const reviews = [
    {
      id: 1,
      name: 'Customer Name 1',
      role: 'Quality Analyst',
      rating: 4, // Assuming you have a rating for each review
      comment: 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      profileImage: 'assets/ProductStore/Ellipse35.jpg',
    },
    {
      id: 2,
      name: 'Customer Name 2',
      role: 'Quality Analyst',
      rating: 4, // Assuming you have a rating for each review
      comment: 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      profileImage: 'assets/ProductStore/Ellipse35.jpg',
    },
    // Add more review objects as needed
  ];

  const relatedproducts = [
    {
      src: "assets/ProductStore/Rectangle22182.png",
    },
    {
      src: "assets/ProductStore/Rectangle22182.png",
    }
    ,
    {
      src: "assets/ProductStore/Rectangle22182.png",
    }
  ]

  return (
    <>
      <Partner_Navbar />
      <div className='ProductDetails_Page'>
        <div className='ProductDetails_DetailsandImages'>
          <div className='ProductDetails_Details'>
            <div className='ProductDetails_Details_heading'>
              <h2>Sitar Brown </h2>
              <StarRating />
            </div>
            <div className='ProductDetails_Details_info'>
              <p>The sitar is a traditional plucked-string instrument originating from the Indian subcontinent. It features a distinctive long neck, a resonating gourd body, and a varying number of strings.
              </p>

              <p>
                The sitar's unique sound is characterized by its rich, resonant tones and complex melodies. It has been a prominent instrument in classical Indian music for centuries, renowned for its ability to evoke a wide range of emotions and moods.
              </p>
            </div>
            <div className='ProductDetails_Details_info_main'>
              <div className=''>
                <p>Price :</p>
                <p>Availability :</p>
                <p>Quantity :</p>
              </div>
              <div className=''>
                <p>₹ 4,999.00</p>
                <p style={{ color: "#25D366" }}>In - Stock</p>
                <div className="ProductDetails_Details_info_main_quantity">
                  <button onClick={handleDecrement}>-</button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    disabled />
                  <button onClick={handleIncrement}>+</button>
                </div>
              </div>
            </div>
            <button className='buynowbtn'>Buy now</button>
          </div>
          <div className='ProductDetails_Images'>
            <img src={selectedImage}></img>
            <div className='ProductDetails_Images_otherimages'>
              <img src='assets/ProductStore/image1.png' onClick={() => handleThumbnailClick('assets/ProductStore/image1.png')}></img>
              <img src='assets/ProductStore/image1.png' onClick={() => handleThumbnailClick('assets/ProductStore/image1.png')}></img>
              <img src='assets/ProductStore/image1.png' onClick={() => handleThumbnailClick('assets/ProductStore/image1.png')}></img>
              <img src='assets/ProductStore/image1.png' onClick={() => handleThumbnailClick('assets/ProductStore/image1.png')}></img>
              <img src='assets/ProductStore/image1.png' onClick={() => handleThumbnailClick('assets/ProductStore/image1.png')}></img>
            </div>
          </div>
        </div>
        <div className='ProductDetails_bottom'>
          <div className='ProductDetails_bottom_left'>
            <div className='ProductDetails_moreinfo'>
              <h3>More Information</h3>
              <div className='ProductDetails_moreinfo_Main'>
                <div className='ProductDetails_moreinfo_Main_input'>
                  <label>Category :</label>
                  <input type='text' value="Musical Instruments" disabled></input>
                </div>
                <div className='ProductDetails_moreinfo_Main_input'>
                  <label>Brand :</label>
                  <input type='text' value="Random Brand" disabled></input>
                </div>
                <div className='ProductDetails_moreinfo_Main_input'>
                  <label>Last Still :</label>
                  <input type='text' value="10 Months" disabled></input>
                </div>
                <div className='ProductDetails_moreinfo_Main_input'>
                  <label>Available Stock :</label>
                  <input type='text' value="2" disabled></input>
                </div>
                <div className='ProductDetails_moreinfo_Main_input'>
                  <label>Posted By :</label>
                  <input type='text' value="Mano" disabled></input>
                </div>
                <div className='ProductDetails_moreinfo_Main_input'>
                  <label>Contact Number :</label>
                  <input type='text' value="12345678901" disabled></input>
                </div>
                <div className='ProductDetails_moreinfo_Main_input'>
                  <label>Email :</label>
                  <input type='text' value="randommail@gmail.com" disabled></input>
                </div>
              </div>
            </div>
            <div className='ProductDetails_reviews'>
              <div className='ProductDetails_reviews_heading'>
                <h3>Reviews</h3>
                <a>
                  <p>Write a review </p>
                </a>
              </div>
              {reviews.map((review) => (
                <div key={review.id} className='ProductDetails_onereview'>
                  <div className='ProductDetails_onereview_profile'>
                    <img src={review.profileImage} alt={`Profile of ${review.name}`} />
                    <div>
                      <h4>{review.name}</h4>
                      <h6>{review.role}</h6>
                    </div>
                  </div>
                  <div>
                    <StarRating rating={review.rating} />
                  </div>
                  <div>
                    <p>{review.comment}</p>
                  </div>
                </div>
              ))}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#AD2F3B" />
                  <path d="M27 17L20 24L13 17" stroke="white" stroke-width="2" />
                </svg>
              </button>
            </div>
          </div>
          <div className='ProductDetails_relatedproducts'>
            <h1>Related Products</h1>
            <div className='ProductDetails_relatedproducts_Main'>
              {relatedproducts.map((product) => (
                <img src={product.src}></img>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
