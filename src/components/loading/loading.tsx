import { Spin } from "antd";
import clsx from "clsx";

export function Loading({ className, height }: { className?: string; height?: string }) {
  return (
    <Spin
      delay={200}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: height,
      }}
      size="large"
      className={clsx("loading", className)}
    />
  );
}
