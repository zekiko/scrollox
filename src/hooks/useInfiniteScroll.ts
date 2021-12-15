import React from 'react'

export function useInfiniteScroll(data: any, slice: any, ref: any): any {
  const [renderingData, setRenderingData] = React.useState<any>(
    data.slice(0, slice)
  )
  const [page, setPage] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      if (
        ref.current.scrollTop + ref.current.clientHeight >=
        ref.current.scrollHeight - 5
      ) {
        setPage((page) => page + 1)
      }
    }

    const currentRef = ref.current
    currentRef.addEventListener('scroll', handleScroll, { passive: true })
    return () => currentRef.removeEventListener('scroll', handleScroll)
  }, [ref, page, data])

  console.log(`page`, page)

  React.useEffect(() => {
    setRenderingData([
      ...renderingData,
      ...data.slice(renderingData.length, (page + 1) * slice)
    ])
  }, [page])

  return [renderingData, page]
}
