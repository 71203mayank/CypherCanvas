import React from 'react'

const BaseButton = ({name, href}) => {
  return (
    <a href={href} className="text-sm text-white hover:text-[#F2C17B]">
      {name}
    </a>
  )
}

export default BaseButton
