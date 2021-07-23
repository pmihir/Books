import React from 'react';
import "./Book.scss";

function Book({ book }) {

    const openBookHandler = () => {
        Object.entries(book.formats).sort().some(([key, value]) => {
            const temp = value.split('.');
            if (temp[temp.length - 1] === 'htm') {
                window.open(value, "_blank");
                return true;
            } else if (temp[temp.length - 1] === 'pdf') {
                window.open(value, "_blank");
                return true;
            } else if (temp[temp.length - 1] === 'txt') {
                window.open(value, "_blank");
                return true;
            }
        })
    }

    return (
        <div className="book-wrapper" onClick={openBookHandler}>
            <img src={book?.formats["image/jpeg"]} alt="" />
            <div className="title">{book?.title}</div>
            <div className="author">{book?.authors && book?.authors[0]?.name}</div>
        </div>
    )
}

export default Book;
