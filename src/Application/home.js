import React, { useState, useEffect  } from 'react';
// import { useFetch } from './useFetch';
import { Link } from 'react-router-dom';

const url = 'https://restcountries.eu/rest/v2/all';



const CountryData = () => {
    const [searchText,setSearchtext]=useState('');
    const [isError,setIsError]=useState(false); 
    const [isLoading,setIsLoading]=useState(true);
    const searchCountry = async(e) =>
    {
        
        setSearchtext(e.target.value);
       

        if(e.target.value==='')
        {
        getCountryList();
        }
        else
        {
        
      let searchAPI='https://restcountries.eu/rest/v2/name/'+ e.target.value;  
      await fetch(searchAPI).then((resp)=>{if(resp.status>=200 && resp.status<=299)
      {
        setIsError(false);
        setIsLoading(false);
        return resp.json();
      }
      else{
        setIsError(true);
      }
    }).then((country)=>
    {
      
      const countryList=country;
      setCountries(countryList);
      setIsLoading(false);
     
    });
    }
    }
    const [countries,setCountries]=useState([]);
    const getCountryList = async() => {
      const response = await fetch(url);
      const countriesList = await response.json();
      setCountries(countriesList);
      setIsLoading(false);
    }  
    useEffect(()=>{
        getCountryList();
     },[url]);
    // const {countries}=useFetch(url);
    
  return <>
  <div className='headingContainer'>
    
  <h2>WHAT ARE YOU LOOKING FOR?</h2>
  <br/>
  <input type='text' placeholder='Search' value={searchText}  onChange={searchCountry}></input>

  </div>
  {isLoading?
      <div className='preloader'>
        <div className='loader'></div>
      </div>

    :
  <ul className="users">
  { countries && countries.map ((country) =>{
    const {alpha3Code,name,region,flag} =country;
    return (
    <li key={alpha3Code}>
      <img src={flag} alt={alpha3Code}/>
      <img src={flag} className='blur' alt={alpha3Code}/>
      <div>
        <h4>{name}</h4>
        <h6>{region}</h6>
        <Link to={`/countrydetails/${name}`}>View Details</Link>
        {/* <button type='button'>View Details</button> */}
      </div>
    </li>);
  })}
  </ul>
  }
  </>
};

export default CountryData;
