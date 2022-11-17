import AnimatedButton from "../components/AnimatedButton";

export default function CustomPage() {
  return (
    <div>
      <h1>Custom Page</h1>
      <div
        style={{
          width: "100%",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatedButton />
      </div>
    </div>
  );
}
