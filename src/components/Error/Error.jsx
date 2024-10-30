import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


const Error = () => {

    const error = useRouteError()
    console.log(error)

    return (
      <div className="w-full h-svh bg-slate-200 text-center flex flex-col gap-6 items-center justify-center">
        <h2 className="text-3xl font-semibold text-red-700">
          Oops! This page is not available....
        </h2>
        <Link to="/">
          <button className="bg-indigo-400 py-2 px-6 rounded-md text-white font-medium text-lg">
            Back To Home
          </button>
        </Link>
      </div>
    );
};

export default Error;