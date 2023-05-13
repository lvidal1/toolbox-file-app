import React from 'react';
import FileGrid from '../components/FileGrid';
import { Layout } from '../components/Layout';

export const FileList = () => {
  return (
    <Layout title={'File list'} subtitle={'These files are available to be explored'}>
      <FileGrid />
    </Layout>
  );
};
