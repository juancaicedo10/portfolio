import LoadingBar from "../components/LoadingBar"

function Technologies() {
  return (
    <div className="w-full h-[100vh] flex bg-black flex-col justify-center items-center text-white" id="technologies">
      <h1 className="font-bold text-6xl">Technologies</h1>
    <div className="w-full flex flex-col justify-between items-center h-[60%]">
      <LoadingBar title='HTML' targetPercent={95} />
      <LoadingBar title="CSS, BOOTSTRAP, TAILWINDCSS" targetPercent={95}/>
      <LoadingBar title="JAVASCRIPT, TYPESCRIPT" targetPercent={80}/>
      <LoadingBar title="REACT" targetPercent={85}/>
      <LoadingBar title="MONGODB, MYSQL" targetPercent={75} id="progress-bar"/>
    </div>
    </div>
  )
}

export default Technologies
