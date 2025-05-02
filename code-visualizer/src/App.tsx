import { useState } from "react";
import MonacoEditor from "./components/MonacoEditor";
import LLVMTab from "./components/LLVMTab";
import CFGTab from "./components/CFGTab";
import ASTTab from "./components/ASTTab";
import DryRunnerTab from "./components/DryRunnerTab";
import OutputTab from "./components/OutputTab"; // Make sure this exists

const rightTabs = ["LLVM", "CFG", "AST", "DryRunner"];

function App() {
  const [activeTab, setActiveTab] = useState("LLVM");
  const [codeOutput, setCodeOutput] = useState("");
  const [llvmIR, setLLVMIR] = useState("LLVM IR content here");

  const renderTab = () => {
    switch (activeTab) {
      case "LLVM":
        return <LLVMTab llvmIR={llvmIR} />;
      case "CFG":
        return <CFGTab />;
      case "AST":
        return <ASTTab />;
      case "DryRunner":
        return <DryRunnerTab />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      {/* Left: Editor */}
      <div style={{ flex: 1, borderRight: "1px solid #444" }}>
        <MonacoEditor setOutput={setCodeOutput} />
      </div>

      {/* Right Panel */}
      <div style={{ flex: 1.2, display: "flex", flexDirection: "column" }}>
        {/* Top: Output */}
        <div style={{ height: "40%", borderBottom: "1px solid #444", overflow: "auto" }}>
          <OutputTab output={codeOutput} />
        </div>

        {/* Bottom: Tab view */}
        <div style={{ flex: 1, overflow: "auto", backgroundColor: "#0f111a" }}>
        <div style={{ height: "60%", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", backgroundColor: "#333" }}>
            {rightTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "10px 15px",
                  backgroundColor: activeTab === tab ? "#444" : "#222",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          

          <div style={{ flex: 1, overflow: "auto" }}>{renderTab()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
