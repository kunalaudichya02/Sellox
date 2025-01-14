import { useSelector } from "react-redux"
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const { isAuthenticated } = useSelector((state) => state.card);
  // const { userdata } = useSelector((state) => state.card);
  // console.log(userdata.user)
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object from the form data
    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://localhost:3000/user/sell', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    navigate("/");
  };

  return (
    <>{
      isAuthenticated ?
        <div className="w-full px-6 ">
          <div className="flex justify-center items-center w-full h-screen bg-transparent">
            <form encType="multipart/form-data" className="flex flex-col w-full max-w-md p-6 bg-white rounded-lg shadow-xl" onSubmit={handleSubmit}>
              <p className=" text-center text-3xl mb-7 leading-8  font-sans font-semibold">Sell your items</p>

              <label htmlFor="productName" className="block font-medium text-gray-900 mb-2">Productname</label>
              <input type="text" name="productName" id="productName" required className="block w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-[#B4B4B8] hover:shadow-md" />

              <label htmlFor="image" className="block font-medium text-gray-900 mb-2">Upload Image:</label>
              <input type="file" name="image" id="image" accept="image/*" required className="block w-full text-sm text-slate-500 file:mr-4 file:py-1 mb-5 file:px-4 file:rounded-md  file:border-0 file:font-semibold file:bg-gray-700 file:text-white file:text-xl ring-hover:file:bg-violet-100" />

              <div className="flex flex-row">
                <div className="flex flex-col mr-2">
                  <label htmlFor="sellerName" className="block font-medium text-gray-500 mb-2">Sellername</label>
                  <input type="text" name="sellerName" id="sellerName" required className="block w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-[#B4B4B8] hover:shadow-md" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phoneNo" className="block font-medium text-gray-500 mb-2">Contact details</label>
                  <input type="number" name="phoneNo" id="phoneNo" required className="block w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-[#B4B4B8] hover:shadow-md" />
                </div>
              </div>

              <label htmlFor="details" className="block font-medium text-gray-500 mb-2">Details:</label>
              <textarea className="block w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-[#B4B4B8]  hover:shadow-md" rows="4" cols="50" name="details" id="details" required></textarea>

              <label htmlFor="price" className="block font-medium text-gray-500 mb-2">price</label>
              <input type="number" name="price" id="price" required className="block w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-[#B4B4B8] hover:shadow-md" />

              <button type="submit" className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 hover:shadow-xl text-white font-bold rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">Post now</button>
            </form>
          </div>
        </div>
        : <Login />
    }
    </>
  )
}

export default Sell
