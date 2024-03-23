import LoadingBar from "../components/LoadingBar"

function Technologies() {
  return (
    <div className="w-full flex bg-black flex-col justify-center items-center">
      <LoadingBar title='HTML' percent={95} />
      <LoadingBar title="CSS, BOOTSTRAP, TAILWINDCSS" percent={95}/>
      <LoadingBar title="JAVASCRIPT, TYPESCRIPT" percent={80}/>
      <LoadingBar title="REACT" percent={85}/>
      <LoadingBar title="MONGODB, MYSQL" percent={75}/>
    </div>
  )
}

export default Technologies
