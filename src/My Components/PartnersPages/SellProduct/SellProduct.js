import React from 'react';
import "./SellProduct.css";
import Partner_Navbar from "../Partner_Navbar";

export default function SellProduct() {
    return (
        <>
            <Partner_Navbar />
            <div className='SellProduct_Page'>
                <div className='SellProduct_Top'>
                    <div className='SellProduct_Content'>
                        <p>Start Selling Your Product</p>
                    </div>
                </div>
                <div className='SellProduct_Page_form'>
                    <form>
                        <h1>Product Details</h1>
                        <div className='SellProduct_Select'>
                            <div className='SellProduct_form_inputfield'>
                                <label>Choose Category*</label>
                                <select>
                                    <option selected hidden>Select Category </option>
                                </select>
                            </div>
                            <div className='SellProduct_form_inputfield'>
                                <label>Product Name*</label>
                                <select>
                                    <option selected hidden>Select the product</option>
                                </select>
                            </div>
                            <div className='SellProduct_form_inputfield'>
                                <label>Brand*</label>
                                <select>
                                    <option selected hidden>Select brand</option>
                                </select>
                            </div>
                            <div className='SellProduct_form_inputfield'>
                                <label>Last Still*</label>
                                <select>
                                    <option selected hidden>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='SellProduct_form_inputfield'>
                            <label>About the Product*</label>
                            <textarea></textarea>
                        </div>
                        <div className='SellProduct_Select'>
                            <div className='SellProduct_form_inputfield'>
                                <label>Set Cost of the Product*</label>
                                <input type='text' placeholder='Enter the cost of the product'></input>
                            </div>
                            <div className='SellProduct_form_inputfield'>
                                <label>Quantity*</label>
                                <input type='text' placeholder='Enter product quantity'></input>
                            </div>
                        </div>
                        <h1>Images of product</h1>
                        <div className='SellProduct_ImgUpload'>
                            <div className='SellProduct_form_inputfield_images'>
                                <label htmlFor='inputfile'><img src='assets/AboutPartner/images-regular-24.png'></img> Upload</label>
                                <input type='file' id='inputfile' accept='image/*'></input>
                            </div>
                            <div className='SellProduct_form_inputfield_images'>
                                <label htmlFor='inputfile'><img src='assets/AboutPartner/images-regular-24.png'></img> Upload</label>
                                <input type='file' id='inputfile' accept='image/*'></input>
                            </div>
                            <div className='SellProduct_form_inputfield_images'>
                                <label htmlFor='inputfile'><img src='assets/AboutPartner/images-regular-24.png'></img> Upload</label>
                                <input type='file' id='inputfile' accept='image/*'></input>
                            </div>
                            <div className='SellProduct_form_inputfield_images'>
                                <label htmlFor='inputfile'><img src='assets/AboutPartner/images-regular-24.png'></img> Upload</label>
                                <input type='file' id='inputfile' accept='image/*'></input>
                            </div>
                            <div className='SellProduct_form_inputfield_images'>
                                <label htmlFor='inputfile'><img src='assets/AboutPartner/images-regular-24.png'></img> Upload</label>
                                <input type='file' id='inputfile' accept='image/*'></input>
                            </div>
                            <div className='SellProduct_form_inputfield_images'>
                                <label htmlFor='inputfile'><img src='assets/AboutPartner/images-regular-24.png'></img> Upload</label>
                                <input type='file' id='inputfile' accept='image/*'></input>
                            </div>
                        </div>
                        <h1>Your Details</h1>
                        <div className='SellProduct_Select'>
                            <div className='SellProduct_form_inputfield'>
                                <label>Name*</label>
                                <input type='text' placeholder='Enter your name'></input>
                            </div>
                            <div className='SellProduct_form_inputfield'>
                                <label>Contact Number*</label>
                                <input type='text' placeholder='Enter your contact number'></input>
                            </div>
                            <div className='SellProduct_form_inputfield'>
                                <label>Email*</label>
                                <input type='text' placeholder='Enter your email'></input>
                            </div>
                        </div>
                        <button>Post Item</button>
                    </form>
                </div>
            </div>
        </>
    )
}
