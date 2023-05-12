import React from 'react'

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
        <Card.Link href="#">See more</Card.Link>
      </Card.Body>
    </Card>
  )
}
