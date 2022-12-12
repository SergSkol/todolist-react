import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash, FaEdit } from 'react-icons/fa';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  }

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.handleEditing = this.handleEditing.bind(this);
  }

  componentWillUnmount() {
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const { todo } = this.props;
    const { completed, id, title } = todo;

    const viewMode = {};
    const editMode = {};

    const { editing } = this.state;
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const { handleChangeProps } = this.props;
    const { deleteTodoProps } = this.props;
    const { setUpdate } = this.props;
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button type="submit" onClick={() => deleteTodoProps(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? this.completedStyle : null}>
          {title}
        </span>

        <button
          type="submit"
          onClick={this.handleEditing}
          onKeyDown={this.handleEditing}
          style={viewMode}
        >
          <FaEdit style={{ color: 'darkcyan', fontSize: '16px' }} />
        </button>

        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
