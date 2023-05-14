import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { baseUrl } from '../config';
import DownloadIcon from './icons/DownloadIcon';
import EyeIcon from './icons/EyeIcon';
import styles from '../styles/FileCard.module.scss';

export const FileCard = ({ title, lines, dataTestId }) => {
  const handleDownload = (filename) => {
    return `${baseUrl}files/download/${filename}`;
  };

  const hasContent = lines && lines.length > 0;

  const description = () => (hasContent ? `It has ${lines.length} lines` : 'No content');

  return (
    <Card className={styles.card} data-testid={dataTestId}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description()}</Card.Text>
      </Card.Body>
      <Card.Body className="d-flex justify-content-between">
        <Link to={`file?fileName=${title}`} className={styles.link} title="See more">
          <EyeIcon />
        </Link>
        {hasContent && (
          <Link
            to={handleDownload(title)}
            download
            target="_self"
            className={styles.link}
            title="Download">
            <DownloadIcon />
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};
