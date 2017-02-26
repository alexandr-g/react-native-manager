import { EMPLOYEE_UPDATE } from './types';

export default employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
};