import React, { useState } from "react";
import axios from "axios";

const RegisterDriver = () => {
  const [driverName, setDriverName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [license, setLicense] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = `https://digitekisi.onrender.com/api/driver/become?userId=2394ce0f-ee50-470d-8249-be0daa0522f`;

    try {
      const response = await axios.post(url, {
        driverName,
        telephone,
        license,
      });

      console.log(response.data);
      // Reset form fields
      setDriverName("");
      setTelephone("");
      setLicense("");
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  const handleCancel = () => {
    setDriverName("");
    setTelephone("");
    setLicense("");
    setErrorMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 flex flex-col items-center"
    >
      <h2 className="text capitalize text-4xl text-left text-[#00BFA5]">
        become a tekisi <span className="text-[#ff9f00]">man</span>
      </h2>
      <div className="max-w-md min-w-[30rem]">
        <label htmlFor="driverName" className="block text-sm font-medium">
          Driver Name
        </label>
        <input
          id="tekisiName"
          name="tekisiName"
          value={driverName}
          onChange={(event) => setDriverName(event.target.value)}
          className="mt-2 px-2 p-2 block w-full border border-[#ff9f00] rounded-2xl"
        />
      </div>

      <div className="max-w-md min-w-[30rem]">
        <label htmlFor="telephone" className="block text-sm font-medium">
          Telephone Number
        </label>
        <input
          id="telephone"
          name="telephone"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
          className="mt-2 px-2 p-2 block w-full border border-[#ff9f00] rounded-2xl"
        />
      </div>

      <div className="max-w-md min-w-[30rem]">
        <label htmlFor="license" className="block text-sm font-medium">
          Car Driver License Number
        </label>
        <input
          id="licenceNum"
          name="licenceNum"
          value={license}
          onChange={(event) => setLicense(event.target.value)}
          className="mt-2 px-2 p-2 block w-full border border-[#ff9f00] rounded-2xl"
        />
      </div>

      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}

      <div className="mt-4 flex justify-between space-x-2">
        <button
          type="button"
          onClick={handleCancel}
          className="px-6 py-2 bg-[#00BFA5] border border-gray-300 rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#ff9f00] text-black rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegisterDriver;
