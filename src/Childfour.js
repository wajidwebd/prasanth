import React, { useContext } from 'react'
import { childfourpass, datapasstofourfile } from './App'

export const Childfour = () => {
    // const gettingdata = useContext(childfourpass)
    const appjsdata = useContext(datapasstofourfile)
  return (
    <div>
      childfour = {appjsdata}
        {/* {gettingdata} */}
    </div>
  )
}
