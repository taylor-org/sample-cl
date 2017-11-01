import * as React from 'react';
import {storiesOf} from '@storybook/react';

import {Button} from '.';

const stories = storiesOf('Button', module);

stories.add('Example', () => (
  <Button />
));
