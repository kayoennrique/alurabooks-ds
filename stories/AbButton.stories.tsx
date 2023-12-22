import React from "react";
import { AbButton, AbButtonProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/AbButton',
    component: AbButton
} as ComponentMeta<typeof AbButton>

const Template: ComponentStory<typeof AbButton> = (args) => <AbButton {...args}/>

export const Primary = Template.bind({});

Primary.args = {
    text: 'Ab Botão Primário',
    kind: 'primary'
} as AbButtonProps

export const Secondary = Template.bind({});

Secondary.args = {
    text: 'Ab Botão Secundário',
    kind: 'secondary'
} as AbButtonProps