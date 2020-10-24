import React from 'react'

const Head = (props) => {
  React.useEffect(() => {
    document.title = "Ranek " + (props.title || '')
  }, [])

  return (
    <>
      
    </>
  )
}

export default Head
