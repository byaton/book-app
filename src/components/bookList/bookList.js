import React, {Component} from 'react';
import axios from '../../axios-books';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actions/index';

class BookList extends Component {
    state = {
        books: [],
        searchBookName: ''
    }
    componentDidMount() {
        axios.get('books.json')
             .then(res => {
                 if (res.data) {
                    const bookList = [];
                    res.data.forEach(data => {
                       if (data) {
                           bookList.push(data);
                       }                        
                    });
                   this.setState({books: bookList})
                             }
             })
             .catch(err => {
                 console.log(err);
             });
    };

    onClickHandler = (id) => {
        this.props.onSetBookId(id);
        this.props.history.push('/bookdetail');
    };

    searchHandler = () => {
        const searchText = this.state.searchBookName;
        const queryParams = '?orderBy="name"&startAt="' + searchText + '"&endAt="' 
                                                        + searchText + '\uf8ff"';
        axios.get('books.json' + queryParams)
             .then(res => {
                if (res.data) {
                    const bookList = [];
                    Object.keys(res.data).forEach(index => {
                        bookList.push(res.data[index]);
                    });
                    this.setState({books: bookList});
                }                 
             })
             .catch(err => {
                 console.log(err);
             });
    }

    inputChangeHandler = (event) => {
        this.setState({searchBookName: event.target.value});
    }

    render() {
        let bookList = null;
        if (this.state.books.length > 0) {
            const interimBookList = this.state.books.map(book =>
            <li key={book.id} onClick={() => this.onClickHandler(book.id)} >
                {book.name}
                {/* <button onClick={() => this.onClickHandler(book.id)}>{book.name}</button> */}
            </li>
            );
            bookList = <ul>{interimBookList}</ul>
        }
        return (
            <div className="Input" >
                <input type="text" 
                       onChange={(event) => this.inputChangeHandler(event)}
                       value={this.state.searchBookName} ></input>
                <button onClick={this.searchHandler} >Search</button>
            <div>Please see the list of the Books below</div>
                    {bookList}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetBookId: (bookId) => dispatch(actionCreator.setBookId(bookId))
    }
}

export default  connect(null, mapDispatchToProps)(BookList);