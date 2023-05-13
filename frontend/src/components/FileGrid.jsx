import React from 'react';
import { useGetAllFilesQuery } from '../store/slices/fileSlice';
import { FileCard } from './FileCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Loader } from './Loader';
import ErrorMessage from './ErrorMessage';

const FileGrid = () => {
  const { data, error, isLoading, isSuccess } = useGetAllFilesQuery();
  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={'Fail to fetch files'} />}
      {isSuccess &&
        (data.length > 0 ? (
          <Row>
            {data.map(({ file, lines }) => (
              <Col key={file} className="mb-3 d-flex justify-content-center">
                <FileCard title={file} lines={lines} />
              </Col>
            ))}
          </Row>
        ) : (
          <ErrorMessage message={'Files we no files'} />
        ))}
    </>
  );
};

export default FileGrid;
