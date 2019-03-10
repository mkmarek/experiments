import React, { Component } from 'react';

import { Track, Note, render } from '../src';

class App extends Component {
	render() {
		return (
			<Track tempo={4/4} octave={4}>
				<Note tone="C" hold={1/4} />
				<Note tone="D" hold={1/4} />
				<Note tone="E" hold={1/4} />
				<Note tone="F" hold={1/4} />
				<Note tone="G" hold={1/4} />
				<Note tone="A" hold={1/4} />
				<Note tone="B" hold={1/4} />
				<Note tone="C" hold={1/4} octave={1} />
			</Track>
		);
	}
}

render(<App />, `${__dirname}/demo1.wav`);