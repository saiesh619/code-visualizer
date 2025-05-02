export default function LLVMTab({ llvmIR }: { llvmIR: string }) {
    return (
      <div style={{ padding: "1rem", backgroundColor: "#1e1e1e", color: "lightgreen" }}>
        <h3>LLVM IR</h3>
        <pre>{llvmIR}</pre>
      </div>
    );
  }
  