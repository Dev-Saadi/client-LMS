import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const FormControl = ({ formControls = [], formData, setFormData }) => {
  const renderComponentType = (getControlItem) => {
    let element = null;
    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
          />
        );
        break;
      case "select":
        element = (
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem value={optionItem.value} key={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
          />
        );
        break;

      default:
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
          />
        );
        break;
    }
    return element;
  };

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((item) => (
        <div key={item.name}>
          <Label className="text-base" htmlFor={item.name}>
            {item.label}
          </Label>
          {renderComponentType(item)}
        </div>
      ))}
    </div>
  );
};

export default FormControl;
