export default function E404() {
    const styleBody = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const style404 = {
        color: 'white',
        fontFamily: "monospace",
        fontSize: "3em"
    };

    return (
        <body style={styleBody}>
            <h1 style={style404}>404 - Page not found &#x1F635;</h1>
        </body>
    )
}