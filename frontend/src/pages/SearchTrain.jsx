import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchTrain() {

    const navigate = useNavigate();

    const [search, setSearch] = useState({
        source: "",
        destination: "",
        date: "",
        classType: "Sleeper",
        quota: "General"
    });

    const stations = [
        "Hyderabad",
        "Chennai",
        "Bangalore",
        "Delhi",
        "Mumbai"
    ];

    const classes = [
        "Sleeper",
        "3A",
        "2A"
    ];

    const quotas = [
        "General",
        "Tatkal"
    ];

    const change = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    const searchTrain = () => {

        localStorage.setItem(
            "search",
            JSON.stringify(search)
        );

        navigate("/results");
    };

    return (

        <div className="search-page">

            <div className="search-card">

                <div className="search-header">

                    <div className="train-logo">
                        🚆
                    </div>

                    <h1>Search Trains</h1>

                    <p>
                        Select your journey details
                    </p>

                </div>

                <div className="form-group">

                    <label>📍 Source Station</label>

                    <select
                        name="source"
                        value={search.source}
                        onChange={change}
                    >
                        <option value="">Select Source</option>

                        {stations.map((station) => (
                            <option key={station}>
                                {station}
                            </option>
                        ))}
                    </select>

                    <label>📍 Destination Station</label>

                    <select
                        name="destination"
                        value={search.destination}
                        onChange={change}
                    >
                        <option value="">Select Destination</option>

                        {stations.map((station) => (
                            <option key={station}>
                                {station}
                            </option>
                        ))}
                    </select>

                    <label>📅 Journey Date</label>

                    <input
                        type="date"
                        name="date"
                        value={search.date}
                        onChange={change}
                    />

                    <label>🎫 Class</label>

                    <select
                        name="classType"
                        value={search.classType}
                        onChange={change}
                    >
                        {classes.map((item) => (
                            <option key={item}>
                                {item}
                            </option>
                        ))}
                    </select>

                    <label>🛡️ Quota</label>

                    <select
                        name="quota"
                        value={search.quota}
                        onChange={change}
                    >
                        {quotas.map((item) => (
                            <option key={item}>
                                {item}
                            </option>
                        ))}
                    </select>

                    <button onClick={searchTrain}>
                        🔍 Search Trains
                    </button>

                </div>

            </div>

        </div>

    );
}

export default SearchTrain;