import Hello from "./Components/Start/Hello";

const data = [
    { to: "Europe", color: "orange", size: "33px" },
    { to: "America", color: "navy", size: "20px" },
    { to: "Antarctica", color: "yellow", size: "28px" }
];

function App() {
    return (
        <>
            <div className="app">
                <Hello to={"Madagascar"} color={"red"} size={"15px"} />
                <Hello to={"Africa"} color={"green"} size={"20px"} />
                <Hello to={6 * 9} color={"blue"} size={"25px"} />

                {data.map(d => (
                    <Hello key={d.to} to={d.to} color={d.color} size={d.size} />
                ))}
            </div>
        </>
    );
}

export default App;
