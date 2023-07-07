import MessageBar from "../../resources/MessageBar.svg";

function computeMessageHeight(animatePercentage: number) {
  return 57 * animatePercentage + 18;
}

export default function MessageSend({
  animatePercentage,
}: {
  animatePercentage: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: 300,
          width: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          borderColor: "white",
          borderWidth: 1,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          position: "relative",
        }}
      >
        <div style={{ padding: 15, width: "100%", zIndex: 1 }}>
          <MessageBar />
        </div>
        <div
          style={{
            backgroundColor: "#2b44e9",
            position: "absolute",
            bottom: computeMessageHeight(animatePercentage),
            right: 15,
            padding: 10,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 20,
          }}
        >
          <p style={{ color: "white" }}>sorry accident!</p>
        </div>
      </div>
    </div>
  );
}
