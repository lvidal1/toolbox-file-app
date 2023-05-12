import React from 'react'
import { useGetAllFilesQuery } from '../store/slices/fileSlice'
import { FileCard } from './FileCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FileTable = () => {
  const { data, error, isLoading, isSuccess } = useGetAllFilesQuery()
  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>Fail</div>}
      {isSuccess && <Row>

        {data.map(({ file, lines }) => (
          <Col key={file} className='mb-3'> <FileCard title={file} content={lines} /></Col>
        ))}

      </Row>

      }
    </>
  )
}

export default FileTable
