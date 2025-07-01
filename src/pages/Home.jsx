import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

// ✅ Bootstrap imports — use Bootstrap classes only, or import Bootstrap React if you prefer


export const Home = () => {
  const {
    store,
    getPeople,
    getVehicles,
    getPlanets,
    addFavorite,
    removeFavorite,
  } = useGlobalReducer();

  // Fetch Star Wars data on first page load
  useEffect(() => {
    getPeople();
    getVehicles();
    getPlanets();
  }, []);

  return (
    <div className="container my-5">

      {/* === PEOPLE === */}
      <h2 className="mb-3">People</h2>
      <div className="row">
        {store.people.map((item) => (
          <div key={item.uid} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                className="card-img-top"
                alt={item.properties.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.properties.name}</h5>
                <Link
                  to={`/details/people/${item.uid}`}
                  className="btn btn-primary me-2"
                >
                  Details
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    addFavorite({
                      id: item.uid,
                      type: "people",
                      name: item.properties.name,
                    })
                  }
                >
                  ⭐
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === VEHICLES === */}
      <h2 className="mb-3 mt-5">Vehicles</h2>
      <div className="row">
        {store.vehicles.map((item) => (
          <div key={item.uid} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
                className="card-img-top"
                alt={item.properties.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.properties.name}</h5>
                <Link
                  to={`/details/vehicles/${item.uid}`}
                  className="btn btn-primary me-2"
                >
                  Details
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    addFavorite({
                      id: item.uid,
                      type: "vehicles",
                      name: item.properties.name,
                    })
                  }
                >
                  ⭐
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === PLANETS === */}
      <h2 className="mb-3 mt-5">Planets</h2>
      <div className="row">
        {store.planets.map((item) => (
          <div key={item.uid} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                className="card-img-top"
                alt={item.properties.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.properties.name}</h5>
                <Link
                  to={`/details/planets/${item.uid}`}
                  className="btn btn-primary me-2"
                >
                  Details
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    addFavorite({
                      id: item.uid,
                      type: "planets",
                      name: item.properties.name,
                    })
                  }
                >
                  ⭐
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
