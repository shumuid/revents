import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//...rest if we specify additional properties
const DateInput = ({
  input,
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && error}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={input.value ? new Date(input.value) : null}
        onChange={input.onChange}
        onBlur={input.onBlur}
        //this should stop the user from typing into the date field instead of selecting the date values from the date picker control
        onChangeRaw={e => e.preventDefault()}
      />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
