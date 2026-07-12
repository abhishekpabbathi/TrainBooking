import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function TrainResults() {
  const navigate = useNavigate();

  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  const search = JSON.parse(localStorage.getItem("search"));

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        if (!search) {
          navigate("/search");
          return;
        }

        const response = await API.get(
          `/train/search?source=${search.source}&destination=${search.destination}`
        );

        setTrains(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrains();
  }, []);

  const bookTrain = (train) => {
    localStorage.setItem(
      "selectedTrain",
      JSON.stringify(train)
    );

    localStorage.setItem(
      "selectedClass",
      JSON.stringify(search.classType)
    );

    localStorage.setItem(
      "selectedQuota",
      JSON.stringify(search.quota)
    );

    localStorage.setItem(
      "journeyDate",
      JSON.stringify(search.date)
    );

    navigate("/passenger");
  };

  if (loading) {
    return (
      <h2 className="loading">
        Loading trains...
      </h2>
    );
  }

  return (
    <div className="train-page">
      <div className="train-header">
        <h1>🚆 Available Trains</h1>

        <p>
          Choose your train and continue booking
        </p>
      </div>

      {trains.length === 0 ? (
        <div className="no-train">
          No trains found
        </div>
      ) : (
        trains.map((train) => (
          <div
            className="train-ticket"
            key={train._id}
          >
            <div className="train-title">
              <h2>
                {train.trainNumber} - {train.trainName}
              </h2>

              <span>Available</span>
            </div>

            <div className="route">
              <div>
                <h3>{train.source}</h3>

                <p>
                  Departure
                  <br />
                  <b>{train.departure}</b>
                </p>
              </div>

              <div className="arrow">
                →
              </div>

              <div>
                <h3>{train.destination}</h3>

                <p>
                  Arrival
                  <br />
                  <b>{train.arrival}</b>
                </p>
              </div>
            </div>

            <div className="train-info">
              <div>
                💺
                <br />
                Seats
                <br />
                <b>{train.availableSeats}</b>
              </div>

              <div>
                🎫
                <br />
                Class
                <br />
                <b>
                  {train.classes.join(", ")}
                </b>
              </div>

              <div>
                🛡️
                <br />
                Quota
                <br />
                <b>General</b>
              </div>
            </div>

            <button
              onClick={() => bookTrain(train)}
            >
              Book Now
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TrainResults;