import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

export const FileCard = ({ title, content }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          It has  {content.length} lines
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">
          <Link to={`file?fileName=${title}`}>See more</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  )
}
