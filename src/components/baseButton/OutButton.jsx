import React from 'react'

const OutButton = ({name, link}) => {
  return (
    <span className=" w-[40px] flex items-center m-1 px-1 rounded-sm"><a className="text-sm text-white hover:text-[#F2C17B]" href={link}>{name}</a></span>
    
  )
}

export default OutButton
