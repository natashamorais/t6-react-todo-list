import React from 'react'
import {storiesOf} from '@storybook/react'
import Input from './input'


storiesOf('Components/Form/Input', module)
.add('default', () => (
  <Input type='text' placeholder = 'placeholder aqui' required/> 

  
 
))