import { useLoaderData, useNavigate } from "react-router-dom";


const Details = () => {

    const pet = useLoaderData();
    const {breed, date_of_birth, gender, pet_details } = pet.petData;
  
    
    const backNavigate = useNavigate()

    const handleBack = () => {
        backNavigate(-1)
    }

    return (
      <div className="border w-2/4 mx-auto p-6 rounded-md bg-indigo-100 mt-6 space-y-3">
        <h2 className="text-2xl font-semibold">{breed || "N/A"}</h2>
        <p className="font-semibold">Date of Birth: {date_of_birth || "N/A"}</p>
        <p className="font-medium text-gray-800">Gender: {gender || "N/A"}</p>
        <p className="text-gray-700">{pet_details}</p>
        <button
          onClick={handleBack}
          className="bg-cyan-700 px-6 py-2 rounded-md text-white text-lg font-medium"
        >
          Go Back
        </button>
      </div>
    );
}

export default Details;