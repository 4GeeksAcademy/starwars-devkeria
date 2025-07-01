import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, removeFavorite } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars App</span>
        </Link>
        <div className="ml-auto dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites ({store.favorites.length})
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites.length === 0 ? (
              <li className="dropdown-item text-muted">No favorites</li>
            ) : (
              store.favorites.map((fav, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  <Link to={`/details/${fav.type}/${fav.id}`} className="me-2">
                    {fav.name}
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFavorite(fav)}
                  >
                    🗑️
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
