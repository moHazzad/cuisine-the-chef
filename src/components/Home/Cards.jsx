import React, { useEffect, useState } from "react";
// import imgCard from '../../assets/card.jpg'
import "./card.css";
import chefImage from "../../assets/chef.jpg";
import SingleChefsCard from "./SingleChefsCard";

function Cards() {
  const [chefsCardData, setChefsCardData] = useState();
  const [loading , setLoading] = useState(true)

  useEffect(() => {

    fetch("https://master-cuisine-sever-hazzadmdap-gmailcom.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefsCardData(data));
      setLoading(false)
  }, []);
  return (
    <>
      

      <div className="container  grid md:grid-cols-3 grid-cols-1   gap-7 ">
        {
         chefsCardData && chefsCardData.map(singleChef => <SingleChefsCard singleChef={singleChef}  />)
        }
      </div>
    </>
  );
}

export default Cards;
