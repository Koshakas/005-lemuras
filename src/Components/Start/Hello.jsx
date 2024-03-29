import BorderWord from "./BorderWord";

function Hello({ to, color, size }) {
    return (
        <h1 style={{ color: color, fontSize: size }}>
            Hello,
            <BorderWord word={to} />!
        </h1>
    );
}

export default Hello;
