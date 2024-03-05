import axios from 'axios';
import { useEffect, useState } from 'react';

const baseURL = "http://localhost:3000/tickets";

export const getTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        const data = response.data;
        setTickets(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return tickets;
};


export const postTickets = (data) =>{

  useEffect(() =>{
    const postData = async ()=>{
      try{
        const response = await axios.post(baseURL, {
          id: data.id,
          title: data.title,
          priority: data.priority,
          description: data.description
        })
        console.log("POST 200", response);
      }catch(e){
        console.error("ERROR POST:", e);
      }
    }

    postData();

  },[])
}