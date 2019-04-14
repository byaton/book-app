import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-books';
import './bookDetail.css';

class BookDetail extends Component {
    state = {
        author: '',
        name: '',
        price: '',
        publisher: ''
    }
    componentDidMount() {
        const id = this.props.bookId;
        const queryParams = '?orderBy="id"&equalTo="' + id + '"';
        axios.get('books.json' + queryParams)
             .then(res => {
                 this.setState({
                     author: res.data[id].author,
                     name: res.data[id].name,
                     price: res.data[id].price,
                     publisher: res.data[id].publisher
                 });
             })
             .catch(err => {
                 console.log(err);
             });
        
    }

    render() {
        let bookDetail = null;
        if (this.state) {
            bookDetail = (<div>
                <div>Author Name: {this.state.author}</div>
                <div>Book Title: {this.state.name}</div>
                <div>Name of the Publisher: {this.state.publisher}</div>
                <div>Price of the book: {this.state.price}</div>
            </div>)
        }
        return (
            <div>
                {bookDetail}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bookId: state.book.bookId
    }
}

export default connect(mapStateToProps)(BookDetail);