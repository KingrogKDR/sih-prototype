
function Pie({ text, percentage, number }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className='w-52 h-52 rounded-3xl bg-[#549E70] px-5 flex flex-col justify-center items-center pb-12'>
      <h1 className='text-white text-sm mb-10'>{text}</h1>
      <div className='relative flex justify-center items-center'>
        <svg className='absolute' width="120" height="120">
          <circle
            className="text-gray-600"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="10"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className="text-white"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="#fff"
            fill="transparent"
            strokeWidth="10"
            r={radius}
            cx="60"
            cy="60"
            style={{ transition: 'stroke-dashoffset 0.35s' }}
          />
        </svg>
        <span className='text-white text-2xl'>{number}</span>
      </div>
    </div>
  );
}

export default Pie;
