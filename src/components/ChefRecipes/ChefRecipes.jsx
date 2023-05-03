import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {

 /* const [details,setDetails] = useState('') */
  const data = useLoaderData()
  const { chef_name, chef_picture_url } = data;
  console.log(data)

  return (
    <div>
      <div className='mb-5 text-center' >
        <img className='w-full img-thumbnail' style={{ height: "300px", width: "100%" }} src={chef_picture_url} alt="" />
        <p className='text-warning fw-bold fs-4' >{chef_name}</p>
      </div>
      <div>


      </div>
    </div>
  );
};

export default ChefRecipes;