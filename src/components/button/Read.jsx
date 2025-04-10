import React from 'react';

const Read = (props) => {
  return (
    <a 
      href={props.url} 
      className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded inline-flex items-center transition-colors duration-300"
    >
     {props.value}<span className="ml-1">→</span>
    </a>
  );
};

export default Read;