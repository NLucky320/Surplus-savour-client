
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Modal from 'react-modal';
import Swal from "sweetalert2";
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

    // Function to format the date to a string
    const formatDate = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
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
const handleRequest = _id => {
    console.log(_id);
    fetch(`http://localhost:5000/foods/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
            const remaining = item.filter(food => food._id !== _id);
            setItem(remaining);
        }
    });
};
    return (
         <div
      key={foodsItem._id}
      className="items-center max-w-xl mx-auto p-4 shadow-md mt-12 md:mt-[80px]"
    >
      {" "}
      <Helmet>
        <title> | Food-Details</title>
      </Helmet>
      <div className="flex space-x-4 pb-6 root">
        <img
          alt=""
          src={foodsItem?.photo}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm font-semibold"
          >
            {foodsItem?.name}
          </a>
          <span className="text-xs dark:text-gray-600">{foodsItem?.email}</span>
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
                  <button  onClick={closeModal} className="font-bold animate__animated animate__pulse animate__infinite  rounded-md px-4 py-2 bg-[#f9a06f] text-[#1e1b4b] relative overflow-hidden group z-0 hover:text-[#1e1b4b] duration-1000">
                <span className="absolute bg-[#ffede2]  size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                  <span className="absolute bg-[#fac0a1] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>close</button>
            </div>
   
        <form >
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
          {/* form food quantity and pickup location row */}
          <div className="md:flex mb-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="food_quantity"
                                    placeholder="Food Quantity"
                                     defaultValue={item?.food_quantity}
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
          {/* form additional_notes  row */}
          <div className="md:flex mb-2">
            <div className="form-control w-1/2 ">
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
            <div className="form-control w-1/2 md:ml-4">
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
          </div>
          {/* form name and email row */}
          <div className="md:flex mb-2">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="displayName"
                  placeholder="Name"
                  value={item?.name}
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                        value={item?.email}
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  value={item?.photo}
                  placeholder="Image URL"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
          </div>
          {/* <input
            type="submit"
            value="Request"
            className="btn border-none btn-block bg-black text-white"
          /> */}
              </form>
              <button  onClick={() => handleRequest(item._id)}  className="btn border-none btn-block bg-black text-white" >request</button>
      </Modal>
    </div>
            </div>
           
    </div>
    );
};

export default ViewDetails;