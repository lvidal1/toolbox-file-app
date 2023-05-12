import React from 'react'
import {useGetAllFilesQuery} from '../store/slices/fileSlice'


export const Files = () => {

  const { data , error, isLoading, isSuccess } = useGetAllFilesQuery()
  return (
    <>
      <div>{JSON.stringify(data)}</div>
      {isLoading && <div>Loading</div>}
      {error && <div>Fail</div>}
    </>
  )
}
