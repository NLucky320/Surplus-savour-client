import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddFoodItem = () => {
  const { user } = useAuth();
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
  const handleAddFoodItem = (event) => {
    event.preventDefault();
    const form = event.target;

    // Retrieve form data
    const food_name = form.food_name.value;
    const food_quantity = form.food_quantity.value;
    const pickup_location = form.pickup_location.value;
    const expired_date = form.expired_date.value;
    const additional_notes = form.additional_notes.value;
    const food_status = form.food_status.value || "available";
    const food_image = form.food_image.value;
    

    const newFoodItem = {
      food_name,
      food_quantity,
      pickup_location,
      expired_date,
      additional_notes,
      food_status,
      food_image,
      donor: {
      name : formData.name,
   email : formData.email,
    photo : formData.photo,
    }
    };
    // console.log(newFoodItem );
    form.reset();
    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFoodItem),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Food item added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className=" mt-6 py-6 text-center ">
      <Helmet>
        <title>Surplus Saver | Add Foods</title>
      </Helmet>
      <div className="bg-[url('../../assets/wave.svg')]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f9a06f"
            d="M0,224L40,202.7C80,181,160,139,240,149.3C320,160,400,224,480,229.3C560,235,640,181,720,176C800,171,880,213,960,192C1040,171,1120,85,1200,58.7C1280,32,1360,64,1400,80L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-[#f9a06f] ">
        <div className="max-w-[800px] mx-auto text-black ">
          <h2 className="font-bold text-[28px] md:text-[40px] pt-4">
            Add Food Item
          </h2>
          <p className="py-4"> </p>
        </div>
        <div className="max-w-[1170px] mx-auto py-4">
          <form onSubmit={handleAddFoodItem}>
          {/* form food_name and food_image row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="food_name"
                  placeholder="Food Name"
                  className="input input-bordered w-full"
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
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form food quantity and pickup location row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="food_quantity"
                  placeholder="Food Quantity"
                  className="input input-bordered w-full"
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
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form expired_date and food_status row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Expired Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="expired_date"
                  placeholder="Expired Date"
                  className="input input-bordered w-full"
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
                  defaultValue="available"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form additional_notes  row */}
          <div className="md:flex mb-8">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Additional notes</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="additional_notes"
                  placeholder="Additional notes"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form name and email row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="displayName"
                  placeholder="Name"
                  value={formData.name}
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
                  value={formData.email}
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  value={formData.photo}
                  placeholder="Image URL"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Food"
            className="btn border-none btn-block bg-black text-white"
          />
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddFoodItem;
