import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useGetFilesByNameQuery } from '../store/slices/fileSlice'

const COLUMNS = {
  file: 'File',
  text: 'Text',
  number: 'Number',
  hex: 'Hex'
}

const FileView = ({ filename }) => {
  const { data, error, isLoading, isSuccess } = useGetFilesByNameQuery({ filename })
  const [lines, setLines] = useState([])

  const mapLines = (lines, file) => {
    return lines.map((line) => {
      return {
        ...line,
        file
      }
    })
  }

  useEffect(() => {
    if (isSuccess && data.length > 0) {
      const { file, lines } = data[0]
      setLines(mapLines(lines, file))
    }
  }, [data, isSuccess, setLines])

  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>Fail</div>}
      {isSuccess && data.length > 0 &&

        <Table responsive="md" striped bordered >
          <thead>
            <tr>
              {Object.entries(COLUMNS).map(([key, label]) => (
                <th key={key}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              lines.map((line, index) => <tr key={index}>
                {Object.entries(COLUMNS)
                  .map(([key, _]) => (
                    <td key={key}>{line[key]}</td>
                  ))}
              </tr>)
            }
          </tbody>
        </Table>}
    </>
  )
}

export default FileView
