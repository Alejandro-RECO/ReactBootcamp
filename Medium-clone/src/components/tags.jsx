import React from 'react';
import {IconsList} from './spanIcons';
import { RiChat3Line, RiServiceLine, RiFlag2Line, RiPlayCircleLine, RiShareBoxLine } from "react-icons/ri";

const Tags = ({ tags }) => {
  return (
    <aside className="my-16">
      <nav>
        <ul className="flex flex-wrap items-center gap-5 my-5">
          {tags.map((tag, index) => (
            <li key={index} className=" cursor-pointer hover:text-gray-900 hover:bg-gray-300 py-2 px-3 rounded-3xl bg-gray-100 transition-colors">
              {tag}
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-1 border-t border-gray-200 flex justify-between items-center gap-5">
        <div className="flex items-center gap-5">
          <IconsList icon={<RiServiceLine />} num={"330"} text="sm" />
          <IconsList icon={<RiChat3Line />} num={"7"} text="sm" />
        </div>
        <div className="flex items-center gap-5">
          <IconsList icon={<RiFlag2Line />} text="xl" />
          <IconsList icon={<RiPlayCircleLine />} text="xl" />
          <IconsList icon={<RiShareBoxLine />} text="xl" />
        </div>
      </div>  
    </aside>
  );
};

export default Tags;