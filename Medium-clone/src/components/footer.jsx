import React from 'react'
import UserFooter from './userFooter'
import FooterTarget from './footerTarget'
import FooterContact from './footerContact'

const Footer = ({
  userImage,
  username,
  globantImage,
  ulrLinked,
  cardImage,
  cardTitle,
  cardDescription,
  targetDate,
  contacts
}) => {
  return (
    <>
      <footer className='bg-gray-100/50'>
        <div className='flex flex-col items-center py-11'>
          <UserFooter 
            userImage={userImage} 
            username={username}
            globantImage={globantImage}
            ulrLinked={ulrLinked}  
          />
          <FooterTarget
            cardImage={cardImage}
            cardTitle={cardTitle}
            userImage={userImage}
            userName={username}
            cardDescription={cardDescription}
            targetDate={targetDate}
          /> 
          <FooterContact
            contacts={contacts}
          />
        </div>
      </footer>
    
    </>
  )
}

export default Footer
