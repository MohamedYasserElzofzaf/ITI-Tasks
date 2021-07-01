import React from "react";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            items: [],
        };
    }

    submitData = (e) => {
        e.preventDefault();

        let items = [...this.state.items];

        items.push({
            name: this.state.name,
            age: this.state.age,
        });
        this.setState({
            items,
            name: "",
            age: "",
        });
    };

    addUserName = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    addUserAge = (e) => {
        this.setState({
            age: e.target.value,
        });
    };

    render() {
        return ( <
            div className = "container" >
            <
            button type = "button"
            className = "btn btn-primary"
            data - bs - toggle = "modal"
            data - bs - target = "#exampleModal" >
            Add User <
            /button>

            <
            div className = "modal fade"
            id = "exampleModal"
            tabindex = "-1"
            aria - labelledby = "exampleModalLabel"
            aria - hidden = "true" >
            <
            div className = "modal-dialog" >
            <
            div className = "modal-content" >
            <
            div className = "modal-header" >
            <
            h5 className = "modal-title"
            id = "exampleModalLabel" >
            Add User Please <
            /h5> <
            button type = "button"
            className = "btn-close"
            data - bs - dismiss = "modal"
            aria - label = "Close" >
            < /button> <
            /div> <
            div className = "modal-body" >
            <
            form >
            <
            label > Name < /label> <
            input type = "text"
            value = { this.state.name }
            className = "form-control mb-3"
            id = "name"
            aria - describedby = "emailHelp"
            onChange = { this.addUserName }
            /> <
            label > Age < /label> <
            input type = "number"
            value = { this.state.age }
            className = "form-control"
            id = "age"
            aria - describedby = "emailHelp"
            onChange = { this.addUserAge }
            /> <
            /form> <
            /div> <
            div className = "modal-footer" >
            <
            button type = "button"
            className = "btn btn-primary"
            onClick = { this.submitData } >
            Save <
            /button> <
            /div> <
            /div> <
            /div> <
            /div>

            { /* table */ }

            <
            table className = "table" >
            <
            thead >
            <
            tr >
            <
            th scope = "col" > Name < /th> <
            th scope = "col" > Age < /th> <
            /tr> <
            /thead> <
            tbody > {
                this.state.items.map((item) => {
                    return ( <
                        tr >
                        <
                        td > { item.name } < /td> <
                        td > { item.age } < /td> <
                        /tr>
                    );
                })
            } <
            /tbody> <
            /table> <
            /div>
        );
    }
}

export default Home;