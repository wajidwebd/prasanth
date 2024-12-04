import React from 'react'
import { Filetwo } from './Filetwo'

export const Fileone = ({passing}) => {
  return (
    <div>Fileone -{passing}
      <Filetwo></Filetwo>
    </div>
  )
}
