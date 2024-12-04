import React from 'react'
import { Fileone } from './Fileone'

export const Prem = ({passing,myagepassing,data}) => {
  return (
    <div>
      <h1> this is {passing} {myagepassing} {data}file</h1>
      <Fileone passing={passing}></Fileone>
    </div>
  )
}