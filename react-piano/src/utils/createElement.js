import { Composition, Note, Track, Rest, ParallelTrack } from '../components/index'

let ROOT_NODE_INSTANCE = null;

function getHostContextNode(rootNode) {
	if (typeof rootNode !== undefined) {
		return (ROOT_NODE_INSTANCE = rootNode);
	} else {
		return (ROOT_NODE_INSTANCE = new Composition());
	}
}

/**
 * Creates an element for a document
 * @param {string} type Element type
 * @param {Object} props Component props
 * @param {Object} root Root instance
 */
function createElement(type, props) {
	console.log(type);
	const COMPONENTS = {
		ROOT: () => new Composition(),
		NOTE: () => new Note(ROOT_NODE_INSTANCE, props),
		REST: () => new Rest(ROOT_NODE_INSTANCE, props),
		TRACK: () => new Track(ROOT_NODE_INSTANCE, props),
		PARALLEL_TRACK: () => new ParallelTrack(ROOT_NODE_INSTANCE, props),
		default: undefined,
	};

	return COMPONENTS[type]() || COMPONENTS.default;
}

export { createElement, getHostContextNode }