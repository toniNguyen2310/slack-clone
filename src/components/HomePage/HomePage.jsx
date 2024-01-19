import NewChannel from '../NewChannel/NewChannel'

function HomePage(props) {
  const { setIsLoading }=props
  return (
    <>
      <NewChannel setIsLoading={setIsLoading} />
    </>
  )
}

export default HomePage
