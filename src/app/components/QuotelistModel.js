'use client';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ContactModal({ show, onHide, quote }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header  closeButton style={{borderBottom: "none", background: "linear-gradient(to bottom right, #5b2a86, #270082)", color: "#fff" }}>
        <Modal.Title>Quote Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body  style={{ background: "linear-gradient(to bottom right, #5b2a86, #270082)", color: "#fff" }}>
        <p><strong>Name:</strong> {quote?.contactName}</p>
        <p><strong>Email:</strong> {quote?.email}</p>
        <p><strong>Phone:</strong> {quote?.phone}</p>
    <p><strong>Project Types:</strong></p>
<ul style={{ paddingLeft: "1.2rem" }}>
  {(Array.isArray(quote.projectType) 
    ? quote.projectType 
    : quote.projectType?.split(",") || []
  ).map((type, idx) => (
    <li key={idx} style={{ marginBottom: "4px" }}>
      {type.trim()}
    </li>
  ))}
</ul>

        <p><strong>Created At:</strong> {new Date(quote?.createdAt).toLocaleDateString()}</p>
        <p><strong>Budget:</strong> {quote?.budget || '-'}</p>  
        <p><strong>Timeline:</strong> {quote?.timeline || '-'}</p>
        {/* Add more quote details */}
      </Modal.Body>
      <Modal.Footer style={{borderTop: "none" ,background: "linear-gradient(to bottom right, #5b2a86, #270082)", color: "#fff" }}>
        <Button variant="light" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
