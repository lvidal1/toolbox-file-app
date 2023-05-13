import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { baseUrl } from '../config';

export const FileCard = ({ title, lines }) => {
  const handleDownload = (filename) => {
    return `${baseUrl}files/download/${filename}`;
  };

  const hasContent = lines && lines.length > 0;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>It has {lines.length} lines</Card.Text>
      </Card.Body>
      <Card.Body className="d-flex justify-content-between">
        <Link to={`file?fileName=${title}`}>See more</Link>
        {hasContent && (
          <Link to={handleDownload(title)} download target="_self">
            Download
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};
