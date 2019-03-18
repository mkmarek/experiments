import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Model,
  asset,
  AmbientLight
} from 'react-360';

export default class earth_moon extends React.Component {
  constructor() {
    super();

    this.state = { rotation: 0 };
    this.rotate = this.rotate.bind(this);
    this.lastUpdate = Date.now();
  }
  
  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  rotate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;

    this.setState({
      rotation: this.state.rotation + delta / 150
    });
    this.frameHandle = requestAnimationFrame(this.rotate);
  }
  render() {
    return (
      <View style={styles.panel}>
        <AmbientLight intensity={2.6} />
        <Model
          style={{
            transform: [
              { translate: [-10, 0, 0] },
              { scale: 0.5 },
              { rotateY: this.state.rotation },
              { rotateX: 20 },
              { rotateZ:  -10 }
            ],
          }}
          source={{ obj: asset('earth.obj'), mtl: asset('earth.mtl') }}
          lit={true}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('earth_moon', () => earth_moon);
