import React, { useState } from 'react';

const CarRentalForm = () => {
  const [pickupDate, setPickupDate] = useState('2024-12-12T12:30');
  const [dropoffDate, setDropoffDate] = useState('2024-12-16T08:30');
  const [location, setLocation] = useState('Paris Orly Aeroport');
  const [vehicleType, setVehicleType] = useState('car');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation: \nLieu: ${location} \nPick-up: ${pickupDate} \nDrop-off: ${dropoffDate} \nVéhicule: ${vehicleType}`);
  };

  return (
    <div>
      <h1>Réservez votre voiture</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Lieu de prise en charge :</label>
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
          />
        </div>

        <div>
          <label>Date de prise en charge :</label>
          <input 
            type="datetime-local" 
            value={pickupDate} 
            onChange={(e) => setPickupDate(e.target.value)} 
          />
        </div>

        <div>
          <label>Date de restitution :</label>
          <input 
            type="datetime-local" 
            value={dropoffDate} 
            onChange={(e) => setDropoffDate(e.target.value)} 
          />
        </div>

        <div>
          <label>Type de véhicule :</label>
          <select 
            value={vehicleType} 
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="car">Voiture</option>
            <option value="SUV">SUV</option>
            <option value="van">Fourgonnette</option>
          </select>
        </div>

        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default CarRentalForm;
