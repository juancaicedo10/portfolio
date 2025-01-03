import LoadingBar from "../components/LoadingBar"

function Technologies() {
  return (
    <div className="w-full h-[100vh] flex bg-black flex-col justify-center items-center text-white" id="technologies">
      <h1 className="font-bold text-4xl lg:text-6xl">Technologies</h1>
    <div className="w-full flex flex-col justify-between items-center h-[60%]">
      <LoadingBar title=".NET Core" targetPercent={95}/>
      <LoadingBar title="NODEJS, EXPRESSJS" targetPercent={85} id="progress-bar"/>
      <LoadingBar title="ANGULARJS" targetPercent={80} id="progress-bar"/>
      <LoadingBar title="REACTJS" targetPercent={80} id="progress-bar"/>
      <LoadingBar title="MONGODB, SQL SERVER" targetPercent={75} id="progress-bar"/>
      <LoadingBar title="GIT, GITHUB" targetPercent={90} id="progress-bar"/>
      <LoadingBar title="CSS, BOOTSTRAP, TAILWINDCSS" targetPercent={95}/>
      <LoadingBar title="JAVASCRIPT, TYPESCRIPT" targetPercent={80}/>
    </div>
    </div>
  )
}

export default Technologies
