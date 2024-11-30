import { ImageResponse } from "next/og";

export function GET(request) {
  const decimal = request.nextUrl.searchParams.get("decimal") === "true";

  const element = (
    <div
      style={{
        display: "flex",
        width: 256,
        height: 256,
        backgroundColor: decimal
          ? "hsl(20.5 90.2% 48.2%)" // Shows black image with decimal hue.
          : "hsl(21 90.2% 48.2%)", // Shows correct orange image with integer hue.
        color: "white",
        WebkitTextStroke: "1px red"
      }}
    >
      hello world
    </div>
  );

  return new ImageResponse(element, { width: 256, height: 256 });
}
