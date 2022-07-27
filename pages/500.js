export default function Custom404() {
    const styleBody = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const style404 = {
        color: '#303030',
        fontFamily: "monospace",
        fontSize: "3em"
    };

    return (
        <body style={styleBody}>
            <h1 style={style404}>500 - Server-side error occurred &#x1F645;</h1>
        </body>
    )
}