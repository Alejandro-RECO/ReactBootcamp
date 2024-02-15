import React from 'react';
import Points from './points';
import Tags from './tags';

const Content = ({
  text, 
  secondText, 
  techniquesCovered,
  moreTechniquesInfo,
  title,
  description,
  useCases,
  secondTitle,
  descriptionTwo,
  image,
}) => {
  return (
    <article className='mt-11 font-serif text-xl text-text'>
      <section aria-labelledby="main-content-title">
        <h1 id="main-content-title" className='text-2xl font-bold font-sans'>{title}</h1>
        <p className='text-text pb-12'>{text}</p>
        <p>{secondText}</p>
      </section>

      <section className='mt-4'>
        <ul className='list-disc p-4 ml-4'>
          {techniquesCovered.map((technique, index) => (
            <li key={index} className='my-2'>{technique}</li>
          ))}
        </ul>
        <p>{moreTechniquesInfo}</p>
      </section>
      <section>
        <pre className="bg-gray-800 rounded text-white font-mono text-base p-4 overflow-x-auto my-6">
          <code>
          {
`// Example Code

const debounce = (callback, time = 300) => {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, time);
  };
};`
          }
          </code>
        </pre>
      </section>

      <Points/>

      <section aria-labelledby="secondary-content-title">
        <h2 id="secondary-content-title" className='text-2xl font-bold font-sans'>{secondTitle}</h2>
        <p>{descriptionTwo}</p>
      </section>


      <figure className='py-6 flex items-center justify-center'>
        <img src={image} alt="Descriptive alt text" />
      </figure>
      <p>{description}</p>

    </article>
  )
}

export default Content;