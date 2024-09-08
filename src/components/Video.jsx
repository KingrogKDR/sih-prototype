function Video({source, title, description}) {
  return (
    <div className="w-full h-40 bg-slate-400 rounded-xl flex flex-row gap-3 py-4 px-6">
        <div className="w-1/4 rounded-xl border-2 border-black">
            <img src={source} alt="Thumbnail" />
        </div>
        <div className="w-3/4 rounded-xl border-2 border-gray-50">
            <p className="text-xl font-bold px-5 py-2">{title}</p>
            <p className="text-lg font-semibold px-5 py-2">{description}</p>
        </div>
    </div>
  )
}

export default Video