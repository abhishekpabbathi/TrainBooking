import { useState } from "react";
import API from "../services/api";

function AdminTrains() {
  const [train, setTrain] = useState({
    trainNumber: "",
    trainName: "",
    source: "",
    destination: "",
    departure: "",
    arrival: "",
    availableSeats: 50,
    classes: ["SL", "3A"],
  });

  const change = (e) => {
    const { name, value } = e.target;

    setTrain((previousTrain) => ({
      ...previousTrain,
      [name]: value,
    }));
  };

  const addTrain = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      await API.post(
        "/train/add",
        train,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Train Added Successfully");

      setTrain({
        trainNumber: "",
        trainName: "",
        source: "",
        destination: "",
        departure: "",
        arrival: "",
        availableSeats: 50,
        classes: ["SL", "3A"],
      });
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed"
      );
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Admin Add Train 🚆</h1>

        <input
          name="trainNumber"
          placeholder="Train Number"
          value={train.trainNumber}
          onChange={change}
        />

        <input
          name="trainName"
          placeholder="Train Name"
          value={train.trainName}
          onChange={change}
        />

        <input
          name="source"
          placeholder="Source"
          value={train.source}
          onChange={change}
        />

        <input
          name="destination"
          placeholder="Destination"
          value={train.destination}
          onChange={change}
        />

        <input
          name="departure"
          placeholder="Departure"
          value={train.departure}
          onChange={change}
        />

        <input
          name="arrival"
          placeholder="Arrival"
          value={train.arrival}
          onChange={change}
        />

        <input
          type="number"
          name="availableSeats"
          placeholder="Seats"
          value={train.availableSeats}
          onChange={change}
        />

        <button onClick={addTrain}>
          Add Train
        </button>
      </div>
    </div>
  );
}

export default AdminTrains;