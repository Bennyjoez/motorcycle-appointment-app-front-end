import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postMotorcycles } from '../redux/motorcycles/motorcycleSlice';

const AddMotorcycleForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    amount: '',
    duration: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postMotorcycles(formData));
    navigate('/motorcycles');
  };

  return (
    <div className="form-container">
      <h2>Add Motorcycle</h2>
      <form onSubmit={handleSubmit} id="add-form">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="url"
            name="image"
            placeholder="Image url"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="amount"
            placeholder="Amount Payable"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="duration"
            placeholder="Duration to pay(months)"
            value={formData.duration}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Describe the motorcycle..."
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            cols="5"
            required
          />
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMotorcycleForm;
