import React from 'react'

const PastSponsorCard = ({name, src}) => {
  return (
    <>
    <div className='mx-4 lg:w-full w-[70%]'>
        <img src={src} alt={name} />
    </div>
    </>
  )
}

export default PastSponsorCard