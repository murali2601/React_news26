// Render.js
import React from 'react'
export default function Render(props) {
  const noImg = 'https://media.istockphoto.com/id/1313303632/video/breaking-news-template-intro-for-tv-broadcast-news-show-program-with-3d-breaking-news-text.jpg?s=640x640&k=20&c=S0dTZp37XKVcCAnoguMnRatvv4Nkp2cjmA5aYOOrJs8=';
  return (<>
   
    {
      props.title ? (
        <div className="card cd mb-3 m-1 rounded-5 p-3">
      
      <img src={props.image ? props.image : noImg}  className="card-img-top rounded-5" alt={props.title ? props.title : "( Currently no Title found )"} />
      <div className="card-body  p-3 text-white">
        <h4 className="card-title"><i class="fa-solid fa-circle"></i> {props.title} ...</h4>
        <p className="card-text opacity-75"><i class="fa-solid fa-indent"></i> {props.description ? props.description : "( Currently no Descriptions found )"}</p>
        <h6><i class="fa-solid fa-user-tie"></i> Author: {props.author ? props.author : "No Author found"}</h6>
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="btn btn-info text-white rounded-5 p-3 my-3">
          Read More... <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <div className="card-footer  bg-info-subtle rounded-4 p-3">
       
        <h6 className="text-body-secondary ">Source : {props.source ? props.source : "No source found"}</h6>
        <small className="text-body-secondary">Published @{props.time}</small>
      </div>
    </div>
      ) : (
        <h5 className="text-center p-3">You have reached the end of the page</h5>
      )
    }
    </>
  );
}
