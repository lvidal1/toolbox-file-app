import React from 'react'
import { useGetAllFilesQuery } from '../store/slices/fileSlice'

const FileTable = () => {
  const { data, error, isLoading, isSuccess } = useGetAllFilesQuery()
  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>Fail</div>}
      {isSuccess && <ul>
        {data.map((file) => (
          <li key={file.file}>{file.file}</li>
        ))}
      </ul>}
    </>
  )
}

export default FileTable
