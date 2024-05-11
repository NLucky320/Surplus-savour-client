import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Modal from 'react-modal';
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const customStyles = {
  content: {
    top: '57%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ViewDetails = () => {
  let subtitle;
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();
  const { user } = useAuth() || {};
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
        photo: user.photoURL || "",
      });
    }
  }, [user]);

  // Function to format the date to a string
  const formatDate = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const foodsItem = useLoaderData();
  const initialData = useLoaderData();
  const [item, setItem] = useState(initialData);

  useEffect(() => {
    setItem(initialData);
  }, [initialData]);

  const handleFoodRequest = async e => {
    e.preventDefault();
    if (user?.email === foodsItem?.donor?.email) {
      toast.error('Action not permitted!');
      return;
    }
    const form = e.target;
 
    // Retrieve form data
    const food_id = form._id.value;
    const food_name = form.food_name.value;
    const pickup_location = form.pickup_location.value;
    const expired_date = form.expired_date.value;
  const food_status = 'Requested';
  const donor_name = form.donor_name.value;
  const request_date = form.request_date.value;
  const email=form.user_email.value
    const foodItem = {
        food_id,
      food_name,
      pickup_location,
      expired_date,
        food_status,
        donor_name,
        request_date,
      email
  };
    // Send a PATCH request to update the food status to "Requested"
    fetch(`http://localhost:5000/foods/${food_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ food_status: "Requested" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
  
      })
      .catch((error) => {
        console.error("Error updating food status:", error);
      
      });

    // Send a POST request to add the food request to myFoodRequest collection
    fetch("http://localhost:5000/myFoodRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foodItem ),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
          toast.success("Food request added successfully!");
      })
      .catch((error) => {
        console.error("Error adding food request:", error);
      });
  };

  return (
    <div
      key={foodsItem._id}
      className="items-center max-w-xl mx-auto p-4 shadow-md mt-12 md:mt-[80px]"
    >
      <Helmet>
        <title>Surplus Saver | Food-Details</title>
      </Helmet>
      <div className="flex space-x-4 pb-6 root">
        <img
          alt=""
          src={foodsItem?.donor?.photo}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm font-semibold"
          >
            {foodsItem?.donor?.name}
          </a>
          <span className="text-xs dark:text-gray-600">{foodsItem?.donor?.email}</span>
        </div>
      </div>
      <div className="space-y-4 p-4">
        <div>
          <img
            src={foodsItem?.food_image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold dark:text-violet-600">
            Food Name: {foodsItem?.food_name}
          </h3>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold dark:text-violet-600">
            Food Quantity: {foodsItem?.food_quantity}
          </h2>
        </div>
        <div className="space-y-2">
          <p className=" dark:text-violet-600">
            Expired Date: {foodsItem?.expired_date}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm dark:text-violet-600">
            Pickup Location: {foodsItem?.pickup_location}
          </p>
        </div>
        <div className="text-center">
          <button onClick={openModal} className="font-bold animate__animated animate__pulse animate__infinite  rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
            <span className="absolute bg-[#ffede2]  size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            Request
          </button>
        </div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className=" flex items-end justify-end">
              <button onClick={closeModal} className="font-bold animate__animated animate__pulse animate__infinite  rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
                <span className="absolute bg-[#ffede2]  size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>close</button>
            </div>
            <form onSubmit={handleFoodRequest}>
              {/* form food_name and food_image row */}
              <div className="md:flex mb-2">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Food Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="food_name"
                      placeholder="Food Name"
                      defaultValue={item?.food_name}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text">Food Image</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="food_image"
                      placeholder="Food Image"
                      defaultValue={item?.food_image}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </label>
                </div>
              </div>
              {/* form food id and pickup location row */}
              <div className="md:flex mb-2">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Food Id</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="_id"
                      placeholder="FoodId"
                      defaultValue={item?._id}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text">Pickup Location</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="pickup_location"
                      placeholder="Pickup Location"
                      defaultValue={item?.pickup_location}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </label>
                </div>
              </div>
              {/* form expired_date and food_status row */}
              <div className="md:flex mb-2">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Expired Date</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="expired_date"
                      placeholder="Expired Date"
                      defaultValue={item?.expired_date}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text">Food Status</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="food_status"
                      placeholder="Food Status"
                      defaultValue={item?.food_status}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </label>
                </div>
              </div>
              {/* form request date and user email row */}
              <div className="md:flex mb-2">
                <div className="form-control w-1/2 ">
                  <label className="label">
                    <span className="label-text">Request Date</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="request_date"
                      placeholder="Request Date"
                      className="input input-bordered w-full"
                      value={formatDate(currentDate)}
                      readOnly
                    />
                  </label>
                </div>
                <div className="form-control w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="email"
                      name="user_email"
                      value={user?.email}
                      placeholder="Email"
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </label>
                </div>
              </div>
              {/* form name and email row */}
              <div className="md:flex mb-2">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Donor Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="donor_name"
                      placeholder="Name"
                      value={item?.donor.name}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text">Donor Email</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={item?.donor.email}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </label>
                </div>
              </div>
              {/* form additional row */}
              <div className="mb-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Additional notes</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="additional_notes"
                      placeholder="Additional notes"
                      defaultValue={item?.additional_notes}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <input
                type="submit"
                value="Request"
                className="btn border-none btn-block bg-black text-white"
              />
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
