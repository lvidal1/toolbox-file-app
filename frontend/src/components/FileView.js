import React from 'react'
import { useGetFilesByNameQuery } from '../store/slices/fileSlice'

const FileView = () => {
  const { data, error, isLoading, isSuccess } = useGetFilesByNameQuery({ fileName: 'test6.csv' })
  return (
    <>
      {isSuccess && data.length > 0 && <div>{JSON.stringify(data)}</div>}
    </>
  )
}

export default FileView
