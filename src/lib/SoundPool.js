export default class SoundPool
{
	/**
	 * Manages an array of sounds so that we can play the same sound
	 * multiple times in our game without having to wait for one sound
	 * to be finished playing before playing the same sound again.
	 *
	 * Taken from https://blog.sklambert.com/html5-canvas-game-html5-audio-and-finishing-touches/
	 *
	 * @param {String} source
	 * @param {Number} size
	 */
	constructor(source, size = 1, volume, loop = false)
	{
		this.source = source;
		this.size = size;
		this.volume = volume;
		this.loop = loop;
		this.pool = [];
		this.currentSound = 0;

		this.initializePool();
	}

	initializePool()
	{
		for (let i = 0; i < this.size; i++)
		{
			const audio = new Audio(this.source);

			audio.volume = this.volume;
			audio.loop = this.loop;

			this.pool.push(audio);
		}
	}

	/**
	 * Checks if the currentSound is ready to play, plays the sound,
	 * then increments the currentSound counter.
	 */
	play()
	{
		let sound = this.pool[this.currentSound]
		if
		(
			sound.currentTime === 0 ||
			sound.ended ||
			sound.paused
		)
			this.pool[this.currentSound].play();

		this.currentSound = (this.currentSound + 1) % this.size;
	}

	pause() { this.pool[this.currentSound].pause(); }
	isPaused() { return this.pool[this.currentSound].paused; }

	stop()
	{
		this.pause();
		this.pool[this.currentSound].currentTime = 0;
	}
}