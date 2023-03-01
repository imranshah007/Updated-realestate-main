import React, { useState } from "react";
import { Link } from "react-router-dom";

function Favourite() {
  const [toggle, setToggle] = useState("block");
  const fav = () => {
    alert("Property Added to Favourites");
    setToggle("none");
  };
  return (
    <div
      className="flex items-center text-center bg-purple-700 hover:bg-green-900 text-white rounded p-4 text-sm w-[150px] h-[70px] mt-2 ml-20 transition"
      style={{ display: toggle }}
    >
      <Link to="/property/2" onClick={() => fav()}>
        Add to Favourites
      </Link>
    </div>
  );
}

export default Favourite;
