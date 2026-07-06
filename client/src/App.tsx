function App() {
    return (
        <main
            style={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--bg-primary)",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    animation: "fadeIn 1.2s ease",
                }}
            >
                <h1
                    style={{
                        fontSize: "4rem",
                        color: "var(--accent)",
                        letterSpacing: "6px",
                    }}
                >
                    InGen OS
                </h1>

                <p
                    style={{
                        color: "var(--text-muted)",
                        marginTop: "1rem",
                        fontSize: "1.1rem",
                    }}
                >
                    Jurassic Park Operations System
                </p>
            </div>
        </main>
    );
}

export default App;