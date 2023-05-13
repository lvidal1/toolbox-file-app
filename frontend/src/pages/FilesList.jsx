import React from 'react'
import FileTable from '../components/FileTable'
import { Layout } from '../components/Layout'

export const FileList = () => {
  return <Layout>
      <h1 className='mb-2'>File list</h1>
      <p className="lead mb-5">
        These files are available to be explored
      </p>
      <FileTable />
  </Layout>
}
