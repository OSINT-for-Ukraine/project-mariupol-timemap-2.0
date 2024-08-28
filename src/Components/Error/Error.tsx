import "./error.css";
import { Link, useRouteError } from "react-router-dom";

type RouterError = {
  status?: number;
  data?: string;
};

export const ErrorComponent = () => {
  const error = useRouteError() as RouterError;

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-status">{error.status}</h1>
        <h2 className="error-message">{error.data}</h2>
        <Link className="home-link" to="/">
          Go home
        </Link>
      </div>
    </div>
  );
};
