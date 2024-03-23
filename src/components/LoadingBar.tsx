type LoadingBarProps = {
  title: string
  percent: number
}

function LoadingBar({ title, percent }: LoadingBarProps) {
  return (
    <div className="w-1/2 m-2 px-5">
    <section className="w-full flex justify-between">
      <h1 className="text-xl font-semibold text-white">{ title }</h1>
      <h1 className="text-xl font-semibold text-white">{ percent }%</h1>
    </section>
        <div className="w-full h-5 bg-gray-300 rounded-full">
            <div style={{ width: `${percent}%` }} className={`h-full bg-gradient-to-r rounded-full from-indigo-500 to-blue-600`}></div>
        </div>
    </div>
  )
}

export default LoadingBar
