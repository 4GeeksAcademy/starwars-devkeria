// Import necessary hooks and components
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {
  const { store } = useGlobalReducer();

  // ✅ Correct: get both type and id from URL
  const { type, id } = useParams();

  // ✅ Find the item in the correct category
  const item = store[type]?.find((elem) => elem.uid === id);

  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">{item?.properties?.name || "Not Found"}</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            {item &&
              Object.entries(item.properties).map(([key, value]) => (
                <li key={key} className="list-group-item text-start">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <Link to="/" className="btn btn-primary mt-4">
        Back Home
      </Link>
    </div>
  );
};
