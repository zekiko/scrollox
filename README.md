# Scrollox

> scrollox

[![NPM](https://img.shields.io/npm/v/scrollox.svg)](https://www.npmjs.com/package/scrollox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save scrollox
```

## Usage

```tsx
import React from 'react'

import { useScrollHook } from 'scrollox'

const bigData = Array.from({ length: 20000 })

const App = () => {

  const [newData, page] = useScrollHook(bigData, 30)

  return 
    <>
      {newData.map((i, index) => (
        <h1>{index} - {page}</h1>
      ))}
    </>
}

export default App
```

## License

MIT © [zekiko](https://github.com/zekiko)
