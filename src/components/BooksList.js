import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BookDataService from "../services/books.service";

const BooksList = ({getBookId}) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log("dd", data);
    console.log("ddDATA", data?.docs);

    setBooks(
      data.docs.map((doc) => ({
        
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

    const deleteHandler = async (id) => {
      await BookDataService.deleteBook(id);
      getBooks();
    };
  console.log("books", books);
  return (
    <>
      <div className="mb-2">
        <Button onClick={()=>getBooks()} variant="dark edit">Refresh List</Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((doc, index) => {
            return (
          <tr key={doc.id}>
            <td>{index + 1}</td>
            <td>{doc.title}</td>
            <td>{doc.author}</td>
            <td>{doc.status}</td>
            <td>
              <Button
                variant="secondary"
                className="edit"
                onClick={(e) => getBookId(doc.id)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                className="delete"
                onClick={(e) => deleteHandler(doc.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
           );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default BooksList;
