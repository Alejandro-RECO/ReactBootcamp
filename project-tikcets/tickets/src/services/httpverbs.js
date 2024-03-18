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
  }, [tickets]);

  return tickets;
};


export const postTickets = async (data) => {
  try {
    const response = await axios.post(baseURL, {
      id: data.id,
      title: data.title,
      priority: data.priority,
      description: data.description,
      done: data.done
    });
    console.log("POST ", response.status);

  } catch (e) {
    console.error("ERROR POST:", e);
  }
};

export const deleteTickets = async (id) => {
  try{
    await axios.delete(`${baseURL}/${id}`);
    console.log("El id: ", id, "Ha sido eliminado");
  }catch (e) {
    console.error("Error al eliminar: ", e);
  }
}