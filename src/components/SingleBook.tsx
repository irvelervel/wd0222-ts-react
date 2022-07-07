import { Book } from '../types/Book'

interface SingleBookProps {
  book: Book
}

const SingleBook = ({ book }: SingleBookProps) => {
  return (
    <div>
      <img
        src={book.imageUrl}
        alt="book pic"
        style={{ width: '150px', height: 'auto' }}
      />
      <h3>{book.title}</h3>
      <p>{book.price}</p>
    </div>
  )
}

export default SingleBook
