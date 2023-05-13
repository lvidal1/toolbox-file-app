import React from 'react';
import { useGetAllFilesQuery } from '../store/slices/fileSlice';
import { FileCard } from './FileCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Loader } from './Loader';

const FileGrid = () => {
  const { data, error, isLoading, isSuccess } = useGetAllFilesQuery();
  return (
    <>
      {isLoading && <Loader />}
      {error && <div>Fail</div>}
      {isSuccess && (
        <Row>
          {data.map(({ file, lines }) => (
            <Col key={file} className="mb-3">
              {' '}
              <FileCard title={file} lines={lines} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default FileGrid;
