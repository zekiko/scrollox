import React from 'react'

import 'scrollox/dist/index.css'

import { useScrollHook } from 'scrollox'

const arr = Array.from({ length: 2000 })

const App = () => {

  const [newData, page] = useScrollHook(arr, 30)

  return <>
    {newData.map((i: any, ind: number) => (
      <h1>{i} {ind} - {page}</h1>
    ))}

  </>
}

export default App
