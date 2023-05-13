import React from 'react'
import { Layout } from '../components/Layout'
import FileView from '../components/FileView'
import { useSearchParams } from 'react-router-dom'

export const FileDetail = () => {
  const [searchParams] = useSearchParams()

  const filename = searchParams.get('fileName')

  return <Layout title={`Detail of ${filename}`} subtitle={'This is the content of the file'} backLink={'/'} >
    {filename && <>
      <FileView filename={filename} />
    </>}
  </Layout>
}
