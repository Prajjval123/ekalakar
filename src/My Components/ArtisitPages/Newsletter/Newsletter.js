import React, { useEffect, useState } from "react";
import "./Newsletter.css";
import Artist_navbar from "../Artist_navbar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Patron_Navbar from "../../PatronPages/Patron_Navbar";

const API_KEY = "abd2a54ab4276195b304f44c5f94e68a";
const API_URL = `https://gnews.io/api/v4/search?q=traditional%20art&lang=en&country=in&max=10&apikey=${API_KEY}`;

export function Newsletter() {

  const [Role,setRole]=useState("");
  const [latestNews, setLatestNews] = useState(null);

  const [imageNews, setImageNews] = useState(null);

  const [relatedNews, setRelatedNews] = useState([15, 16, 17]);

  const fetchNews = async () => {
    return fetch(API_URL)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        throw new Error("Error fetching new data :", error);
      });
  };

  const newsId = [3, 4, 5, 6, 7, 8];

  useEffect(() => {
    fetchNews()
      .then((data) => {
        setLatestNews(data.articles);
        console.log(data)
        const image = data.articles.filter((item) => item.url);
        console.log("image", image);
        setImageNews(image);
      })
      .catch((error) => console.error("Error fetching news data :", error));
    setRole(localStorage.getItem("role"));
  }, []);

  return (
    imageNews !== null && (
      <>
        {Role === "Artist" ? <Artist_navbar /> : <Patron_Navbar />}
         
        <div className="NewsletterPage">
          <div className="latest_news_wrapper">
            <h1 className="latest_news_text">Latest News</h1>

            <div className="latest_news_container">
              {newsId.map((data, index) => (
                <div key={index} className="single_latest_news_wrapper">
                  <div className="single_latest_news">
                    <img className="latest_news_img" onClick={() => (window.location.href = imageNews[data].url)} src={imageNews[data].image} alt="" />
                    <div className="latest_news_title" style={{padding: 4}}>
                      {imageNews[data]?.title?.split(" ").slice(0, 15).join(" ")}
                      ...
                    </div>
                  </div>
                  <div className="single_news_details">
                    {imageNews[data]?.author && (
                      <div className="NewsletterPage_Article_Content_Profile">
                        <img src="../assets/Newsletter/Profile.png"></img>
                        <p className="single_news_author">{imageNews[data]?.author} </p>
                      </div>
                    )}

                    <p className="single_news_name">{imageNews[data]?.source?.name} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="trendingNews_Wrapper">
            <h1 className="trending_news_heading">Trending News</h1>

            <div className="all_trending_News">
           {  latestNews &&
           <Swiper navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                <SwiperSlide>
                  {" "}
                  <div className="single_image_wrapper">
                    <img onClick={() => (window.location.href = imageNews[9].url)} className="trending_news_img" src={latestNews[9]?.image} alt="" />
                    <p className="imageText">{imageNews[9]?.description?.split(" ").slice(0, 50).join(" ")} ...</p>
                  </div>{" "}
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <div className="single_image_wrapper">
                    <img onClick={() => (window.location.href = imageNews[1].url)} className="trending_news_img" src={latestNews[1]?.image} alt="" />
                    <p className="imageText">{imageNews[1]?.description?.split(" ").slice(0, 50).join(" ")} ...</p>
                  </div>{" "}
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <div className="single_image_wrapper">
                    <img onClick={() => (window.location.href = imageNews[2].url)} className="trending_news_img" src={latestNews[2]?.image} alt="" />
                    <p className="imageText">{imageNews[2]?.description?.split(" ").slice(0, 50).join(" ")} ...</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <div className="single_image_wrapper">
                    <img onClick={() => (window.location.href = imageNews[3].url)} className="trending_news_img" src={latestNews[3]?.image} alt="" />
                    <p className="imageText">{imageNews[3]?.description?.split(" ").slice(0, 50).join(" ")} ...</p>
                  </div>{" "}
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <div className="single_image_wrapper">
                    <img onClick={() => (window.location.href = imageNews[4].url)} className="trending_news_img" src={latestNews[4]?.image} alt="" />
                    <p className="imageText">{imageNews[4]?.description?.split(" ").slice(0, 50).join(" ")} ...</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <div className="single_image_wrapper">
                    <img onClick={() => (window.location.href = imageNews[5].url)} className="trending_news_img" src={latestNews[5]?.image} alt="" />
                    <p className="imageText">{imageNews[5]?.description?.split(" ").slice(0, 50).join(" ")} ...</p>
                  </div>
                </SwiperSlide>
              </Swiper>
              }
            </div>
          </div>

          <div className="NewsletterPage_Articles">
            <h1 className="related_news_text">Related News</h1>
            <div className="NewsletterPage_Articledisplay">
              {relatedNews.map((data, index) => (
                <div key={index} className="NewsletterPage_Article_Content">
                  <img onClick={() => (window.location.href = imageNews[index].url)} src={imageNews[index]?.image} />
                  <div className="NewsletterPage_Article_Content_Profile">
                    <img src="../assets/Newsletter/Profile.png"></img>
                    <p>{imageNews[data]?.author}</p>
                  </div>
                  <p className="NewsletterPage_Article_Content_p1">
                    {imageNews[data]?.description?.split(" ").slice(0, 5).join(" ")} ...<br></br>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="NewsletterPage_footer">
            <div className="NewsletterPage_footer_Social">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="187" height="49" viewBox="0 0 187 49" fill="none">
                  <path
                    d="M162.814 48.1259C175.799 48.1259 186.326 37.3526 186.326 24.063C186.326 10.7734 175.799 0 162.814 0C149.828 0 139.301 10.7734 139.301 24.063C139.301 37.3526 149.828 48.1259 162.814 48.1259Z"
                    fill="#AD2F3B"
                  />
                  <path
                    d="M175.861 15.8228C175.055 16.1524 174.089 16.482 173.284 16.6469C173.767 16.6469 174.25 15.8228 174.572 15.4932C174.894 14.9987 175.216 14.5043 175.377 13.845V13.6802H175.216C174.25 14.1746 173.284 14.6691 172.156 14.8339C171.995 14.8339 171.995 14.8339 171.995 14.8339C171.834 14.6691 171.834 14.6691 171.673 14.5043C171.19 14.1746 170.707 13.845 170.224 13.5154C169.58 13.1858 168.774 13.0209 167.969 13.1858C167.164 13.1858 166.52 13.5154 165.876 13.845C165.231 14.1746 164.587 14.6691 164.104 15.3283C163.621 15.9876 163.299 16.6469 163.138 17.4709C162.977 18.295 162.977 18.9543 163.138 19.7783C163.138 19.9432 163.138 19.9432 162.977 19.9432C158.79 19.2839 155.247 17.8006 152.348 14.5043C152.187 14.3395 152.187 14.3395 152.026 14.5043C150.737 16.482 151.381 19.4487 152.992 20.932C153.153 21.0969 153.475 21.2617 153.636 21.5913C153.475 21.5913 152.509 21.4265 151.542 20.932C151.381 20.932 151.381 20.932 151.381 21.0969C151.381 21.2617 151.381 21.4265 151.381 21.7561C151.542 23.7339 152.992 25.5469 154.763 26.2061C154.924 26.3709 155.247 26.3709 155.408 26.3709C154.924 26.5357 154.602 26.5357 153.475 26.3709C153.314 26.3709 153.314 26.3709 153.314 26.5357C154.119 29.008 156.052 29.6672 157.501 30.1617C157.662 30.1617 157.823 30.1617 158.145 30.1617C157.662 30.8209 156.052 31.4802 155.247 31.645C153.797 32.1394 152.348 32.3043 150.898 32.1394C150.737 32.1394 150.576 32.1394 150.576 32.1394V32.3043C150.898 32.4691 151.22 32.6339 151.542 32.7987C152.509 33.2931 153.475 33.7876 154.441 33.9524C159.756 35.4357 165.554 34.282 169.58 30.3265C172.64 27.195 173.767 22.9098 173.767 18.4598C173.767 18.295 173.928 18.1302 174.089 18.1302C174.894 17.4709 175.538 16.8117 176.183 15.9876C175.861 16.1524 175.861 15.9876 175.861 15.8228Z"
                    fill="white"
                  />
                  <path
                    d="M91.8937 48.1259C104.879 48.1259 115.407 37.3526 115.407 24.063C115.407 10.7734 104.879 0 91.8937 0C78.9079 0 68.3809 10.7734 68.3809 24.063C68.3809 37.3526 78.9079 48.1259 91.8937 48.1259Z"
                    fill="#AD2F3B"
                  />
                  <path
                    d="M99.1417 14.9961C98.1754 14.9961 97.5312 15.6554 97.5312 16.6442C97.5312 17.6331 98.3365 18.2924 99.1417 18.2924C100.108 18.2924 100.752 17.6331 100.752 16.6442C100.752 15.8202 100.108 14.9961 99.1417 14.9961Z"
                    fill="white"
                  />
                  <path
                    d="M92.0569 17.1406C88.3529 17.1406 85.293 20.2721 85.293 24.0628C85.293 27.8536 88.3529 30.9851 92.0569 30.9851C95.761 30.9851 98.8209 27.8536 98.8209 24.0628C98.8209 20.2721 95.761 17.1406 92.0569 17.1406ZM92.0569 28.5128C89.6412 28.5128 87.7087 26.5351 87.7087 24.0628C87.7087 21.5906 89.6412 19.6128 92.0569 19.6128C94.4726 19.6128 96.4052 21.5906 96.4052 24.0628C96.4052 26.5351 94.4726 28.5128 92.0569 28.5128Z"
                    fill="white"
                  />
                  <path
                    d="M97.3716 38.2373H86.4204C81.9111 38.2373 78.207 34.4465 78.207 29.8317V18.6243C78.207 14.0095 81.9111 10.2188 86.4204 10.2188H97.3716C101.881 10.2188 105.585 14.0095 105.585 18.6243V29.6669C105.746 34.4465 102.042 38.2373 97.3716 38.2373ZM86.4204 12.691C83.1995 12.691 80.7838 15.328 80.7838 18.4595V29.6669C80.7838 32.9632 83.3605 35.4354 86.4204 35.4354H97.3716C100.593 35.4354 103.008 32.7984 103.008 29.6669V18.4595C103.008 15.1632 100.431 12.691 97.3716 12.691H86.4204Z"
                    fill="white"
                  />
                  <path
                    d="M43.8931 24.46C43.8931 11.9993 34.1223 2 21.9465 2C9.77072 2 0 11.9993 0 24.46C0 35.69 7.96689 45.074 18.4892 46.7662V30.9211H12.9274V24.46H18.4892V19.5373C18.4892 13.8453 21.7962 10.7686 26.7567 10.7686C29.1618 10.7686 31.7172 11.2301 31.7172 11.2301V16.7682H29.0115C26.3058 16.7682 25.4039 18.4604 25.4039 20.3064V24.46H31.5669L30.665 30.9211H25.5542V46.6123C35.9262 45.074 43.8931 35.69 43.8931 24.46Z"
                    fill="#AD2F3B"
                  />
                </svg>
              </a>
            </div>
            <div className="NewsletterPage_footer_pageno">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                  <path
                    d="M25.9951 9C26.5474 9 26.9951 8.55228 26.9951 8C26.9951 7.44772 26.5474 7 25.9951 7L25.9951 9ZM1.20873 7.2929C0.818207 7.68342 0.818207 8.31658 1.20873 8.70711L7.57269 15.0711C7.96322 15.4616 8.59638 15.4616 8.98691 15.0711C9.37743 14.6805 9.37743 14.0474 8.98691 13.6569L3.33005 8L8.98691 2.34315C9.37743 1.95262 9.37743 1.31946 8.98691 0.928934C8.59638 0.538409 7.96322 0.538409 7.57269 0.928934L1.20873 7.2929ZM25.9951 7L1.91584 7L1.91584 9L25.9951 9L25.9951 7Z"
                    fill="#EBEEF3"
                  />
                </svg>
              </button>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 35 35" fill="none">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#AD2F3B" />
                  <text x="50%" y="50%" dominant-baseline="middle" style={{ fontSize: "20px", fill: "white" }} text-anchor="middle">
                    1
                  </text>
                </svg>
              </p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                  <path
                    d="M1.91602 7C1.36373 7 0.916016 7.44772 0.916016 8C0.916016 8.55228 1.36373 9 1.91602 9V7ZM26.7024 8.70711C27.0929 8.31658 27.0929 7.68342 26.7024 7.29289L20.3384 0.928932C19.9479 0.538408 19.3148 0.538408 18.9242 0.928932C18.5337 1.31946 18.5337 1.95262 18.9242 2.34315L24.5811 8L18.9242 13.6569C18.5337 14.0474 18.5337 14.6805 18.9242 15.0711C19.3148 15.4616 19.9479 15.4616 20.3384 15.0711L26.7024 8.70711ZM1.91602 9L25.9953 9V7L1.91602 7V9Z"
                    fill="#EBEEF3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
}
