import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Passenger() {
  const navigate = useNavigate();

  const [passenger, setPassenger] = useState({
    name: "",
    age: "",
    gender: "",
    berthPreference: "No Preference",
  });

  const change = (e) => {
    const { name, value } = e.target;

    setPassenger((previousPassenger) => ({
      ...previousPassenger,
      [name]: value,
    }));
  };

  const book = () => {
    if (
      !passenger.name ||
      !passenger.age ||
      !passenger.gender
    ) {
      alert("Please fill all passenger details.");
      return;
    }

    localStorage.setItem(
      "passenger",
      JSON.stringify(passenger)
    );

    navigate("/payment");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Passenger Details</h1>

        <label>Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter Passenger Name"
          value={passenger.name}
          onChange={change}
        />

        <label>Age</label>

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={passenger.age}
          onChange={change}
        />

        <label>Gender</label>

        <select
          name="gender"
          value={passenger.gender}
          onChange={change}
        >
          <option value="">
            Select Gender
          </option>

          <option value="Male">
            Male
          </option>

          <option value="Female">
            Female
          </option>

          <option value="Other">
            Other
          </option>
        </select>

        <label>Berth Preference</label>

        <select
          name="berthPreference"
          value={passenger.berthPreference}
          onChange={change}
        >
          <option value="No Preference">
            No Preference
          </option>

          <option value="Lower">
            Lower
          </option>

          <option value="Middle">
            Middle
          </option>

          <option value="Upper">
            Upper
          </option>

          <option value="Side Lower">
            Side Lower
          </option>

          <option value="Side Upper">
            Side Upper
          </option>
        </select>

        <br />

        <button onClick={book}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default Passenger;