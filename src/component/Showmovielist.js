// import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const Showmovielist = (props) => {
    console.log(props)
    let {showData} = props
  return (
    <div className='bg-dark m-0'>
       <div className='row container mx-auto'>
        {showData?.map((data,index)=>{
            return <div className='col-md-4 col-sm-6  ' key={index}>
                <div className=' mt-5 ' >
                    <div className='card '>
                        <div className='bg-gradient bg-dark pt-4 px-4 '> 
                            <img style={{}}  className='  card-img-top card-bg border border-warning border-1 shadow-lg bg-warning ' src={data?.show?.image?.original ? data?.show?.image?.original : "https://m.media-amazon.com/images/M/MV5BODIxY2NkYWEtNWE3ZS00NDZhLWFlMDktMTE0NDNlZDk0MzAyXkEyXkFqcGc@._V1_.jpg"} alt="movie"/>
                            <p>{data.show.name}</p> 
                            {data.show.genres.map((category)=>{
                                return  <span className='category'>{category}</span>
                               
                            })} 
                            <span className=' summary text-sm my-2 fw text-center text-light '>{data?.show?.summary.replace(/[<p></p><br/>]/g, ' ').slice("0","30")}...</span>
                              <Link
                              className='watchnow-btn ' to='/summary' state={data.show} >BOOK NOW</Link>
                    </div>
                    </div>
                </div>
                </div>
        })}
       </div>
    </div>
  );
}

export default Showmovielist;
