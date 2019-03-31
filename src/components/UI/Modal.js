import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const modalStyle = {
	top: '25%',
	left: '35%'
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: '#fff',
    boxShadow: theme.shadows[5],
    padding: 16,
    outline: 'none',
  },
});

class SimpleModal extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            {this.props.children}
          </div>
        </Modal>
      </div>
    );
  }
}

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;