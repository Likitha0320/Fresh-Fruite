import React from "react";

function CheckBox({ label, name, checked, onChange })
{
// this is function component in react for the form element checkbox
<>
    <label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
</>

}
export default CheckBox;

/*
// we can also declare an arrow funciton

const CheckBox =({ label, name, checked, onChange }) => (
  <div>
    <label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  </div>
);


*/