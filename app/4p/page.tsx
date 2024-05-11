import Player from "../components/player";

const players = [
	{id: 1, life: 40, color: 'slate' },
	{id: 2, life: 20, color: 'yellow' }
]

export default function Page() {
  return (
	<div className="flex flex-col gap-2 p-2">
		{
			players.map((player) => 
				<Player key={player.id} life={player.life} color={player.color}/>
			)
		}
	</div>
  );
}