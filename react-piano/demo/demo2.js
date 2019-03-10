import React, { Component } from 'react';

import { Track, ParallelTrack, Note, Rest, render } from '../src';

const IntroUp = () => (
	<React.Fragment>
		<Note tone="A" hold={1/2} />
		<Note tone="F" hold={1/2} />
		<Note tone="D" hold={1/2} />
		<Note tone="A" hold={1/2} />

		<Note tone="G" hold={1/2} />
		<Note tone="E" hold={1/2} />
		<Note tone="C" hold={1/2} />
		<Note tone="G" hold={1/2} />

		<Note tone="A" hold={1/2} />
		<Note tone="F" hold={1/2} />
		<Note tone="D" hold={1} />
	</React.Fragment>
);

const IntroDown = () => (
	<React.Fragment>
		<Note tone="D" hold={1/2} />
		<Note tone="F" hold={1/2} />
		<Note tone="A" hold={1/2} />
		<Note tone="F" hold={1/2} />

		<Note tone="C" hold={1/2} />
		<Note tone="E" hold={1/2} />
		<Note tone="G" hold={1/2} />
		<Note tone="E" hold={1/2} />

		<Note tone="B" hold={1/2} octave={-1} />
		<Note tone="D" hold={1/2} />
		<Note tone="F" hold={1} />
	</React.Fragment>
);

const FirstLine = ({ octave }) => (
	<ParallelTrack>
		<Track tempo={4/4} octave={octave}>
			<IntroUp />

			<Rest hold={1} />

			<Note tone="C" hold={1/4} octave={1} />
			<Note tone="B" hold={1/4} />
			<Note tone="A" hold={1/4} />
			<Note tone="G" hold={1/4} />

			<IntroUp />
		</Track>
		<Track tempo={4/4} octave={octave + 1}>
			<IntroUp />

			<Rest hold={1} />

			<Note tone="C" hold={1/4} octave={1} />
			<Note tone="B" hold={1/4} />
			<Note tone="A" hold={1/4} />
			<Note tone="G" hold={1/4} />

			<IntroUp />
		</Track>
		<Track tempo={4/4} octave={octave - 1} volume={0.9}>
			<IntroDown />

			<Note tone="B" hold={1/2} octave={-1} />
			<Note tone="D" hold={1/2} />
			<Note tone="F" hold={1} />

			<IntroDown />

			<Note tone="B" hold={1/2} octave={-1} />
			<Note tone="D" hold={1/2} />
			<Note tone="F" hold={1} />
		</Track>
	</ParallelTrack>
)

const SecondUp = () => (
	<React.Fragment>
		<Note tone="D" hold={1/2} />
		<Note tone="Bb" hold={1/2} octave={-1} />
		<Note tone="G" hold={1/2} octave={-1} />
		<Note tone="D" hold={1/2} />

		<Note tone="C" hold={1} />
		<Rest hold={1/2} />
		<Note tone="Bb" hold={1/4} octave={-1} />
		<Note tone="A" hold={1/4} octave={-1} />

		<Note tone="G" hold={2} octave={-1} />

		<Note tone="A" hold={1/2} octave={-1} />
		<Note tone="Bb" hold={1/2} octave={-1} />
	</React.Fragment>
);

const SecondDown = ({ octave }) => (
	<React.Fragment>
		<Note tone="E" hold={1/2} />
		<Note tone="G" hold={1/2} />
		<Note tone="B" hold={1/2} />
		<Note tone="G" hold={1/2} />

		<Note tone="D" hold={1/2} />
		<Note tone="F" hold={1/2} />
		<Note tone="A" hold={1/2} />
		<Note tone="F" hold={1/2} />

		<ParallelTrack tempo={4/4} octave={octave}>
			<Note tone="C" hold={2} />
			<Note tone="C" hold={2} octave={-1} />
		</ParallelTrack>
	</React.Fragment>
);

const SecondLine = ({ octave }) => (
	<ParallelTrack>
		<Track tempo={4/4} octave={octave}>
			<SecondUp />
		</Track>
		<Track tempo={4/4} octave={octave + 1}>
			<SecondUp />
		</Track>
		<Track tempo={4/4} octave={octave - 1}>
			<SecondDown octave={octave - 1} />
		</Track>
	</ParallelTrack>
)

const ThirdUp = () => (
	<React.Fragment>
		<Note tone="C" hold={2} />
		<Rest hold={1/2} />
		<Note tone="E" hold={1/2} />
		<Note tone="A" hold={1/2} />
		<Note tone="Bb" hold={1/2} />
		<Note tone="C" hold={2} octave={1} />
		<Rest hold={1} />
	</React.Fragment>
);

const ThirdDown = ({ octave }) => (
	<React.Fragment>
		<Note tone="F" hold={1/2} octave={-1} />
		<Note tone="Ab" hold={1/2} octave={-1} />
		<Note tone="C" hold={1/2} />
		<Note tone="F" hold={1/2} />
		<Note tone="A" hold={1/2} />
	</React.Fragment>
);

