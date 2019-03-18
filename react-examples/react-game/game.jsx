import React from 'react';
import ReactDOM from 'react-dom';
import ReactCanvas from 'react-canvas';

const Surface = ReactCanvas.Surface;
const Image = ReactCanvas.Image;
const Text = ReactCanvas.Text;

class Game extends React.Component {
    render() {
        const surfaceWidth = window.innerWidth;
        const surfaceHeight = window.innerHeight;
        const imageStyle = this.getImageStyle();
        const textStyle = this.getTextStyle();

        return (
            <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
                <Image style={imageStyle} src='...' />
                <Text style={textStyle}>
                    Here is some text below an image.
                </Text>
            </Surface>
        );
    }

    getImageHeight() {
        return Math.round(window.innerHeight / 2);
    }

    getImageStyle() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: this.getImageHeight()
        };
    }

    getTextStyle() {
        return {
            top: this.getImageHeight() + 10,
            left: 0,
            width: window.innerWidth,
            height: 20,
            lineHeight: 20,
            fontSize: 12
        };
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('app')
);