import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Payment() {
  const navigate = useNavigate();

  const [method, setMethod] = useState("UPI");

  const pay = async () => {
    try {
      const train = JSON.parse(
        localStorage.getItem("selectedTrain")
      );

      const passenger = JSON.parse(
        localStorage.getItem("passenger")
      );

      const token = localStorage.getItem("token");

      const booking = await API.post(
        "/booking/create",
        {
          train: train._id,
          passengers: [passenger],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem(
        "booking",
        JSON.stringify(booking.data)
      );

      await API.post(
        "/payment/pay",
        {
          booking: booking.data.booking._id,
          method,
          amount: 500,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/confirmation");
    } catch (error) {
      console.log(error);

      alert("Payment Failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Payment 💳</h1>

        <select
          value={method}
          onChange={(e) =>
            setMethod(e.target.value)
          }
        >
          <option>UPI</option>
          <option>Debit Card</option>
          <option>Credit Card</option>
        </select>

        <h2>Amount ₹500</h2>

        <button onClick={pay}>
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;