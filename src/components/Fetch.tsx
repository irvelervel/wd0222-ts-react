import { useEffect, useState } from 'react'
import { Book } from '../types/Book'
import SingleBook from './SingleBook'

const Fetch = () => {
  // let's fetch the books from the Strivazon project
  // let's put them into a state variable
  // let's map them in the return statement

  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (response.ok) {
        // let's take the books out of the body
        const books = await response.json()
        setBooks(books)
      } else {
        console.log('error happened fetching the books')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>BOOKS FETCHING</h2>
      <div>
        {books.map((book, i) => (
          <SingleBook key={i} book={book} />
        ))}
      </div>
    </div>
  )
}

export default Fetch
