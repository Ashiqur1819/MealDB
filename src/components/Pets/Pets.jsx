import { useLoaderData } from "react-router-dom";
import Pet from "../Pet/Pet";


const Pets = () => {

    const {pets} = useLoaderData()
    

    return (
        <div>
            <h2 className="text-3xl font-semibold text-center mt-6">Available Pets: {pets.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {
                    pets.map((pet, index) => <Pet pet={pet} key={index}></Pet>)
                }
            </div>
        </div>
    );
};

export default Pets;