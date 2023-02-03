import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import OtpValidator, { OtpValidatorProps } from "./OtpValidator";

export default {
  title: "OtpValidator",
  component: OtpValidator,
  argTypes: {
    digits: {
      type: "number",
    },
  },
} as ComponentMeta<typeof OtpValidator>;

const Template: ComponentStory<typeof OtpValidator> = (
  args: OtpValidatorProps
) => {
  const [code, setCode] = useState<string>();

  const handleOnFinish = async (_code: string) => {
    // simulate call to an external api
    await new Promise((resolve) => setTimeout(() => resolve(true), 800));
    setCode(_code);
  };

  return (
    <>
      <OtpValidator {...args} onFinish={handleOnFinish} />
      {code && (
        <div className="mt-32">
          <span>My OPT was: {code}</span>
        </div>
      )}
    </>
  );
};

export const MyOptValidator = Template.bind({});
MyOptValidator.args = {
  digits: 6,
};
