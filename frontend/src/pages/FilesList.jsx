import React from 'react'
import FileTable from '../components/FileTable'
import { Layout } from '../components/Layout'

export const FileList = () => {
  return <Layout title={'File list'} subtitle={'These files are available to be explored'} >
      <FileTable />
  </Layout>
}
