import { useState } from 'react';
import AllCourses from "../All Courses/AllCourses";
import './Categories.css';
import Category from '../../../Skill Development/SDComponents/Course Categories/Every Category/Category';
import Data from '../All Courses/AllCourseData';
const Categories = () =>{
  const [data,setData] = useState(Data);
    const Category = (cat)=>{
        const UpdateItem = Data.filter((curItem)=>{
            return curItem.category == cat;
        })
        setData(UpdateItem);
    }
    console.log("=>",data);
    return(
       <>
        <div id="categories-header-section">
            <div id="categories-header-bg"></div>
            <div id="couse-categories-text">Skill Development</div>

            {/* all categories names */}
            <div id="all-categories-scroll-section">
                <div onClick={()=>setData(Data)}  className="every-category">All</div>
                <div onClick={()=>Category('Dance')}  className="every-category" >Dance</div>
                <div onClick={()=>Category('Music')}  className="every-category" >Music</div>
                <div onClick={()=>Category('Song')}  className="every-category" >Song</div>
                <div onClick={()=>Category('Theater')}  className="every-category" >Theater</div>
                <div onClick={()=>Category('Any other')}  className="every-category" >Any Other</div>
                {/* <div onClick={()=>Category('Any Other')}  className="every-category" >Any Other</div> */}

                {/* <div onClick={()=>Category('Drama')}  className="every-category" >Drama</div>
                <div onClick={()=>Category('Acting')} className="every-category" >Acting</div>
                <div onClick={()=>Category('Fine')}   className="every-category" >Fine Art</div>
                <div onClick={()=>Category('Comedy')} className="every-category" >Comedy</div> */}
            </div>
        </div>
        <AllCourses CategoryName={data}/>

        </>
    )
}

export default Categories;