import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class AddAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', dueDate: '', courseId: '', open: false };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    const { name, dueDate, courseId } = this.state;
    this.setState({ name: '', dueDate: '', courseId: '', open: false });
  };

  render() {
    const { open, name, dueDate, courseId } = this.state;

    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleOpen}>
          Add Assignment
        </Button>
        <br/><br/>

        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Add New Assignment</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={this.handleChange}
              fullWidth
            />
            <br/><br/>
            <TextField
              label="Due Date"
              name="dueDate"
              value={dueDate}
              onChange={this.handleChange}
              fullWidth
            />
            <br/><br/>
            <TextField
              label="Course ID"
              name="courseId"
              value={courseId}
              onChange={this.handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddAssignment;
