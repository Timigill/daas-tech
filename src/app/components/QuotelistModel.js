'use client';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ContactModal({ show, onHide, quote }) {
  return (
    <Modal show={show} onHide={onHide} centered>
    
    
      <Modal.Body  className='position-relative' style={{ background: "linear-gradient(to bottom right, #5b2a86, #270082)", color: "#fff" }}>
        
        <Modal.Title className='my-3 fw-bold'>Quote Detail
     
        </Modal.Title>
        <p><strong>Name:</strong> {quote?.contactName}</p>
        <p><strong>Email:</strong> {quote?.email}</p>
        <p><strong>Phone:</strong> {quote?.phone}</p>
  <p><strong>Project Types:</strong></p>
<ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
  {(typeof quote?.projectType === 'string'
    ? quote.projectType.split(',')
    : Array.isArray(quote?.projectType)
    ? quote.projectType
    : []
  ).map((type, idx) => (
    <li key={idx} style={{ marginBottom: "4px" }}>
      {type.trim()}
    </li>
  ))}
</ul>





    
        <p><strong>Company:</strong> {quote?.company || '-'}</p>
      
        <p><strong>Created At:</strong> {new Date(quote?.createdAt).toLocaleDateString()}</p>
        <p><strong>Budget:</strong> {quote?.budget || '-'}</p>  
   <p><strong>Status:</strong> {quote?.status}</p>
        <p><strong>Timeline:</strong> {quote?.timeline || '-'}</p>
        {/* Add more quote details */}

        <Button variant="light" className='position-absolute bottom-0 end-0 mx-3 my-3' onClick={onHide}>Close</Button>

      </Modal.Body>
      
      
    </Modal>
  );
}
