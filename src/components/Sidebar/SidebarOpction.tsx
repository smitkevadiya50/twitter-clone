import React from 'react'

interface Props{
    name: string;
    icon: any;
    active?: any
}

export default function SidebarOpction(props: Props) {
  return (
    <div className={`sidebar-option ${props.active && "sidebar-option--active"}`}>
      {<props.icon/>}
      <h4>{props.name}</h4>
    </div>
  )
}
