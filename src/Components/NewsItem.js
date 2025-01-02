import React from 'react'

const NewsItem =(props)=> {

  
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className='my-3'>
        <div className="card" style={{ border: '2px solid black' }}>
          <img src={!imageUrl ? "https://wallpapers.com/images/high/kyojuro-rengoku-from-mugen-train-uy25uatmez3a2okk.webp" : imageUrl} className="card-img-top" alt="pic" />
          <div className="card-body" style={{ backgroundColor: '#00d8ff' }}>
            <h5 className="card-title">{title}....<span style={{zIndex:'1'}} className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span></h5>
            <p className="card-text">{description}....</p>
            <hr></hr>
            <p className="card-text"><small>By {author ? author : "UnKnown"} Published On {new Date(date).toDateString()}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-dark" style={{ border: '2px solid black' }} >More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
