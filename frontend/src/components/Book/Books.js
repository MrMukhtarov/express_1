import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FadeLoader from "react-spinners/FadeLoader";
import Book from './Book'

const override: CSSProperties = {
    display: "block",
    borderColor: "red",
    position: "absolute",
    transform: 'translate(-50%,-50%)',
    top: '50%',
    left: '50%'
  };

  const url = 'http://localhost:3003/books'

const Books = () => {

    const [books, setBooks] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllBooks = async () => {
            const data = await axios.get(url).then(res => {
                setBooks(res.data.books)
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            })
        }
        getAllBooks();
    }, [books])

  return (
    <div className='container'>
        <h3 className='text-center mt-4'>All Books</h3>
        <div className="row">
        {
              loading ? <FadeLoader loading={loading} cssOverride={override} size={60} /> : books && books.map((book,i) => {
                return(
                    <div className='col-lg-4' key={i}>
                        <Book book={books[i]}/>
                    </div>
                )
            })
        }
        </div>
        
    </div>
  )
}

export default Books