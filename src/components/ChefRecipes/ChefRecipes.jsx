import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {

  const [details,setDetails] = useState('')

  const data = useLoaderData()
  const { chef_name } = data;
  console.log(data)

  /* console.log(details); */
 /*  const { id } = useParams()
  console.log(id); */
  /* useEffect(() => {
    fetch(`http://localhost:5000/viewRecipes/:${id}`)
    
  },[]) */
  return (
    <div>
      <h1>{chef_name}</h1>
     
     
    </div>
  );
};

export default ChefRecipes;