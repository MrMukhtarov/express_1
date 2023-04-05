import React from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom"

const Book = ({book}) => {

  const {_id,name,author,description,price,avaliable,image} = book
  const history = useNavigate();
  const deleteHamdler =  async (e) => {
    await axios.delete(`http://localhost:3003/books/${_id}`)
    .then(res => res.data)
    .then(() => history('/'))
    .then(() => history('/books'))
  }

  const updateHandler =  async (e) => {
    await axios.put(`http://localhost:3003/books/${_id}`)
    .then(res => res.data)
    .then(() => history('/'))
    .then(() => history('/books'))
  }

  return (
      <div className="card mt-4">
        <Link to={`/details/${_id}`}>
          <img src={image} className="card-img-top w-100" alt="..."/>
        </Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-title">Author: {author}</p>
          <p className="card-title">Price: {price} AZN</p>
          <p className="card-text">{description}</p>
          {
            avaliable ? <p className='bg-success text-white d-inline-block px-3 py-1 rounded-2'>In Stock</p> : <p className='bg-danger text-white d-inline-block px-3 py-1 rounded-2'>Out of Stock</p>
          }
          <br />
          <button onClick={updateHandler} className='btn btn-warning w-100'>Update</button>
          <button onClick={deleteHamdler} className='btn btn-danger w-100 mt-2'>Delete</button>
        </div>
    </div>
  )
}

export default Book