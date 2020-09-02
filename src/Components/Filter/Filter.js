import React from "react";
import PropTypes from "prop-types";
import { InputFilter, Label, Form } from "./Filter.styles";
const Filter = ({ value, onChangeFilter, showFilter }) => (
  <>
  <Form in={showFilter}>
    <Label>Find contacts by name
    <InputFilter
    onChange={onChangeFilter}
    value={value}
    type="text"
  /></Label>
  </Form>
  
  
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;



// import React from "react";
// import PropTypes from "prop-types";
// import style from './Filter.module.css'

// export default function Filter({ value, onChangeFilter }) {
//   return (
//     <div>
//       <label className = {style.Serch}>Find contacts by name</label>
//       <input
//         className = {style.SerchInput}
//         type="text"
//         value={value}
//         onChange={(e) => onChangeFilter(e.target.value)}
//       />
//     </div>
//   );
// }


// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onchangeFilter: PropTypes.func,
// };