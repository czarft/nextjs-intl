import React from 'react'
import { FormattedMessage } from 'react-intl'

import Layout from '../components/Layout'

import withIntl from '../components/hocs/withIntl'

function AboutPage() {
  return (
    <Layout>
      <p>
        <FormattedMessage id="about.title" defaultMessage="About page" />
      </p>
    </Layout>
  )
}

export default withIntl(AboutPage)
