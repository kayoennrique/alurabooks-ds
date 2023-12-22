import React from "react";
import { AbModal, AbModalProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/AbModal',
    component: AbModal
} as ComponentMeta<typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args) => <AbModal {...args}/>

export const Primary = Template.bind({});

Primary.args = {
    open: true,
    title: 'Titulo da Modal',
    children: <h1>Uma modal bacanuda</h1>
} as AbModalProps
