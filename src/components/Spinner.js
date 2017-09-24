import React from 'react'

const Spinner = (props) => {
  return (
    <div>
      { props.isLoading ? <span>Loading...</span> : <span>Done</span> }
     </div>
  )
}

export default Spinner
