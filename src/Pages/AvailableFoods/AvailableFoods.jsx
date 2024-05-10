import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Spinner from '../../Components/Spinner/Spinner';
import { Bounce } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import FeaturedItemCard from '../../Components/Featured Foods/FeaturedItemCard';
import AvailableItemsCard from './AvailableItemsCard';
import { Helmet } from 'react-helmet-async';

const AvailableFoods = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
const [sortOption, setSortOption] = useState('');
const [isTwoColumnLayout, setIsTwoColumnLayout] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);
      const toggleLayout = () => {
    setIsTwoColumnLayout((prevLayout) => !prevLayout);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.food_name.toLowerCase().includes(searchTerm)
  );

  const sortedItems = sortOption === 'asc'
    ? filteredItems.slice().sort((a, b) => new Date(a.expired_date) - new Date(b.expired_date))
    : sortOption === 'desc'
      ? filteredItems.slice().sort((a, b) => new Date(b.expired_date) - new Date(a.expired_date))
      : filteredItems;

  return (
    <div>
      <Helmet>
        <title> | Available Food</title>
      </Helmet>
      {loading ? <Spinner /> : (
              <div>
                  
                  <div className="py-14 text-center">
                         <input
              type="text"
              placeholder="Search by food name"
              className="px-8 py-3 bg-[#f9a06f] text-white rounded"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <select
              className="ml-4 px-8 py-3 bg-[#f9a06f] text-white rounded mt-4"
              onChange={handleSortChange}
              value={sortOption}
            >
              <option value="">Sort by expiration date</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
                <button
              className="px-8 py-3 bg-[#f9a06f] text-white rounded ml-4"
              onClick={toggleLayout}
            >
              {isTwoColumnLayout ? "Switch to 3 Columns" : "Switch to 2 Columns"}
            </button>
         
                  </div>
                  <div>
                   <div className="bg-[url('../../assets/wave.svg')]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#f9a06f"
                  d="M0,224L40,202.7C80,181,160,139,240,149.3C320,160,400,224,480,229.3C560,235,640,181,720,176C800,171,880,213,960,192C1040,171,1120,85,1200,58.7C1280,32,1360,64,1400,80L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div id="food">
              <div className="bg-[#f9a06f]">
                <h2 className="text-center text-2xl lg:text-4xl font-bold text-black ">
                  <Bounce>Available Foods</Bounce>
                </h2>
                <div className={`grid ${isTwoColumnLayout ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6 lg:gap-10 mt-4 lg:mt-10 px-2 lg:px-6`}>
                  {sortedItems.map((item) => (
                  <AvailableItemsCard item={item} key={item._id}></AvailableItemsCard>
                ))}
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f9a06f"
                d="M0,128L34.3,138.7C68.6,149,137,171,206,149.3C274.3,128,343,64,411,42.7C480,21,549,43,617,69.3C685.7,96,754,128,823,128C891.4,128,960,96,1029,112C1097.1,128,1166,192,1234,208C1302.9,224,1371,192,1406,176L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
              ></path>
            </svg>   
             </div>
            
           
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
