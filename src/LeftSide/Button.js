import React from 'react'

const Button = ({ area, onClick }) => {
    return (
        <button 
            id={area.idBtn} 
            className={`btn w-100 p-2 border mb-2 optionSelect ${ area.active && 'btn-warning' }`} 
            onClick={onClick}>
            {area.title}
        </button>
    )
}

export default Button