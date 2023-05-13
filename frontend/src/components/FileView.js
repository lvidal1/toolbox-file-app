import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useGetFilesByNameQuery } from '../store/slices/fileSlice';
import { Loader } from './Loader';

const COLUMNS = {
  file: 'File',
  text: 'Text',
  number: 'Number',
  hex: 'Hex'
};

const ColumnMap = Object.entries(COLUMNS);

const FileView = ({ filename }) => {
  const { data, error, isLoading, isSuccess } = useGetFilesByNameQuery({ filename });
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (isSuccess && data.length > 0) {
      const { file, lines } = data[0];
      setLines(mapLines(lines, file));
    }
  }, [data, isSuccess, setLines]);

  const mapLines = (lines, file) => {
    return lines.map((line) => {
      return {
        ...line,
        file
      };
    });
  };

  const renderLines = (lines) => {
    if (lines.length > 0) {
      return lines.map((line, index) => (
        <tr key={index}>
          {ColumnMap.map(([key, _]) => (
            <td key={key}>{line[key]}</td>
          ))}
        </tr>
      ));
    } else {
      return (
        <tr>
          <td colSpan={ColumnMap.length} className="text-center">
            {'No lines found'}
          </td>
        </tr>
      );
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>Fail</div>}
      {isSuccess && data.length > 0 && (
        <Table responsive="md" striped bordered className="bg-white">
          <thead>
            <tr>
              {ColumnMap.map(([key, label]) => (
                <th key={key}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>{renderLines(lines)}</tbody>
        </Table>
      )}
    </>
  );
};

export default FileView;
