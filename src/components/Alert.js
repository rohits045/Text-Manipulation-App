import React from 'react'

function Alert (props) {
    
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    props.alert && (
      <div
        className={`alert alert-success alert-${props.alert.type}`}
        role="alert"
      >
        {}
        <strong>{capitalize(props.alert.msg)}</strong>: {props.alert.type}
      </div>
    )
  );
}

export default Alert