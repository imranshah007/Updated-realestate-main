import React, { useState, useEffect, createContext } from 'react';

// impor9ting data from dummy data 
import { housesData } from "../data";

// creatiing contex

export const HouseContext=createContext();
const HContainer = ({ children }) => {
  const [houses, setHouses]=useState(housesData);
  const [country, setCountry]=useState("Location (any)");
  const [countries, setCountries]=useState([]);
  const [property, setProperty]=useState("Property type (any)");
  const [properties, setProperties]=useState([]);
  const [price, setPrice]=useState("Price range (any)");
  const [date, setdate]=useState("Date range (any)");
  const [loading, setLoading]=useState(false);

  // return all countries 

  useEffect(()=>{
    const allCountries=houses.map((house)=>{
      return house.country;
    });
    // console.log(allCountries);
    //remove duplicates;
    const uniqueCountries=['Location (any)', ...new Set(allCountries)]
    // console.log(uniqueCountries);

    // set countries state
    setCountries(uniqueCountries)
  },[houses])
  //add here also ,[] if it is not working

// return all properties
  useEffect(()=>{
    const allProperties=houses.map((house)=>{
      return house.type;
    });
    // console.log(allProperties);
    //remove duplicates;
    const uniqueProperties=['Location (any)', ...new Set(allProperties)]
    // console.log(uniqueProperties);

    // set properties state
    setProperties(uniqueProperties)
   },[houses]);                                            
  //  need to add ,[]

const handleClick=()=>{

 // set loading
 setLoading(true);


  // console.log(country,property,price,date);

  // create a function that checks if the string includesn (any)

  const isDefault=(str)=>{
    return str.split(' ').includes('(any)');

  };
  // console.log(isDefault(country))
// console.log(price)
// get first value of price and parse it to the number
const minPrice =parseInt(price.split(' ')[0]);
// console.log(minPrice)

// get second value of price which is the maximum price  and parse it to the number

const maxPrice =parseInt(price.split(' ')[2]);
// console.log(maxPrice)


// get first value of date and parse it to the number
const minDate =parseInt(date.split(' ')[0]);
// console.log(minDate)

// get second value of price which is the maximum price  and parse it to the number

const maxDate =parseInt(date.split(' ')[2]);
// console.log(maxDate)

// filteron price and date

const newHouses=housesData.filter((house)=>{
  const housePrice=parseInt(house.price);
  const houseDate=parseInt(house.date);

  //if all values are selected 
if
(house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice && houseDate >= minDate && houseDate <= maxDate)
{
  return house;
}
//if all values are default
if(isDefault(country) && isDefault(property) && isDefault(price) && isDefault(date))
{
  return house;
}
// if country is not default
if(!isDefault(country) && isDefault(property) && isDefault(price) && isDefault(date)){
  return house.country === country;
}

// if property is not default
if(!isDefault(property) && isDefault(country) && isDefault(price) && isDefault(date)){
  return house.type === property;
}
// if price is not default

if(!isDefault(price) && isDefault(country) && isDefault(property) && isDefault(date)){
 if(housePrice >=minPrice && housePrice <=maxPrice){
  return house;
 }
}
// if date is not default

if(!isDefault(date) && isDefault(country) && isDefault(property) && isDefault(price)){
  if(houseDate >=minDate && houseDate <=maxDate){
    return house;
}

}
// if country & property is not default
 if(!isDefault(country) && !isDefault(property) && isDefault(price) && isDefault(date)){
  return house.country === country && house.type === property;
 }
// if country & price is not default
if(!isDefault(country) && isDefault(property) && !isDefault(price) && isDefault(date)){
  if(housePrice >= minPrice && housePrice <=maxPrice){
    return house.country === country;
  }
 }
 // if country & date is not default
if(!isDefault(country) && isDefault(property) && isDefault(price) && !isDefault(date)){
  if(houseDate >= minDate && houseDate <=maxDate){
    return house.country === country;
  }
 }

 //if property and price is not default
 
if(isDefault(country) && !isDefault(property) && !isDefault(price) && isDefault(date)){
  if(housePrice >= minPrice && housePrice <=maxPrice){
    return house.type === property;
  }
 }
 //if property and date is not default
 
if(isDefault(country) && !isDefault(property) && isDefault(price) && !isDefault(date)){
  if(houseDate >= minDate && houseDate <=maxDate){
    return house.type === property;
  }
 }
//if price and date is not default
 
if(isDefault(country) && isDefault(property) && !isDefault(price) && !isDefault(date)){
  if(houseDate >= minDate && houseDate <=maxDate){
    return house;
  }
 }
 return("");
});

  setTimeout(()=>{
    return( 
      newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
    setLoading(false)
    );
  }, 1000);

}

  return(
  <HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    date,
    setdate,
    handleClick,
    // loading,

  }}>
    {children}

  </HouseContext.Provider>
  );
};

export default HContainer;
