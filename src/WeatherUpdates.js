import React from 'react'
import { useSelector } from 'react-redux'
import { IoIosPartlySunny } from "react-icons/io";
import { FaCloudSunRain } from "react-icons/fa6";
import { BsSnow3 } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import { IoPlaySkipBack } from "react-icons/io5";
import { Link } from 'react-router-dom';


const WeatherUpdates = () => {
  const selector = useSelector((store)=>store.apiReducer.data)
  console.log(selector);
  if(!selector) return
  const currentDate = new Date()
  let year = currentDate.getFullYear()
  let month = currentDate.getMonth() +1
  let day = currentDate.getDate()
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  let today = `${year}-${month}-${day}`
  function temperature(temp) {
    let temperature = Math.floor((temp - 32) * 5/9)
    return temperature
  }
  const filteredData = selector.data.filter((data)=>data.date === today)
  console.log("filteredData : ",filteredData);
  return (
    <div className=''> 
    <div className='flex my-6 mx-2'>
    <Link to='/' className='bg-gray-700 text-white rounded-full p-4' ><IoPlaySkipBack size={15}/></Link>
    <p className='bg-gray-700 p-4 text-center w-[75%] mx-auto  text-white rounded-md'>{selector.city_name}/{selector.country_code}</p>
      
    </div>
    
      <h1 className='text-center text-3xl font-bold '>Today</h1>
      <div className='flex justify-center my-4'>
      {
        filteredData.map((data=><div>
          {temperature(data.temp) > 30 ? <FaSun size={100} className='text-red-600'/> : temperature(data.temp) >=20 ? <IoIosPartlySunny size={100} className='text-orange-400'/> : temperature(data.temp) >=10 ? <FaCloudSunRain size={100} className='text-yellow-200'/> : <BsSnow3 size={100} className='text-blue-200'/>}
          <p>Humtity : {data.rh}</p> <p>Temperature : {temperature(data.temp)} C</p> <p>WindSpeed : {data.wind_spd}</p>
        <p>SunHours : {data.sun_hours}</p><p>Clouds : {data.clouds}</p></div>
        ))
      }
      </div>
      <div className='my-8'>
      <h1 className='text-center text-3xl font-bold'>This week</h1>
      <div className='md:flex md:flex-wrap md:justify-center'>
        
      {selector.data.map((data=><div key={data.id} className='p-4 bg-gray-200 border m-4 rounded-md'>
        <p className='font-bold'>{data.date}</p>
        <p>Humtity : {data.rh}</p> <p>Temperature : {Math.floor((data.temp-32)*5/9)}</p> <p>WindSpeed : {data.wind_spd}</p></div>
      ))}
      </div>
      </div>
    </div>
  )
}

export default WeatherUpdates