import React from 'react';
import Target from './target';

const FooterTarget = ({
  userName,
  userImage,
  cardImage,
  cardTitle,
  cardDescription,
  targetDate
}) => {
  return (
    <section className='w-[720px] mb-4'>
      <h2 className='py-3 text-lg font-bold text-gray-800'>More from {userName} and Globant</h2>
      <div className='flex flex-wrap justify-center items-center gap-x-4 gap-y-8'>
        {/* Los componentes Target se asumen que son tarjetas de contenido relacionado */}
        <Target
          userName={userName}
          cardDescription={cardDescription}
          cardImage={cardImage}
          cardTitle={cardTitle}
          targetDate={targetDate}
          userImage={userImage}
        />
        <Target
          userName={userName}
          cardDescription={cardDescription}
          cardImage={cardImage}
          cardTitle={cardTitle}
          targetDate={targetDate}
          userImage={userImage}
        />
        <Target
          userName={userName}
          cardDescription={cardDescription}
          cardImage={cardImage}
          cardTitle={cardTitle}
          targetDate={targetDate}
          userImage={userImage}
        />
        <Target
          userName={userName}
          cardDescription={cardDescription}
          cardImage={cardImage}
          cardTitle={cardTitle}
          targetDate={targetDate}
          userImage={userImage}
        />
        {/* Repetir el componente Target según sea necesario */}
      </div>
    </section>
  );
};

export default FooterTarget;