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
    
 sortedList = (id)=> {
      const sortedBooks = this.state.books.filter(item=>item.id !== id);
      this.setState({
          books:sortedBooks
      })
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

       {this.state.books.map(book => <Book key={book.id} info={book} deleteItem={()=>this.sortedList(book.id)} />)}
        </div>

        )
    }
}
  export default Booklist;
  