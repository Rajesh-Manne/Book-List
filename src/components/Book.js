import React,{Component} from 'react'


class Book extends Component {
    constructor(props){
        super(props)

        this.state={
            count:0
        }
    }

   incrementHandler = ()=> {
       this.setState({
           count:this.state.count + 1
       })
   }
   
   decrementHandler =()=>{
       this.setState({
           count:this.state.count - 1
       })
   }
  
    resetHandler = ()=> {
        this.setState({
            count:0
        })
    }

    render(){
    const {img,title,author} = this.props.info;
    const{deleteItem} = this.props

    return(
      <div className="container">
         {/* <h4> From Book</h4>
         Book: {book}<br />
         Author: {author} */}
    
       <div className="body">
       <img src={img} alt='book' />
       <div className="textbody">
        <div className="headerbody">
        <h4>{title}</h4>
        <p>By:{author}</p>
        <p>{this.state.count}</p>
        </div>
        <div className="buttons">       
         <button className="btn" onClick={this.incrementHandler} >Add to cart</button>
        <button className="btn" onClick={this.decrementHandler} >Remove from cart</button>
        <button className="btn" onClick={this.resetHandler} >Reset cart</button>
        <button className="btn" onClick={deleteItem}>Delete books </button>
        </div>

        </div> 
        </div>
   
      </div>
    )
  }
}
export default Book;  