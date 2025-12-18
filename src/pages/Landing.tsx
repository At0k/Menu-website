import Loading from '@/pages/Loading'

function Landing() {
  return (
    <Loading
      label="Loading ALG Suites…"
      fullscreen
      type="slices"
      slicesCount={8}
      autoExit={false}
    />
  )
}

export default Landing


