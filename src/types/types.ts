export type Gold = {
	"gold": number,
	"gold_reliable": number,
	"gold_unreliable": number,
	"gold_from_hero_kills": number,
	"gold_from_creep_kills": number,
	"gold_from_income": number,
}
export type GameState = {

	provider: {
		name: string; // The name of the game provider.
		appid: number; // The application ID of the game.
		version: number; // The version of the game provider.
		timestamp: number; // The timestamp of the game state.
	};
	map: {
		name: string; // The name of the map.
		matchid: string; // The match ID.
		game_time: number; // The elapsed game time in seconds.
		clock_time: number; // The elapsed in-game clock time.
		daytime: boolean; // Whether it's daytime in the game.
		nightstalker_night: boolean; // Whether it's Night Stalker night mode.
		radiant_score: number; // The score of the Radiant team.
		dire_score: number; // The score of the Dire team.
		game_state: string; // The current state of the game.
		paused: boolean; // Whether the game is paused.
		win_team: string; // The winning team.
		customgamename: string; // The name of the custom game (if any).
		ward_purchase_cooldown: number; // The cooldown for purchasing wards.
	};
	player: {
		steamid: string; // The Steam ID of the player.
		accountid: string; // The account ID of the player.
		name: string; // The name of the player.
		activity: string; // The player's current activity.
		kills: number; // The number of kills by the player.
		deaths: number; // The number of deaths of the player.
		assists: number; // The number of assists by the player.
		last_hits: number; // The number of last hits by the player.
		denies: number; // The number of denies by the player.
		kill_streak: number; // The player's current kill streak.
		commands_issued: number; // The number of commands issued by the player.
		kill_list: Record<string, number>; // The kill list, mapping victim IDs to kill counts.
		team_name: string; // The name of the player's team.
		player_slot: number; // The player's slot in the team.
		team_slot: number; // The player's slot in their team group.
		gold: number; // The total gold of the player.
		gold_reliable: number; // The reliable gold of the player.
		gold_unreliable: number; // The unreliable gold of the player.
		"gold_from_hero_kills": number,
		"gold_from_creep_kills": number,
		"gold_from_income": number,
		gpm: number; // The gold per minute of the player.
		xpm: number; // The experience per minute of the player.
	};
	hero: {
		id: number; // The hero's ID.
		"name": string,
		"facet": number,
		"level": number,
		"xp": number,
		"alive": boolean,
		"respawn_seconds": number,
		"buyback_cost": number,
		"buyback_cooldown": number,
		"health": number,
		"max_health": number,
		"health_percent": number,
		"mana": number,
		"max_mana": number,
		"mana_percent": number,
	};
	abilities: Record<string, object>; // The hero's abilities, keyed by slot.
	items: Record<string, object>; // The hero's items, including inventory, stash, and neutral items.
	buildings: Record<string, object>; // Details about buildings in the game.

};

export type GameStateRune = {
	provider: {
		name: string; // The name of the game provider.
		appid: number; // The application ID of the game.
		timestamp: number; // The timestamp of the game state.
	};
	player: {
		last_hits: number;
		xpm: number;
		gpm: number;
		kills: number,
		deaths: number,
		assists: number,
		denies: number,
		"commands_issued": number,
		goldStats: {
			"gold": number,
			"gold_reliable": number,
			"gold_unreliable": number,
			"gold_from_hero_kills": number,
			"gold_from_creep_kills": number,
			"gold_from_income": number,
		}
	},
	hero: {
		"name": string,
		"facet": number,
		"level": number,
		"xp": number,
		"alive": boolean,
		"respawn_seconds": number,
		"buyback_cost": number,
		"buyback_cooldown": number,
		"health": number,
		"max_health": number,
		"health_percent": number,
		"mana": number,
		"max_mana": number,
		"mana_percent": number,
	}
	match: {
		game_time: string; // The elapsed game time in seconds.
		clock_time: string; // The elapsed in-game clock time.
		score: {
			radiant: number;
			dire: number;
		}

	}
}