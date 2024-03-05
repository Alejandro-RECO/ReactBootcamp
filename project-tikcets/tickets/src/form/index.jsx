import React, { useState } from 'react';
import { postTickets } from '../services/httpverbs';

import { v4 as uuidv4 } from 'uuid';

const FormTickets = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: '',
    priority: '',
    description: ''
  });

  const [error, setError] = useState({
    title: false,
    priority: false,
    description: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handlePriorityChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      priority: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, priority, description } = formData;

    const newErrors = {
      title: title === '',
      priority: priority === '',
      description: description === ''
    };

    setError(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    postTickets(formData)
  };

  return (
    <form onSubmit={handleSubmit} className='p-7 flex flex-col items-center justify-center gap-y-5 border w-[480px] rounded-xl bg-white'>
      <legend className='w-full font-bold text-2xl text-gray-800 pt-5'>Add Ticket</legend>
      <div className='grid grid-rows-1 w-full'>
        <label className='font-semibold text-lg' htmlFor="title">
          Title
        </label>
        <input
          className={`row-span-1 border-2 p-2 rounded-xl bg-gray-200/25 ${
            error.title ? 'border-red-500' : 'border-gray-300'
          }`}
          type="text"
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
          placeholder='Add the ticket title'
        />
        {error.title && <span className='text-red-600'>This field is required</span>}
      </div>
      <div className='grid grid-rows-1 w-full'>
        <label className='font-semibold text-lg' htmlFor="priority">
          Priority
        </label>
        <select
          className={`row-span-1 border-2 p-2 rounded-xl bg-gray-200/25 ${
            error.priority ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.priority}
          onChange={handlePriorityChange}
          id='priority'
          required
        >
          <option value="0">Select priority</option>
          <option value="1">P1</option>
          <option value="2">P3</option>
          <option value="3">P4</option>
        </select>
        {error.priority && <span className='text-red-600'>This field is required</span>}
      </div>
      <div className='grid grid-rows-1 w-full'>
        <label className='font-semibold text-lg' htmlFor="description">
          Description
        </label>
        <textarea
          className={`row-span-1 border-2 p-2 rounded-xl h-[100px] bg-gray-200/25 ${
            error.description ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder='Add the ticket description'
          name="description"
          value={formData.description}
          onChange={handleChange}
          id="description"
          cols="10"
          rows="10"
        />
        {error.description && <span className='text-red-600'>This field is required</span>}
      </div>
      <div className='flex flex-col w-full items-start gap-2'>
        <label className='font-semibold text-lg' htmlFor="checkbox">
          Mark as resolve
        </label>
        <input id='checkbox' type="checkbox" />
      </div>
      <button className='w-full bg-blue-600 p-2 text-white font-semibold rounded-2xl'>Submit</button>
    </form>
  );
};

export default FormTickets;