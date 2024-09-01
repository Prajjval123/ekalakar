import React, { useEffect, useState } from "react";
import  "../Dashboard/Dashboard_Card.css"
import course from '../Course Categories/CCComponents/All Courses/AllCourseData'
const Skill_Card = () => {
    console.log("==>",course[0]);
  return (
    <>
    <div class="wrapper">
	<div class="card">
		<div class="poster"><img src={course[0].course_img} alt="Location Unknown" /></div>
		<div class="details">
			<h1>{course[0].course_name}</h1>
			{/* <h2>2021 • PG • 1hr 38min</h2> */}
			<div class="rating">
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
                <i class="fas fa-star"></i>

				{/* <i class="far fa-star"></i> */}
				<span>5/5</span>
			</div>
			<div class="tags">
				<span class="tag">{course[0].category}</span>
				
			</div>
			<p class="desc">{`Posted by: ${course[0].posted_by}`}</p>
			<div class="cast">
				<h3>Cast</h3>
                	<p class="desc">{ `${course[0].price}`}</p>
					<a class="desc" target="_block" href={course[0].course_link} style={{ textDecoration: "none" }}>Explore The Course</a>

				{/* <ul>
					<li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews" /></li>
					<li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd" /></li>
					<li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera" /></li>
				</ul> */}
			</div>
		</div>
	</div>
    <div class="card">
		<div class="poster"><img src={course[4].course_img} alt="Location Unknown" /></div>

		<div class="details">
			<h1>{course[4].course_name}</h1>
			{/* <h2>2121 • PG • 1hr 38min</h2> */}
			<div class="rating">
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
                <i class="fas fa-star"></i>

				{/* <i class="far fa-star"></i> */}
				<span>5/5</span>
			</div>
			<div class="tags">
				<span class="tag">{course[4].category}</span>
				
			</div>
			<p class="desc">{`Posted by: ${course[4].posted_by}`}</p>
			<div class="cast">
				<h3>Cast</h3>
                	<p class="desc">{ `${course[4].price}`}</p>
				{/* <ul>
					<li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews" /></li>
					<li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd" /></li>
					<li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera" /></li>
				</ul> */}
				<a class="desc" target="_block" href={course[4].course_link} style={{ textDecoration: "none" }}>Explore The Course</a>


			</div>
		</div>

	</div>
    <div class="card">
		<div class="poster"><img src={course[2].course_img} alt="Location Unknown" /></div>
		<div class="details">
			<h1>{course[2].course_name}</h1>
			{/* <h2>2221 • PG • 1hr 38min</h2> */}
			<div class="rating">
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
                <i class="fas fa-star"></i>

				{/* <i class="far fa-star"></i> */}
				<span>5/5</span>
			</div>
			<div class="tags">
				<span class="tag">{course[2].category}</span>
				
			</div>
			<p class="desc">{`Posted by: ${course[2].posted_by}`}</p>
			<div class="cast">
				<h3>Cast</h3>
                	<p class="desc">{ `${course[2].price}`}</p>
					<a class="desc" target="_block" href={course[2].course_link} style={{ textDecoration: "none" }}>Explore The Course</a>

				{/* <ul>
					<li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews" /></li>
					<li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd" /></li>
					<li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera" /></li>
				</ul> */}
			</div>
		</div>
	</div>
	
</div>
    </>
  )
}

export default Skill_Card