import React from 'react';
import { useLocation } from 'react-router-dom';
import  { useState } from 'react'
import { Rating } from 'react-simple-star-rating'


const Summary = () => {
  const [rating, setRating] = useState(0) // initial rating value

    const location = useLocation();
    const data = location.state;
     console.log(data)
// this is using for rating the movie
const handleRating = (rate) => {
  setRating(rate)
}

     return (
   <div className=''>
        <div>
            <div className='main-page'>
                <div className="page">
                  
                    <div  className='imagebg '>
            <img src={data?.image?.original ? data?.image?.original : "https://m.media-amazon.com/images/M/MV5BODIxY2NkYWEtNWE3ZS00NDZhLWFlMDktMTE0NDNlZDk0MzAyXkEyXkFqcGc@._V1_.jpg"} alt="" />
    
                       </div>
             <div>
                <h5>Movie Name:- {data?.name}</h5>
                <h5>Language:- { data?.language}</h5>
              <h5>Genres:- {data?.genres}</h5>
                <h5>Duration:- {data?.runtime}</h5>
                <div className="rating">
                  <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
                  </div>
             
                {/* <!-- Button trigger modal --> */}
                <button type="button" className='bookshow-btn 'data-bs-toggle="modal" data-bs-target="#exampleModal">BOOK NOW</button>

{/* <!-- Modal --> */}
       <div className="popop modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-header">
        <h1 className="popopbdy0 modal-title fs-5" id="exampleModalLabel">Movie Name:- {data?.name}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className=" popopbdy1 modal-body">
             <h6>Language:- { data?.language}</h6>
                <h6>Genres:- {data?.genres}</h6>
      </div>
      <div className=" popopbdy2 modal-body">
                <h6>Duration:- {data?.runtime}</h6>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-dark"  data-bs-dismiss="modal">Book Now</button>
      </div>
    </div>
  </div>
</div>

             </div>
                </div>
                <div className='about'>
                  <h1>About the movie</h1>
                <p  className=' summary  '>{data?.summary.replace(/[<p></p><br/>]/g, ' ')}</p>
                </div>
            </div>

        </div>
       
    
   </div>
  );
}

export default Summary;
