import Layout from '../components/layout'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

const theme = {
  name: 'card-theme',
  tokens: {
    components: {
      card: {
        // You can reference other tokens
        backgroundColor: { value: '{colors.background.success}' },
        borderRadius: { value: '{radii.large}' },
        padding: { value: '{space.xl}' },
        elevated: {
          backgroundColor: { value: '{colors.background.info}' },
          boxShadow: { value: '{shadows.large}' },
        },
      },
    },
  },
};


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
