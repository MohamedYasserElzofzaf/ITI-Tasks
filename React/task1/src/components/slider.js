import { render } from "@testing-library/react";
import React from "react";

class imageSlider extends React.Component {
    imgsURL = [
        "/Ted/2.jpg",
        "/Ted/3.jpg",
        "/Ted/4.jpg",
        "/Ted/5.jpg",
        "/Ted/6.jpg",
        "/Ted/7.jpg",
        "/Ted/8.jpg",
        "/Ted/9.jpg",
        "/Ted/10.jpg",
        "/Ted/007.jpg",
    ];
    constructor() {
        super();
        this.state = {
            i: 0,
            imgURL: this.imgsURL[0],
        };
    }
    next = () => {
        let { i } = this.state;
        if (this.imgsURL.length - 1 > i) i++;
        let img = this.imgsURL[i];
        this.setState({ i, imgURL: img });
        // console.log("clicked");
    };

    prev = () => {
        let { i } = this.state;
        if (i > 0) i--;
        let img = this.imgsURL[i];
        this.setState({ i, imgURL: img });
    };
    // play = () => {}
    // stop = () => {}
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
                border: "1px solid",
                borderRadius: "10px",
                margin: "auto",
                width: "500px",
                height: "300px",
                marginBottom: "20px",
            },
            btn: {
                backgroundColor: "#008CBA",
                fontSize: "12px",
                padding: "12px 28px",
                borderRadius: "10px",
                boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                float: "left",
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
            div >
            <
            input type = "button"
            style = { styles.btn }
            value = "Next"
            onClick = { this.next }
            />{" "} <
            input type = "button"
            style = { styles.btn }
            value = "Previous"
            onClick = { this.prev }
            />{" "} <
            /div>{" "} <
            /div>
        );
    }
}

export default imageSlider;