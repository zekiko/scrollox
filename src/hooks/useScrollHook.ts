import React from 'react'

export function useScrollHook(data: any, slice: any): any {
  const [renderingData, setRenderingData] = React.useState<any>([])
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    setRenderingData(data.slice(0, slice))
  }, [])

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setPage((page) => page + 1)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [renderingData])

  React.useEffect(() => {
    setRenderingData([
      ...renderingData,
      ...data.slice(renderingData.length, page * slice)
    ])
  }, [page])

  return [renderingData, page]
}
