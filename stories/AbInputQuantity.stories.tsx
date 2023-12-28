import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbInputQuantity, AbInputQuantityProps } from '../src';
import { useState } from '@storybook/addons';


export default {
  title: 'Components/AbInputQuantity',
  component: AbInputQuantity,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInputQuantity>;

const Template: ComponentStory<typeof AbInputQuantity> = () => {
  const [value, setValue] = useState(0)

  return <AbInputQuantity value={value} onChange={setValue} />
};

export const Standard = Template.bind({})

// export const AbInputQuantityComponent = Template.bind({})
// AbInputQuantityComponent.args = {
//     label: 'Uma label interessante',
//     value: 1,
//     onChange: () => {}
// } as AbInputQuantityProps