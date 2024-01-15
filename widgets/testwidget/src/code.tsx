// This is a counter widget with buttons to increment and decrement the number.

const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, Input, Frame } =
  widget;
import { StatusBadge } from "../../common/StatusBadge";

function Widget() {
  return (
    <AutoLayout width={800} overflow="visible">
      <AutoLayout
        verticalAlignItems={"start"}
        spacing={8}
        padding={16}
        cornerRadius={8}
        fill={"#FFFFFF"}
        stroke={"#E6E6E6"}
        width={300}
        height={"hug-contents"}
        overflow="visible"
        direction="vertical"
      >
        <StatusBadge status={"not started"} />
        <Frame width={300} height={48} fill={"#0016a6"}>
          <Text fill={"#FFFFFF"} fontSize={24}>
            Q1 202
          </Text>
        </Frame>
        <Frame width={32} height={32} fill={"#CC0000"} cornerRadius={99} />
      </AutoLayout>
    </AutoLayout>
  );
}

widget.register(Widget);
