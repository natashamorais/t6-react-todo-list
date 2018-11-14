import React from 'react'
import {storiesOf} from '@storybook/react'
import Link from './link'
import Storyrouter  from 'storybook-react-router'


storiesOf('Components/Form/Link', module)
.addDecorator(Storyrouter())
.add('default', () => (


  <Link href='/'> (children) </Link>
 
))