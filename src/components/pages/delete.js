import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMotorcycle } from '../../redux/motorcycles/motorcycleSlice';
import Navbar from '../navbar';

import '../../stylesheets/delete.css';

const Delete = () => {
  const dispatch = useDispatch();
  const initialItems = useSelector((state) => state.state.motorcycles.motorcycles);
  const [items, setItems] = useState(initialItems);

  const handleDelete = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);

    dispatch(deleteMotorcycle(itemId));

    setItems(updatedItems);
  };

  return (
    <div className="delete-main-container">
      <section className="delete-nav-container">
        <Navbar />
      </section>

      <section className="delete-body">
        <h2>List of Items</h2>
        <table className="delete-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Motorcycle Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr className="delete-item">
                <td colSpan="3">No motorcycles available!</td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id} className="delete-item">
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Delete;
