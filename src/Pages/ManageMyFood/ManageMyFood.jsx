import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import Spinner from "../../Components/Spinner/Spinner";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Bounce } from "react-awesome-reveal";


const ManageMyFood = () => {

  const [items, setItems] = useState([]);

  const { user } = useAuth() || {};
  const axiosSecure = useAxiosSecure();
const { data: fetchedItems, isLoading, refetch } = useQuery(
  {
    queryKey: ["myFood", user?.email], 
    queryFn: async () => {
      const response = await axiosSecure.get(`/myFood/${user?.email}`);
      return response.data;
    },
   
  },
  
);

  const deleteMutation = useMutation({
    mutationFn: (_id) => axiosSecure.delete(`/foods/${_id}`),
    onSuccess: () => {
      Swal.fire("Deleted!", "Your item has been deleted", "success");
      refetch();
    },
    onError: (error) => {
      console.error("Error deleting item:", error);
    },
  });

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f9a06f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(_id); 
      }
    });
  };

  useEffect(() => {
    if (fetchedItems) {
      setItems(fetchedItems);
    }
  }, [fetchedItems]);

 
  const getStatusClass = (status) => {
    switch (status) {
      case 'Available':
        return 'text-green-500';
      case 'Requested':
        return 'text-red-500';
      default:
        return 'text-black';
    }
  };
  if(isLoading) return <Spinner></Spinner>

  return (
    <div className="mt-12 md:mt-[80px] p-6 text-center max-w-[1170px] mx-auto">
      <Helmet>
        <title>Surplus Saver | Manage My Food</title>
      </Helmet>
      <div className="max-w-[800px] mx-auto">
       
         <h2 className="text-center text-2xl mb-4 lg:mb-8 lg:text-4xl font-bold dark:text-[#f9a06f] text-black">
        <Bounce>My Food Items</Bounce>
      </h2>
           
      </div>

      <div className="overflow-x-auto whitespace-nowrap">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Food Quantity</th>
              <th>Food Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="w-100%">
            {
              items?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="mask mask-squircle w-12 h-12 ">
                      <img src={item?.food_image} alt="image" />
                    </div>
                  </td>
                  <td>{item?.food_name}</td>
                  <td>{item?.food_quantity}</td>
                  <td className={getStatusClass(item?.food_status)}>{item?.food_status}</td>
                  <td>
                    <Link to={`/update-food/${item._id}`}>
                      <button className=" text-[#f9a06f] bg-transparent text-2xl ">
                    <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-[#f9a06f] bg-transparent text-2xl"
                    >
             <MdDelete />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFood;