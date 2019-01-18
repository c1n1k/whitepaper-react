import React from 'react'
import { render } from 'react-dom'
import { Theme } from '@nitive/whitepaper-react/theme'
import { Text } from '@nitive/whitepaper-react/text'
import { Icon } from '@nitive/whitepaper-react/icon'

function App() {
  return (
    <Theme
      breakpoint='default'
      color='whitepaper-default'
      font='ibm'
      gap='large'
      menu='default'
      size='default'
      space='default'
    >
      <Text type='h1' size='xxxxl' weight='bold' view='primary'>
        Whitepaper React
      </Text>
      <Text type='blockquote' size='l' weight='regular' view='secondary' short='medium'>
        Автоматически сгенерированная библиотека для работы с Whitepaper <Icon name='check' size='m' tag='span' />
      </Text>
    </Theme>
  )
}

render(<App />, document.body)