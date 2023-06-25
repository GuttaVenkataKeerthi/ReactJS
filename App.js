const heading = React.createElement("div",{id:"parent1"},
                [React.createElement("div",{id:"child1"},
                React.createElement("h1",{},"Welcome to React JS"),
                React.createElement("h1",{},"Hello React JS"))],
                [React.createElement("div",{id:"child2"},
                React.createElement("h1",{},"React JS"),
                React.createElement("h1",{},"Java Script"))]
            );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


{/* <div class="parent1">
    <div class="child1">
        <h1>Welcome to React JS</h1>
        <h1>Hello React JS</h1>
    </div>
    <div class="child2">
        <h1>Welcome to React JS</h1>
        <h1>Hello React JS</h1>
    </div>
</div> */}