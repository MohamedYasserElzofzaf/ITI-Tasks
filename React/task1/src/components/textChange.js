import { render } from "@testing-library/react";
import React from "react";

export default class TextChange extends React.Component {
    constructor() {
        super();

        this.state = {
            txt: "",
        };
    }

    changeText = (e) => {
        console.log(e.target.value);
        this.setState({ txt: e.target.value });
    };

    render() {
        const styles = {
            container: {
                backgroundColor: "lightgrey",
                padding: "5px",
                margin: "5px auto",
                border: "2px solid black",
                borderRadius: "10px",
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
            input type = "button"
            value = "Reset"
            onClick = {
                () => {
                    this.setState({});
                }
            }
            />{" "} <
            /div>
        );
    }
}