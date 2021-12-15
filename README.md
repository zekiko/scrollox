# Scrollox

> scrollox

[![NPM](https://img.shields.io/npm/v/scrollox.svg)](https://www.npmjs.com/package/scrollox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save scrollox
```

## Usage

```js
import React from 'react'
import { useInfiniteScroll } from 'scrollox'

const initial_data = Array.from({ length: 300 })

const App = () => {
  const scrollRef = React.useRef()
  const [newData, page] = useInfiniteScroll(initial_data, 30, scrollRef)
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
```

## License

MIT © [zekiko](https://github.com/zekiko)
