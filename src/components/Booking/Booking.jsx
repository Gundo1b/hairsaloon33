import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const hairstyles = [
    { id: 1, name: 'Classic Cut', price: 25 },
    { id: 2, name: 'Buzz Cut', price: 20 },
    { id: 3, name: 'Bob Cut', price: 40 },
    { id: 4, name: 'Long Layers', price: 50 },
  ];

  const [selectedStyles, setSelectedStyles] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleStyleSelect = (id) => {
    setSelectedStyles((prev) =>
      prev.includes(id) ? prev.filter((styleId) => styleId !== id) : [...prev, id]
    );
  };

  const calculateTotal = () =>
    selectedStyles.reduce((total, id) => total + hairstyles.find((style) => style.id === id).price, 0);

  return (
    <div className="containerb">
      <h2>Booking</h2>
      <form>
        <div className="hairstyles">
          <label>Select Hairstyles:</label>
          {hairstyles.map((style) => (
            <div key={style.id} className="hairstyle-row">
              <div className="hairstyle-info">
                <input
                  type="checkbox"
                  id={`style-R{style.id}`}
                  onChange={() => handleStyleSelect(style.id)}
                />
                <label htmlFor={`style-R{style.id}`}>{style.name}</label>
              </div>
              <div className="hairstyle-price">R{style.price}</div>
            </div>
          ))}
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="total-cost">
          <h4>Total Cost: R{calculateTotal()}</h4>
        </div>
        <button type="submit" className="submit-button">Book Appointment</button>
      </form>
    </div>
  );
}

export default Booking;
