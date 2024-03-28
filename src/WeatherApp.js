import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiSlicer } from './store/apiSlice';


const Input = styled(TextField)({
  width: '100%',
});

const SubmitButton = styled(Button)({
  marginTop: '16px',
  width: '100%',
});

const WeatherApp = () => {
  const dispatch = useDispatch()
  const [data,setData] = useState()
  const [city,setCity] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const currentDate = new Date()
  let year = currentDate.getFullYear()
  let month = currentDate.getMonth() +1
  let day = currentDate.getDate() +1
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  let today = `${year}-${month}-${day}`
  console.log(today);

  const fetchData = async (cityname) =>{
  const data = await fetch(`https://api.weatherbit.io/v2.0/history/energy?&city=${cityname}&start_date=2024-03-24&end_date=${today}&threshold=63&units=I&key=6b7e2ed5fc76457386096ab454e930b7&tp=daily`)
  const json = await data.json()
  setData(json)
  console.log(json)
  dispatch(apiSlicer(json))
}
const handleSubmit = (params) =>{
  if(params === ''){
    setError('the input box is empty')
  }
  else{
  fetchData(params)
  navigate(`/weather/${city}`)
  setError('')
  }
}
  return (
    <div className='w-4/12 mx-auto mt-[15%] shadow-lg p-6 rounded-md'>
        <Input
          label="Enter City"
          variant="outlined"
          value={city}
          onChange={(e)=>(setCity(e.target.value))}
        />
        <SubmitButton
          variant="contained"
          color="primary"
          onClick={()=>handleSubmit(city)}
        >
          Get Weather
        </SubmitButton>
        {!city && <p className='text-red-600'>{error}</p>}
        </div>
  );
};

export default WeatherApp;
