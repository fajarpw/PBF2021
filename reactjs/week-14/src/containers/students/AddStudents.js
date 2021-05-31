/* ----- addStudents.js -----*/
import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default class AddStudents extends Component {
  render() {
    return (
      <div>
        <Button
          className="float-right"
          variant="primary"
          data-toggle="modal"
          data-target="this.props.toggleNewStudentModal"
        >
          Add Student
        </Button>
        <Modal
          isOpen={this.props.newStudentModal}
          toggle={this.props.toggleNewStudentModal}
        >
          <Modal.Header toggle={this.props.newStudentModal}>
            Add new Student
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label for="first_name">First Name</Form.Label>
              <Form.Control
                id="first_name"
                name="first_name"
                value={this.props.newStudentData.first_name}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label for="last_name">Last Name</Form.Label>
              <Form.Control
                id="last_name"
                name="last_name"
                value={this.props.newStudentData.last_name}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label for="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                value={this.props.newStudentData.email}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label for="phone">Phone</Form.Label>
              <Form.Control
                id="phone"
                name="phone"
                value={this.props.newStudentData.phone}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button color="primary" onClick={() => this.props.addStudent()}>
              {" "}
              Add{" "}
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleNewStudentModal}
            >
              {" "}
              Cancel{" "}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
