const colorMap: {[key: string]: string} = {
	red: 'bg-red-500',
	blue: 'bg-blue-500',
}

export default function Player({life, color}: {life: number, color:string}) {
	  return (
	<div className={`${colorMap[color]} rounded-lg text-black flex justify-center items-center p-10`}>
	  {life}
	</div>
  );
}