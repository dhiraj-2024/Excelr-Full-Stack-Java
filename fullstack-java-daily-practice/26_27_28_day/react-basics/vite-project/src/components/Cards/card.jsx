import React from 'react'

export const Card = ({element}) => {
  // console.log(element)
  // const { element } = props;
  const {image,title,genre,rating,watchUrl} = element
    return (
      <li className=' list-none'>
        <img className="" src={image} alt={title} width="200px" height="300px" />
        <div>
          <h1>Title : {title}</h1>
          <p>Gener : {genre}</p>
          <p>Ratings : {rating}</p>
                <a href={watchUrl}
                target='_blank'>
                    <button>watch now</button>
                </a>
        </div>
      </li>
    );
}
