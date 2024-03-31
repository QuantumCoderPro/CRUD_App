import axios from 'axios';

const deleteEmployee = async (id) => {
  try {
    await axios.get('http://localhost:4000/employees/deleteEmployee/' + id);
    console.log('Employee Deleted !!!');
  } catch (error) {
    console.log(error);
  }
};

export default deleteEmployee;
