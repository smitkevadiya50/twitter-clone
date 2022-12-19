import React from 'react'

interface Props{
    name: string;
    icon: any;
}

export default function SidebarOpction(props: Props) {
  return (
    <div className='sidebar-option'>
      {<props.icon/>}
      <h4>{props.name}</h4>
    </div>
  )
}
