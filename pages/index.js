import React from 'react'
import { FormattedMessage } from 'react-intl'

import Layout from '../components/Layout'
import withIntl from '../components/hocs/withIntl'

function HomePage() {
  return (
    <Layout>
      <p>
        <FormattedMessage id="home.title" defaultMessage='Home page' />
      </p>
    </Layout>
  )
} 

export default withIntl(HomePage)