import React from 'react';
import { Body, Sprite } from 'react-game-kit';

export default class Player extends React.Component {
    getWrapperStyles() {
        return {
            position: 'absolute',
            //transform: `translate(${targetX * scale}px, ${y * scale}px)`,
            transformOrigin: 'left top',
        };
    }
    render() {
        return (
            <div style={this.getWrapperStyles()}>
                <Sprite
                    src="./react-game/spritesheet.png"
                    offset={[0, 0]}
                    tileWidth={250}
                    tileHeight={250}
                />
            </div>
        )
    }
}