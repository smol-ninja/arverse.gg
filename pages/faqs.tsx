import { NextPage } from 'next'
import Header from 'components/Header'
import FAQsList from 'components/FAQsList'
import Footer from 'components/Footer'
import Head from 'next/head'

const FAQs: NextPage = () => {
  return (
    <div className="bg-light">
      <Head>
        <title>Arverse | Avalanche Validator, Help Center</title>
        <meta
          name="description"
          content="Answers to most of your questions related to Arverse staking solution for Avalanche. If you have any other question, feel free to DM us on Twitter."
        />
        <meta
          property="og:title"
          content="Arverse | Avalanche Validator, Help Center"
        />
        <meta
          property="og:og:description"
          content="Answers to most of your questions related to Arverse staking solution for Avalanche. If you have any other question, feel free to DM us on Twitter."
        />
        <meta property="og:url" content="https://arverse.gg/faqs" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      <FAQsList />
      <Footer />
    </div>
  )
}

export default FAQs
