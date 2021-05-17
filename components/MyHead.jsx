import Head from "next/head"

const MyHead = (props) => {
  const title = props.title ? `${props.title} - sendou` : "sendou"
  return (
    <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🟡</text></svg>"
        />
      </Head>
  )
}

export default MyHead
