import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            posi: 0,
            ballPosition: { left: "0px" }
        };

        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(e) {
        if (e.keyCode === 39) {
            this.setState((prevState) => {
                const newPos = prevState.posi + 5;
                return {
                    posi: newPos,
                    ballPosition: { left: newPos + "px" }
                };
            });
        }
    }

    buttonClickHandler() {
        this.setState({ renderBall: true });
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown); // ✅ FIX
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    render() {
        return (
            <div className="playground">
                {this.state.renderBall ? (
                    <div className="ball" style={this.state.ballPosition}></div>
                ) : (
                    <button className="start" onClick={this.buttonClickHandler}>
                        Start
                    </button>
                )}
            </div>
        );
    }
}

export default App;