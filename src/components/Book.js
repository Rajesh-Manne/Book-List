import React from 'react'


function Book(props){
    const {img,title,author} = props.info;

    return(
      <div className="book">
         {/* <h4> From Book</h4>
         Book: {book}<br />
         Author: {author} */}
    
       <div className="body">
       <img src={img} alt='book' />
       <div className="textbody">
        <h4>{title}</h4>
        <p>By:{author}</p>
        <button class="btn">Add to cart</button>
        </div> 
        </div>
   
      </div>
    )
  }
export default Book;  