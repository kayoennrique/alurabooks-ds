import React from "react";
import { AbTag, AbTagProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Components/AbTag',
    component: AbTag
} as ComponentMeta<typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    text: 'Tag'
} as AbTagProps