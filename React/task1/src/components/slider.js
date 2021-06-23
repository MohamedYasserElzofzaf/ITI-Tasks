import React from "react";

class imageSlider extends React.Component {
    constructor() {
        super();
        this.state = {
            imgURL: "/Ted/1.jpg",
            i: 0,
        };
    }
    next = () => {
        let { i } = this.state;
        if (i < 10) {
            this.setState({
                i: i++,
                imgURL: "/Ted/" + this.i + ".jpg",
            });
            console.log("clicked");
        }
    };
    prev = () => {};
    play = () => {};
    stop = () => {};
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
            img: {
                border: "1 px solid# ddd",
                borderRadius: "4 px",
                padding: "5 px",
                width: "150 px",
            },
        };
        return ( <
            div style = { styles.container } >
            <
            h1 > Image Slider < /h1>{" "} <
            img style = { styles.img }
            src = { this.state.imgURL }
            alt = "TedLasso" / >
            <
            input type = "button"
            value = "Next"
            onClick = { this.next }
            />{" "} <
            /div>
        );
    }
}
export default imageSlider;