import React from "react";
import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";



const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>

            <div>
              <button 
               type="button" 
               className="edit-btn"
               onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>

              <button 
               type="button" 
               className="delete-btn"
               onClick={() => removeItem(id)}
              >
                <BsTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
