import React from 'react'
import PropTypes from 'prop-types'
export const GifGridItem = ({id,title,url}) => {
    console.log(id)
    return (
        <div className="card animate__fadeIn">
        
           <img src={url} alt={title}></img> 
           <p>{title}</p>       
       
        </div>
    )
}

GifGridItem.propTypes={
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
}
export default GifGridItem;