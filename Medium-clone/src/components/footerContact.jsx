import React from 'react';

const FooterContact = ({ contacts }) => {
  return (
    <footer className='w-full border-t flex justify-center'>
      <ul className='w-[730px] flex items-center pt-7 gap-x-4 text-sm text-gray-600'>
        {contacts.map((contact) => (
          <li className='cursor-pointer hover:text-gray-900' key={contact}>
            {contact}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterContact;