import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import Spinner from '../../Components/Spinner/Spinner';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const ManageMyFood = () => {
    const [items, setItems] = useState([]);
          const [loading, setLoading]=useState(true)
     const { user } = useAuth() || {};
        useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/myFood/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                    setLoading(false)
            });
    }, [user]);
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/foods/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'your art has been deleted',
                                    'success'
                                )
                                const remaining = items.filter(food => food._id !== _id);
                                setItems(remaining)
                            }
                        })
                }
            })
   
       
        };
    return (
       <div className="mt-12 md:mt-[80px] p-6 text-center max-w-[1170px] mx-auto">
      <Helmet>
        <title>Surplus Saver | Manage My Food</title>
      </Helmet>
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-bold text-[28px] md:text-[40px] pt-4">
         My Food Items
        </h2>
        <p className="py-4">
       
        </p>
      </div>

      <div className="overflow-x-auto whitespace-nowrap">
              <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th >Food Image</th>
            <th >Food Name</th>
            <th>Food Quantity</th>
            <th>Food Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="w-100%">

          {loading ? (
            <tr>
              <td colSpan="6">
              <Spinner></Spinner>
              </td>
            </tr>
          ) : (
            items?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="mask mask-squircle w-12 h-12 ">
                    <img src={item?.food_image} alt="image" />
                  </div>
                </td>
                <td >{item?.food_name}</td>
                <td> {item?.food_quantity}</td>
                <td> {item?.food_status}</td>
                <td>   <Link to={`/update-food/${item._id}`}> <button className="btn bg-[#f9a06f] text-white">Update</button></Link></td>
                <td> <button onClick={() => handleDelete(item._id)} className="btn bg-[#f9a06f] text-white">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
</div>
    </div>
    );
};

export default ManageMyFood;