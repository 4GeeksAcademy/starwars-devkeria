// Import React hooks and your reducer & initial store
import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store";

// Create the global context
const StoreContext = createContext();

// This Provider wraps your entire app
export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  // === ACTIONS ===

  // Fetch people
  async function getPeople() {
    const res = await fetch("https://www.swapi.tech/api/people");
    const data = await res.json();
    const people = await Promise.all(
      data.results.map(async (person) => {
        const res = await fetch(person.url);
        const details = await res.json();
        return details.result;
      })
    );
    dispatch({ type: "set_people", payload: people });
  }

  // Fetch vehicles
  async function getVehicles() {
    const res = await fetch("https://www.swapi.tech/api/vehicles");
    const data = await res.json();
    const vehicles = await Promise.all(
      data.results.map(async (vehicle) => {
        const res = await fetch(vehicle.url);
        const details = await res.json();
        return details.result;
      })
    );
    dispatch({ type: "set_vehicles", payload: vehicles });
  }

  // Fetch planets
  async function getPlanets() {
    const res = await fetch("https://www.swapi.tech/api/planets");
    const data = await res.json();
    const planets = await Promise.all(
      data.results.map(async (planet) => {
        const res = await fetch(planet.url);
        const details = await res.json();
        return details.result;
      })
    );
    dispatch({ type: "set_planets", payload: planets });
  }

  // Add favorite
  function addFavorite(item) {
    dispatch({ type: "add_favorite", payload: item });
  }

  // Remove favorite
  function removeFavorite(item) {
    dispatch({ type: "remove_favorite", payload: item });
  }

  // Make all store and actions available to the app
  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch,
        getPeople,
        getVehicles,
        getPlanets,
        addFavorite,
        removeFavorite
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

// Custom hook to use global state and actions anywhere
export default function useGlobalReducer() {
  return useContext(StoreContext);
}
