import { createElement } from './utils/createElement';
import MusicRenderer from './reconsiler';

const addCallbacks = (command) => {
  command.on('prepare', function(args) {
      console.log('Preparing sox command with args ' + args.join(' '));
  });
  
  command.on('start', function(commandLine) {
      console.log('Spawned sox with command ' + commandLine);
  });
  
  command.on('progress', function(progress) {
      console.log('Processing progress: ', progress);
  });
  
  command.on('error', function(err, stdout, stderr) {
      console.log('Cannot process audio: ' + err.message);
      console.log('Sox Command Stdout: ', stdout);
      console.log('Sox Command Stderr: ', stderr)
  });
  
  command.on('end', function() {
      console.log('Sox command succeeded!');
  });
}

// renders the component
function render(element, filePath) {
  const container = createElement('ROOT');

  const node = MusicRenderer.createContainer(container);

  MusicRenderer.updateContainer(element, node, null);

  console.log(node);
  const resultCommand = container
    .getCommand()
    .addEffect('vol', 40)
    .trim('=0:10')
    .output(filePath)
    .outputChannels(1)
    .outputFileType('wav');

  addCallbacks(resultCommand);

  resultCommand.run();
}

export default render;