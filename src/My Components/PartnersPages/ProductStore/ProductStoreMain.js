import React from 'react';
import Partner_Navbar from '../Partner_Navbar';
import "./ProductStoreMain.css";
import { useState, useRef } from "react";



export default function ProductStoreMain() {
    const [showOrderDetails, setShowOrderDetails] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showproductsFiltersPopup, setproductsShowFiltersPopup] = useState(false);
    const [showordersFiltersPopup, setordersShowFiltersPopup] = useState(false);

    const initialActiveSection = localStorage.getItem("activeSection") || "basic";
    const [activeSection, setActiveSection] = useState(initialActiveSection);
    const handleClick = (section) => {
        setActiveSection(section);
        localStorage.setItem("activeSection", section);
        setShowOrderDetails(false);
    };

    const selectOrder = (order) => {
        setSelectedOrder(order);
        setShowOrderDetails(true); // Show order details when a specific order is selected
    };

    const products = [
        {
            id: 1,
            src: 'assets/ProductStore/Rectangle22176.png',
            name: "Guitar",
            brand: "Taylor",
            price: "₹ 4,999.00",
            rating: 4.0,
            partner: "Partner Name, Bangalore, 12345678910",
        },
        {
            id: 1,
            name: "Guitar",
            brand: "Taylor",
            price: "₹ 4,999.00",
            rating: 4.0,
            partner: "Partner Name, Bangalore, 12345678910", src: 'assets/ProductStore/Rectangle22176.png',
        },
        {
            id: 1,
            name: "Guitar",
            brand: "Taylor",
            price: "₹ 4,999.00",
            rating: 4.0,
            partner: "Partner Name, Bangalore, 12345678910", src: 'assets/ProductStore/Rectangle22176.png',
        },
        {
            id: 1,
            name: "Guitar",
            brand: "Taylor",
            price: "₹ 4,999.00",
            rating: 4.0,
            partner: "Partner Name, Bangalore, 12345678910", src: 'assets/ProductStore/Rectangle22176.png',
        },
        {
            id: 1,
            name: "Guitar",
            brand: "Taylor",
            price: "₹ 4,999.00",
            rating: 4.0,
            partner: "Partner Name, Bangalore, 12345678910", src: 'assets/ProductStore/Rectangle22176.png',
        },
        {
            id: 1,
            name: "Guitar",
            brand: "Taylor",
            price: "₹ 4,999.00",
            rating: 4.0,
            partner: "Partner Name, Bangalore, 12345678910", src: 'assets/ProductStore/Rectangle22176.png',
        },
        // Add more product objects as needed
    ];

    const yourorders = [
        {
            orderid: "1",
            product: "assets/ProductStore/Rectangle22177.png",
            productname: "Random Name1",
            quantity: "1",
            price: "₹ 4,999.00",
            status: "Delivered",
        },
        {
            orderid: "2",
            product: "assets/ProductStore/Rectangle22177.png",
            productname: "Random Name2",
            quantity: "1",
            price: "₹ 4,999.00",
            status: "Delivered",
        },
    ];

    return (
        <>
            <Partner_Navbar />
            <div className='ProductStoreMain_Page'>
                <div className='ProductStoreMain_Top'>
                    <div className='ProductStoreMain_Content'>
                        <p>Product Store</p>
                    </div>
                </div>
                <div className='ProductStoreMain_SearchandSort'>
                    <div className='ProductStoreMain_Search'>
                        <input placeholder='Search for anything' type='text'></input>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M20 18.954L14.4133 13.3673C15.7558 11.7556 16.4253 9.68835 16.2825 7.59562C16.1396 5.50288 15.1954 3.54579 13.6464 2.13146C12.0973 0.717125 10.0626 -0.0455437 7.96554 0.00210549C5.86847 0.0497547 3.87051 0.904053 2.38728 2.38728C0.904053 3.87051 0.0497547 5.86847 0.00210549 7.96554C-0.0455437 10.0626 0.717125 12.0973 2.13146 13.6464C3.54579 15.1954 5.50288 16.1396 7.59562 16.2825C9.68835 16.4253 11.7556 15.7558 13.3673 14.4133L18.954 20L20 18.954ZM1.50598 8.16382C1.50598 6.84703 1.89645 5.5598 2.62803 4.46492C3.3596 3.37004 4.39941 2.51669 5.61598 2.01277C6.83254 1.50886 8.17121 1.37701 9.46271 1.6339C10.7542 1.8908 11.9405 2.5249 12.8716 3.45601C13.8028 4.38713 14.4369 5.57345 14.6937 6.86494C14.9506 8.15644 14.8188 9.49511 14.3149 10.7117C13.811 11.9282 12.9576 12.9681 11.8627 13.6996C10.7678 14.4312 9.48062 14.8217 8.16382 14.8217C6.39865 14.8197 4.70634 14.1176 3.45818 12.8695C2.21001 11.6213 1.50793 9.92899 1.50598 8.16382Z" fill="white" />
                        </svg></button>
                    </div>
                    <div className='ProductStoreMain_Sort'>
                        <label>Sort by:</label>
                        <select>
                            <option selected>Default</option>
                        </select>
                    </div>
                </div>
                <div className='ProductStoreMain_Switcher'>
                    <button className={activeSection === "allproducts" ? "active" : ""} onClick={() => handleClick("allproducts")}>All Products</button>
                    <button className={activeSection === "yourorders" ? "active" : ""} onClick={() => handleClick("yourorders")}>Your Orders</button>
                    <button className={activeSection === "returned" ? "active" : ""} onClick={() => handleClick("returned")}>Returned</button>
                </div>

                <div className='ProductStoreMain_MainContent'>

                    {activeSection === "allproducts" && (
                        <>
                            <div >
                                <button className='ProdcutStoreMain_Filters_btn' type="button" onClick={() => setproductsShowFiltersPopup(true)}>Filters</button>
                                {showproductsFiltersPopup === true && (
                                    <div className="ProdcutStoreMain_Filterspopup">
                                        <button type="button" onClick={() => setproductsShowFiltersPopup(false)}>x</button>
                                        <div className='ProdcutStoreMain_Filters_Select'>
                                            <label>Categories</label>
                                            <select>
                                                <option selected hidden>Select Category</option>
                                            </select>
                                        </div>
                                        <div className='ProdcutStoreMain_Filters_Select'>
                                            <label>Location</label>
                                            <select>
                                                <option selected hidden>Select Location</option>
                                            </select>
                                        </div>
                                        <div className='ProdcutStoreMain_Filters_Select'>
                                            <label>Brand</label>
                                            <select>
                                                <option selected hidden>Select Brand</option>
                                            </select>
                                        </div>
                                        <div className='ProdcutStoreMain_Filters_Select'>
                                            <label>Price</label>
                                            <div className='ProdcutStoreMain_Filters_minmax'>
                                                <input placeholder='Min'></input>
                                                <input placeholder='Max'></input>
                                            </div>
                                        </div>
                                        <div className='ProdcutStoreMain_Filters_Rating'>
                                            <label>Review</label>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>5 Star Ratings</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>4 Star Ratings</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>3 Star Ratings</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>2 Star Ratings</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>1 Star Ratings</label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="ProdcutStoreMain_Filters">
                                <div className='ProdcutStoreMain_Filters_Select'>
                                    <label>Categories</label>
                                    <select>
                                        <option selected hidden>Select Category</option>
                                    </select>
                                </div>
                                <div className='ProdcutStoreMain_Filters_Select'>
                                    <label>Location</label>
                                    <select>
                                        <option selected hidden>Select Location</option>
                                    </select>
                                </div>
                                <div className='ProdcutStoreMain_Filters_Select'>
                                    <label>Brand</label>
                                    <select>
                                        <option selected hidden>Select Brand</option>
                                    </select>
                                </div>
                                <div className='ProdcutStoreMain_Filters_Select'>
                                    <label>Price</label>
                                    <div className='ProdcutStoreMain_Filters_minmax'>
                                        <input placeholder='Min'></input>
                                        <input placeholder='Max'></input>
                                    </div>
                                </div>
                                <div className='ProdcutStoreMain_Filters_Rating'>
                                    <label>Review</label>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>5 Star Ratings</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>4 Star Ratings</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>3 Star Ratings</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>2 Star Ratings</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>1 Star Ratings</label>
                                    </div>
                                </div>
                            </div>


                            <div className='ProductStoreMain_allproducts'>
                                {products.map((product) => (
                                    <div className='ProductStoreMain_allproducts_singleproduct' key={product.id}>
                                        <img src={product.src} alt={product.name} />
                                        <div className='ProductStoreMain_allproducts_singleproduct_details'>
                                            <div className='ProductStoreMain_allproducts_singleproduct_left'>
                                                <p>Product :</p>
                                                <p>Brand :</p>
                                                <p>Price :</p>
                                                <p>Reviews :</p>
                                            </div>
                                            <div className='ProductStoreMain_allproducts_singleproduct_right'>
                                                <p>{product.name}</p>
                                                <p>{product.brand}</p>
                                                <p>{product.price}</p>
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M9 15.0745L13.3649 17.8368C14.1642 18.343 15.1424 17.5947 14.932 16.6482L13.7751 11.4537L17.6351 7.95405C18.3398 7.31575 17.9611 6.10517 17.0356 6.02813L11.9555 5.57692L9.96763 0.66857C9.61003 -0.222857 8.38997 -0.222857 8.03237 0.66857L6.04451 5.56591L0.964434 6.01713C0.038871 6.09416 -0.339768 7.30474 0.364921 7.94305L4.22494 11.4427L3.06799 16.6372C2.85763 17.5837 3.83578 18.332 4.63513 17.8258L9 15.0745Z" fill="#FFB800" />
                                                    </svg>
                                                    {product.rating}
                                                </p>
                                            </div>
                                        </div>
                                        <p className='ProductStoreMain_allproducts_singleproduct_address'>{product.partner}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}


                    {activeSection === "yourorders" && !showOrderDetails && (
                        <>
                            <div >
                                <button className='ProdcutStoreMain_Filters_btn' type="button" onClick={() => setordersShowFiltersPopup(true)}>Filters</button>
                                {showordersFiltersPopup === true && (
                                    <div className="ProdcutStoreMain_Filterspopup">
                                        <button type="button" onClick={() => setordersShowFiltersPopup(false)}>x</button>
                                        <div className='ProdcutStoreMain_Filters_Rating'>
                                            <label>Order Placed Year</label>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>2023</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>2022</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>2021</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>2020</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>2019</label>
                                            </div>
                                        </div>
                                        <div className='ProdcutStoreMain_Filters_Rating'>
                                            <label>Order Status</label>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>Delivered</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>On the Way</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>Canceled</label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="ProdcutStoreMain_Filters">
                                <div className='ProdcutStoreMain_Filters_Rating'>
                                    <label>Order Placed Year</label>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>2023</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>2022</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>2021</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>2020</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>2019</label>
                                    </div>
                                </div>
                                <div className='ProdcutStoreMain_Filters_Rating'>
                                    <label>Order Status</label>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>Delivered</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>On the Way</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>Canceled</label>
                                    </div>
                                </div>
                            </div>
                            <div className='ProductStoreMain_allorders'>
                                {yourorders.map((order) => (
                                    <div className='ProductStoreMain_oneorderbtns' key={order.orderid}>
                                        <div className='ProductStoreMain_oneorder'>
                                            <div className='ProductStoreMain_oneorder_top'>
                                                <p>Product</p>
                                                <p>Product Name</p>
                                                <p>Quantity</p>
                                                <p>Price</p>
                                                <p>Status</p>
                                            </div>
                                            <div className='ProductStoreMain_oneorder_bottom'>
                                                <img src={order.product} alt={order.productname}></img>
                                                <p>{order.productname}</p>
                                                <p>{order.quantity}</p>
                                                <p>{order.price}</p>
                                                <p style={{ color: "#25D366" }}>{order.status}</p>
                                            </div>
                                        </div>
                                        <div className='ProductStoreMain_oneorderbtns_buttons'>
                                            <button className='btn1'>View Product</button>
                                            <button className='btn2' onClick={() => selectOrder(order)}>View Details</button>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </>
                    )}

                    {showOrderDetails && selectedOrder && (

                        <div className='ProductStoreMain_orderdetails'>
                            <h1>Order Details</h1>
                            <div className='ProductStoreMain_orderdetails_Main'>
                                <div className='ProductStoreMain_orderdetails_Main_left'>
                                    <div className='ProductStoreMain_orderdetails_Main_left_top'>
                                        <div>
                                            <img src={selectedOrder.product} alt={selectedOrder.productname} />
                                        </div>
                                        <div className='ProductStoreMain_orderdetails_Main_left_p1'>
                                            <p>{selectedOrder.productname}</p>
                                            <p style={{ textAlign: "right" }}>x1</p>
                                            <p>{selectedOrder.price}</p>
                                        </div>
                                    </div>
                                    <div className='ProductStoreMain_orderdetails_Main_line'></div>
                                    <div className='ProductStoreMain_orderdetails_Main_left_middle'>
                                        <div className='ProductStoreMain_orderdetails_Main_left_middle_p1'>
                                            <p>Subtotal</p>
                                            <p>Discount</p>
                                            <p>Shipment Cost</p>
                                        </div>
                                        <div className='ProductStoreMain_orderdetails_Main_left_middle_p2'>
                                            <p>{selectedOrder.price}</p>
                                            <p>₹ 0</p>
                                            <p>₹ 85.00</p>
                                        </div>
                                    </div>
                                    <div className='ProductStoreMain_orderdetails_Main_line'></div>
                                    <div className='ProductStoreMain_orderdetails_Main_left_bottom'>
                                        <p>Total</p>
                                        <p>₹ 5,084.00</p>
                                    </div>
                                </div>

                                <div className='ProductStoreMain_orderdetails_Main_right'>
                                    <h2>Shipping Address</h2>
                                    <div className='ProductStoreMain_orderdetails_Main_right_Main'>
                                        <div className='ProductStoreMain_orderdetails_Main_right_p'>
                                            <p className='p1'>Full Name</p>
                                            <p className='p2'>Mano Selva Vijay</p>
                                        </div>
                                        <div className='ProductStoreMain_orderdetails_Main_right_p'>
                                            <p className='p1'>Contact Number</p>
                                            <p className='p2'>12345678901</p>
                                        </div>
                                        <div className='ProductStoreMain_orderdetails_Main_right_p' style={{ width: "100%" }}>
                                            <p className='p1'>Email Address</p>
                                            <p className='p2'>randommail@gmail.com</p>
                                        </div>
                                        <div className='ProductStoreMain_orderdetails_Main_right_p' >
                                            <p className='p1'>State</p>
                                            <p className='p2'>Bangalore</p>
                                        </div>
                                        <div className='ProductStoreMain_orderdetails_Main_right_p'>
                                            <p className='p1'>City</p>
                                            <p className='p2'>random city</p>
                                        </div>
                                        <div className='ProductStoreMain_orderdetails_Main_right_p' style={{ width: "100%" }}>
                                            <p className='p1'>Postal Code</p>
                                            <p className='p2'>123456</p>
                                        </div>
                                        <div className='ProductStoreMain_orderdetails_Main_right_p'>
                                            <p className='p1'>Detailed Address</p>
                                            <p className='p2'>random street, random city, random district - 123456</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    )}

                    {activeSection === "returned" && (
                        <>
                            <div>
                                <button className='ProdcutStoreMain_Filters_btn' type="button" onClick={() => setordersShowFiltersPopup(true)}>Filters</button>
                                {showordersFiltersPopup === true && (
                                    <div className="ProdcutStoreMain_Filterspopup">
                                        <button type="button" onClick={() => setordersShowFiltersPopup(false)}>x</button>
                                        <div className='ProdcutStoreMain_Filters_Rating'>
                                            <label>Order Placed Year</label>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>2023</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>2022</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>2021</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>2020</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>2019</label>
                                            </div>
                                        </div>
                                        <div className='ProdcutStoreMain_Filters_Rating'>
                                            <label>Order Status</label>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>Delivered</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>On the Way</label>
                                            </div>
                                            <div className='ProdcutStoreMain_Filters_Rating_div'>
                                                <input type='checkbox'></input>
                                                <label>Canceled</label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="ProdcutStoreMain_Filters">
                                <div className='ProdcutStoreMain_Filters_Rating'>
                                    <label>Order Placed Year</label>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>2023</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>2022</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>2021</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>2020</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>2019</label>
                                    </div>
                                </div>
                                <div className='ProdcutStoreMain_Filters_Rating'>
                                    <label>Order Status</label>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>Delivered</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>On the Way</label>
                                    </div>
                                    <div className='ProdcutStoreMain_Filters_Rating_div'>
                                        <input type='checkbox'></input>
                                        <label>Canceled</label>
                                    </div>
                                </div>
                            </div>
                            <div className='ProductStoreMain_returned'>
                                <div className='ProductStoreMain_returned_noreturns'>
                                    <img src='assets/ProductStore/Nodatafound.png'></img>
                                    <h3>Oops!</h3>
                                    <p>You haven’t returned any products yet</p>
                                    <button onClick={() => handleClick("allproducts")}>Continue Shopping</button>
                                </div>
                            </div>
                        </>
                    )}

                </div>



            </div>
        </>
    )
}
