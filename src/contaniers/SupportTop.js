import { connect } from 'react-redux';
import SupportTop from '@/components/pages/SupportTop';
import { inputTask, addTask } from '@/actions/tasksActionCreator';

function mapStateToProps({ task, tasks }) {
  return {
    task,
    tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SupportTop);
