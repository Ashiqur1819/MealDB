import { useNavigate } from "react-router-dom";


const Pet = ({pet}) => {
    const {petId, breed, category, price, image } = pet;

    const DetailsNavigate = useNavigate()

    const handleDetails = () => {
      DetailsNavigate(`/pet/${petId}`);
    }

    return (
      <div className="border p-4 rounded-md">
        <div>
          <img
            src={image}
            className="w-full object-cover rounded-md h-52"
            alt=""
          />
        </div>
        <div className="space-y-3 flex flex-col mt-3">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold">{`${breed || "N/A"}`}</h2>
            <p className="text-gray-600">{category}</p>
            <p className="text-black font-semibold">${price}</p>
          </div>
          <button
            onClick={handleDetails}
            className="bg-teal-600 px-6 py-2 rounded-md text-white font-medium"
          >
            More Details
          </button>
        </div>
      </div>
    );
};

export default Pet;