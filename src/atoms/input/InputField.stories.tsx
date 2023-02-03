import InputField, { InputProps } from "./InputField";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormEvent, useState } from "react";
import Button from "../button/Button";

export default {
  title: "InputField",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args: InputProps) => (
  <InputField {...args} />
);

export const MyInputField = Template.bind({});
MyInputField.args = {
  type: "text",
  id: "my-input",
  label: "Input label",
  required: false,
  fullWidth: false,
  errorMessage: "Some error message",
};
MyInputField.storyName = "Input Styles";

export const SubmitEmail = () => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [email, setEmail] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let error;
    if (!email?.length) {
      error = "Email is required";
    }

    setErrorMessage(error);
  };

  return (
    <form id={"my-form"} onSubmit={onSubmit} className={"flex justify-start"}>
      <div>
        <InputField
          id={"email"}
          label={"Email"}
          type={"email"}
          value={email}
          errorMessage={errorMessage}
          onChange={setEmail}
          required
        />
      </div>
      <div className="m-16">
        <Button type={"submit"} text={"Submit Form"} outlined />
      </div>
    </form>
  );
};
