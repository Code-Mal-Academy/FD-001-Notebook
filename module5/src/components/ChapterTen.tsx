import { useRouteError } from "react-router-dom";


const ErrorBoundary = () => {
    const error = useRouteError();
    return <div>Error Occoured: {String(error)}</div>;
}

export default ErrorBoundary