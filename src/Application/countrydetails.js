import React, { useEffect, useState } from 'react';
import { Link ,useParams} from 'react-router-dom';


const CountryDetails = () =>
{
    const {name}=useParams();   
    const [isError,setIsError]=useState(false); 
    const [countries,setCountries]=useState(null);
    let searchAPI='https://restcountries.eu/rest/v2/name/'+ name +'?fullText=true' ;
    
    useEffect(()=>{
        async function getCountryList (){
            try{
                const response = await fetch(searchAPI);
                const data=await response.json();
                if(data)
                {
                    
                    setCountries(data[0]);
                    console.log(countries);
                }
            
           
            }
            catch(error)
            {

            }
        }
        getCountryList();
    },[name])
   if(!countries)
   {
       return <>
       <div className='preloader'>
         <div className='loader'></div>
       </div>
           </>
   }
    return <>
    <div className='card'>
        
        <div className='country'>
          <img src={countries.flag} alt={countries.name}></img>
          <div className='country-info'>
            <h3>
              <span className='country-data'>{name}</span> 
            </h3>
            <p>
              <span className='country-data'>Population :</span> {countries.population}
            </p>
            <p>
              <span className='country-data'>Region :</span> {countries.region}
            </p>
            <p>
              <span className='country-data'>Native Name :</span> {countries.nativeName}
            </p>
            <p>
              <span className='country-data'>Area :</span> {countries.area}
            </p>
            <p>
              <span className='country-data'>Alternate names :</span>
              {countries.altSpellings.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
         

        </div>
        <Link to='/' className='btn btn-primary'>
           Back
        </Link>
        <div>
          <h2></h2>
          </div>        
      </div>
    
    </>
}

export default CountryDetails;