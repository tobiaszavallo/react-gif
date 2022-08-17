import React from 'react';

export const GifCard = ({ title, url }) => {


  return (
    <div className="card">
      <img src={ url } alt="img"/>
      <p>{ title }</p>
    </div>
  )
}
