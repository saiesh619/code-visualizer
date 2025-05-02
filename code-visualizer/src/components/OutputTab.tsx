export default function OutputTab({ output }: { output: string }) {
    return (
      <div style={{ padding: "12px", backgroundColor: "#1c1e29", height: "100%" }}>
        <label style={{ color: "#aaa", fontSize: "14px", marginBottom: "4px", display: "block" }}>Output:</label>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#0f111a",
            color: "#d4d4d4",
            padding: "10px",
            border: "1px solid #2d2f3a",
            borderRadius: "4px",
            fontFamily: "monospace",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
          }}
        >
          {output}
        </div>
      </div>
    );
  }
  