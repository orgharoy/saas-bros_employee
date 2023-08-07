import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

const EditMerchant = () => {
  const userId = useParams();
  const [merchant, setMerchant] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {

      const token = localStorage.getItem('RepeatifyToken');

      try {
        const response = await axios.get(`https://saasproj.bsite.net/api/admin/merchant/${userId.id}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setMerchant(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [userId]);

  
  return (
    <div>EditMerchant</div>
  )
}

export default EditMerchant
