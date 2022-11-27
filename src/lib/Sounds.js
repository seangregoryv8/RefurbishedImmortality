import SoundPool from "./SoundPool.js";

export default class Sounds
{
	constructor() { this.sounds = {}; }

	load(soundDefinitions)
	{
		soundDefinitions.forEach(sound =>
		{
			this.sounds[sound.name] = new SoundPool
			(
				sound.path,
				sound.size,
				sound.volume,
				sound.loop,
			);
		});
	}

	get(name) { return this.sounds[name]; }
	play(name) { this.get(name).play(); }
	pause(name) { this.get(name).pause(); }
	stop(name) { this.get(name).stop(); }
}