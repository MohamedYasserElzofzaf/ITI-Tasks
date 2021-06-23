import React from "react";

class Text extends React.Component {
    constructor() {
        super();

        this.state = {
            txt: "",
        };
        // this.changeText = this.changeText.bind(this);
        // this.reset = this.reset.bind(this);
    }

    changeText = (e) => {
        this.setState({ txt: e.target.value });
    };
    reset = () => {
        this.setState({ txt: "" });
    };
    render() {
        const styles = {
            container: {
                backgroundColor: "skyBlue",
                padding: "5px",
                margin: "5px auto",
                border: "2px solid black",
                borderRadius: "10px",
                textAlign: "center",
            },
            header: { textAlign: "center", borderBottom: "2px solid black" },
        };
        return ( <
            div style = { styles.container } >
            <
            h1 style = { styles.header } > Text Change < /h1>{" "} <
            input type = "text"
            value = { this.state.txt }
            onChange = { this.changeText }
            />{" "} <
            p > { this.state.txt } < /p>{" "} <
            input type = "button"
            value = "Reset"
            onClick = { this.reset }
            />{" "} <
            /div>
        );
    }
}

export default Text;