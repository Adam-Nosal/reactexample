import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

export interface iUser {
  id: number;
  name: string;
  email: string;
  username: string;
  address: any;
}

export interface iUserProps {
  user: iUser;
}

const User: React.FC<iUserProps> = ({ user }: iUserProps) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow}>
        <Card.Title>{user.username}</Card.Title>
        <Card.Body>
          <p>{user.name}</p>
        </Card.Body>
        <Button>Profile</Button>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Username: {user.username}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{user.id}</p>
          <p>{user.email}</p>
          <p>{user.name}</p>
          <p>{user.address.street}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default User;
