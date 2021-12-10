import React from "react";
import { VectorMap } from "react-jvectormap";
const { getCode } = require("country-list");
/*console.log(getName("IS")); // Iceland
console.log(getCode("Iceland")); // IS
console.log(getData()); //gets an array of all countries names & codes: [{code: "AU", name: "Australia"}, ...]
*/
const mapData = {
  ZA: 0,
};

const handleClick = (e, countryCode) => {
  //console.log(countryCode);
};
console.log(getCode('South Africa'))
const Map = () => {
  return (
    <div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to ocean blue: 
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        onRegionClick={handleClick} //gets the country code
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "black",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer",
          },
          selected: {
            fill: "#0A6ED1", //color for the clicked country
          },
          selectedHover: {},
        }}
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#146804", "#ff0000"], //your color game's here
              normalizeFunction: "polynomial",
            },
          ],
        }}
      />
    </div>
  );
};

export default Map;
