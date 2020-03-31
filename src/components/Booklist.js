import React, {Component} from 'react'
import Book from './Book'
import datalist from './Data'

class Booklist extends Component {
    constructor(){
        super()

        this.state = {
            books:datalist
         }
    }
    
   
    render(){
        // const example = this.state.books.map(item=>item.book)
        //  console.log(example)
        return(
        <div>
            {/* <h3>Hello from booklist</h3>
        <Book info={this.state.books[0]} />
        <Book info={this.state.books[1]} />
        <Book info={this.state.books[2]} /> */}

{/*         
        {this.state.books.map((item)=>
        <Book key={item.id} info={item}/>)}
       */}

       {this.state.books.map(item => <Book key={item.id} info={item} />)}
        </div>

        )
    }
}
  export default Booklist;
  