const ThirdLine = ({ octave }) => (
	<ParallelTrack>
		<Track tempo={4/4} octave={octave}>
			<ThirdUp />
		</Track>
		<Track tempo={4/4} octave={octave + 1}>
			<ThirdUp />
		</Track>
		<Track tempo={4/4} octave={octave - 1}>
			<ThirdDown octave={octave - 1} />
		</Track>
	</ParallelTrack>
)

const Riff = ({ octave, tempo }) => (
	<React.Fragment>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="F" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="F" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="F" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="F" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>

		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="F" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="F" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="F" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="F" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>

		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="Gb" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="Gb" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="Gb" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="Gb" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>

		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="Gb" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="Gb" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/2} />
			<Note tone="Gb" hold={1/2}/>
			<Note tone="B" hold={1/2} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/4} />
			<Note tone="Gb" hold={1/4}/>
			<Note tone="B" hold={1/4} octave={1} />
		</ParallelTrack>
		<ParallelTrack octave={octave} tempo={tempo}>
			<Note tone="B" hold={1/4} />
			<Note tone="E" hold={1/4}/>
			<Note tone="B" hold={1/4} octave={1} />
		</ParallelTrack>
	</React.Fragment>
);

const FourthLine = ({ octave }) => (
	<React.Fragment>
		<Track tempo={4/4} octave={octave}>
			<Riff octave={octave} tempo={2/3} />
			<Riff octave={octave} tempo={2/3} />
		</Track>
	</React.Fragment>
)

const FifthLine = ({ octave, tempo }) => (
	<ParallelTrack>
		<Track>
			<Riff octave={octave} tempo={tempo} />
			<Riff octave={octave} tempo={tempo} />
		</Track>
		<Track tempo={tempo} octave={6}>
			<Rest hold={1} />
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} />
				<Note tone="D" hold={1}/>
			</ParallelTrack>
			<Rest hold={1} />
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} />
				<Note tone="D" hold={1}/>
			</ParallelTrack>
			<Rest hold={1} />
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} />
				<Note tone="Bb" hold={1} octave={-1} />
			</ParallelTrack>
			<Rest hold={1} />
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} />
				<Note tone="Bb" hold={1} octave={-1} />
			</ParallelTrack>
			<Rest hold={1} />
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} />
				<Note tone="D" hold={1}/>
			</ParallelTrack>
			<Rest hold={1} />
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} />
				<Note tone="D" hold={1}/>
			</ParallelTrack>
			<Rest hold={1} />
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} />
				<Note tone="Bb" hold={1} octave={-1} />
			</ParallelTrack>
			<Rest hold={1} />
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} />
				<Note tone="Bb" hold={1} octave={-1} />
			</ParallelTrack>
		</Track>
	</ParallelTrack>
)

const SixthLine = ({ octave, tempo }) => (
	<ParallelTrack>
		<Track>
			<Riff octave={octave} tempo={tempo} />
			<Riff octave={octave} tempo={tempo} />
		</Track>
		<Track tempo={tempo} octave={6}>
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="D" hold={1} octave={-1} />
				<Note tone="F" hold={1}/>
				<Note tone="A" hold={1}/>
			</ParallelTrack>
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} octave={-1}/>
				<Note tone="D" hold={1} octave={-1}/>
			</ParallelTrack>
			<Rest hold={1} />
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} octave={-1}/>
				<Note tone="D" hold={1} octave={-1}/>
			</ParallelTrack>
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} octave={-1} />
				<Note tone="D" hold={1} octave={-1} />
				<Note tone="A" hold={1}/>
			</ParallelTrack>
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} octave={-1}/>
				<Note tone="B" hold={1} />
			</ParallelTrack>
			<Rest hold={1} />
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} octave={-1}/>
				<Note tone="B" hold={1} />
			</ParallelTrack>
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="D" hold={1} octave={-1} />
				<Note tone="F" hold={1}/>
				<Note tone="A" hold={1}/>
			</ParallelTrack>
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} octave={-1}/>
				<Note tone="D" hold={1} octave={-1}/>
			</ParallelTrack>
			<Rest hold={1} />
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={1} octave={-1}/>
				<Note tone="D" hold={1} octave={-1}/>
			</ParallelTrack>
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="F" hold={2} />
				<Note tone="B" hold={2} />
				<Note tone="D" hold={2} />
			</ParallelTrack>
			<ParallelTrack octave={5} tempo={tempo}>
				<Note tone="C" hold={2} />
				<Note tone="E" hold={2} />
				<Note tone="G" hold={2} />
			</ParallelTrack>
		</Track>
	</ParallelTrack>
)

class Eminem extends Component {
	render() {
		return (
			<Track>
				<FirstLine octave={5} />
				<SecondLine octave={5} />
				<ThirdLine octave={5} />
				<FourthLine octave={3} />
				<FifthLine octave={3} tempo={2/3} />
				<SixthLine octave={3} tempo={2/3} />
			</Track>
		);
	}
}

render(<Eminem />, `${__dirname}/demo2.wav`);