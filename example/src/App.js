import React from 'react'

import 'scrollox/dist/index.css'

import { useInfiniteScroll } from 'scrollox'

const arr = Array.from({ length: 300 })

const App = () => {
  const scrollRef = React.useRef()
  const [newData, page] = useInfiniteScroll(arr, 30, scrollRef)
  return (
    <div
      ref={scrollRef}
      style={{
        height: 500,
        width: 500,
        position: "absolute",
        left: "30%",
        top: "30%",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        overflow: "auto"
      }}>
      {newData.map((i, index) => (
        <h1>index: {index} - page: {page}</h1>
      ))}
    </div>
  )
}

export default App
