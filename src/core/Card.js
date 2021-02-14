import React from 'react'
import "../styles.css"
import {Link} from 'react-router-dom'


  const Card = ({
    meme
  }) => {

    const memeName = meme? meme.name : "Inception Name"
    const memeCaption = meme? meme.caption : "Inception Caption"
    const memeImage = meme? meme.url : "Inception URL"
    
    return (
      <div id="bd" className="card text-white  border border-info h-200 w-100">
        <div className="card-body">
          <div className="rounded border border-success p-2 bg-dark">
            <img
              id="pic"
              src={memeImage}
              alt="photo"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              className="mb-3 rounded"
            />
          </div>
          <p id="cp" >
          {memeCaption}
          </p>
          <div id="title">{memeName}</div>
          <br/>
          <br/>
          <Link to={`/memes/update/${meme._id}`} id="edit" className="btn btn-md btn-dark mb-3 "  >Edit</Link>
        </div>
      </div>
    );
  };

export default Card;



