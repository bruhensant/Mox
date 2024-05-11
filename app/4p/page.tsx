import Player from "../components/player";

const players = [
	{id: 1, life: 40, color: 'red' },
	{id: 2, life: 20, color: 'blue' }
]

export default function Page() {
  return (
	<div>
		{
			players.map((player) => 
				<Player key={player.id} life={player.life} color={player.color}/>
			)
		}
	</div>
  );
}