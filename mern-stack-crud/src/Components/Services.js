import axios from 'axios';


const B_URL = process.env.REACT_APP_BACKEND_URL

const deleteEmployee = async (id) => {
  try {
    await axios.get(`${B_URL}/employees/deleteEmployee/`+ id);
    console.log('Employee Deleted !!!');
  } catch (error) {
    console.log(error);
  }
};

export default deleteEmployee;
