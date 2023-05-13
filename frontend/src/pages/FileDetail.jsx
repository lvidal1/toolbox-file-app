import React from 'react'
import { Layout } from '../components/Layout'
import FileView from '../components/FileView'
import { Link, useSearchParams } from 'react-router-dom'

export const FileDetail = () => {
  const [searchParams] = useSearchParams()

  const filename = searchParams.get('fileName')

  return <Layout>

    {filename && <>

      <h1 className='mb-2'>Detail of {filename}</h1>
      <p className="lead mb-2">
        This is the content of the file
      </p>
      <div className='mb-4'>

      <Link to={'/'}>Back</Link>
      </div>

      <FileView filename={filename} />
    </>}
  </Layout>
}
