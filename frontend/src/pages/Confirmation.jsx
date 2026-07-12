import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  const booking = JSON.parse(
    localStorage.getItem("booking")
  );

  return (
    <div className="confirmation-page">
      <div className="ticket-card">
        <div className="success-header">
          <div className="success-icon">
            ✓
          </div>

          <h1>Ticket Confirmed</h1>

          <p>
            Your train booking was successful
          </p>
        </div>

        <div className="ticket-details">
          <div className="detail-row">
            <span>PNR</span>

            <b>
              {booking?.booking?.pnr}
            </b>
          </div>

          <div className="detail-row">
            <span>Booking Status</span>

            <b>
              {booking?.booking?.bookingStatus}
            </b>
          </div>

          <div className="detail-row">
            <span>Payment Status</span>

            <b className="success">
              {booking?.booking?.paymentStatus}
            </b>
          </div>
        </div>

        <div className="thank-you">
          Thank you for booking with
          TrainBooking 🚆
        </div>

        <button
          onClick={() => navigate("/bookings")}
        >
          View My Tickets
        </button>
      </div>
    </div>
  );
}

export default Confirmation;