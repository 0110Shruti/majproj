import React from "react";
import MultiplePizzas from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us : Ensuring Food safety</h1>
        <p>
          1.Food Safety <br></br>
          2.Collection of excess food in clean, sealed containers from food donors<br></br>
          3.Storage and transportation of surplus food under appropriate hygienic conditions, with separate storage for perishable and non-perishable foods<br></br>
          4.Regular cleaning of transportation vehicles exclusively for food delivery<br></br>
          5.Distribution or provision of surplus food to those in need before it expires<br></br>
          6.Efforts to prevent spoiled food, with a preference for alternative solutions like composting and bio-gas plants, avoiding trash cans or landfills<br></br>
          7.Storage of food above ground and away from walls and non-food items<br></br>
          8.Routine cleaning of the storage area, including the floor, pallets, and shelves<br></br>
          9.Tight sealing of storage area doors, windows, and roofs to prevent pests, with a scheduled pest control program<br></br>
          10.Training of staff and volunteers in personal hygiene and sanitation practices for food handling<br></br>
          11.Maintenance of standardized documentation, recording surplus food details, including donor information, locations in need, donation dates, food types, food quantities, and distribution dates.</p>
        <p>
          We kindly ask for your financial or material support so that we can accomplish our goal. The funding would be very helpful in supplying the people, delivery vans, storage space, and infrastructure that are required.
        </p>
      </div>
    </div>
  );
}

export default About;