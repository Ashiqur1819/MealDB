import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
      <div className="container mx-auto px-24">
        <div>
          <Header></Header>
          {/* <div className="bg-purple-100 py-24 mt-6">
            <h1 className="text-center font-bold text-5xl">
              This is our HOME PAGE
            </h1>
          </div> */}
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Home;