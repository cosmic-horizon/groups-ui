import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Heading, Stack, Text } from '../chakra'
import { RadioBox } from '../radio-box'

export default {
  title: 'Atoms/Radio Box',
  component: RadioBox,
  argTypes: {},
} as ComponentMeta<typeof RadioBox>

const Template: ComponentStory<typeof RadioBox> = (args) => <RadioBox {...args} />

export const Component = Template.bind({})
Component.args = { label: 'Radio Box' }

export const WithChildren = Template.bind({})
WithChildren.args = {
  ...Component.args,
  children: (
    <Stack>
      <Heading>heading</Heading>
      <Text>Text under the heading, maybe a description or just some random words</Text>
    </Stack>
  ),
}
