import React from "react";
import { Button } from "../ui/button";
import FormControl from "./FormControl";

const CommonForm = ({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button type="submit">{buttonText || "Submit"}</Button>
    </form>
  );
};

export default CommonForm;
