// This is a counter widget with buttons to increment and decrement the number.

const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, Input, Frame } =
  widget;

// 3XS - 2XL
const variationsProps = {
  "3xs": {
    paddingX: 10,
    paddingY: 10,
    fontSize: 10,
    gap: 10,
    widthMultiplier: 1,
  },
  "2xs": {
    paddingX: 10,
    paddingY: 10,
    fontSize: 10,
    gap: 10,
    widthMultiplier: 2,
  },
  xs: {
    paddingX: 10,
    paddingY: 10,
    fontSize: 10,
    gap: 10,
    widthMultiplier: 2,
  },
};

function Widget(props: Partial<AutoLayoutProps>) {
  const [text, setText] = useSyncedState("text", "Heading label");
  const [color, setColor] = useSyncedState("theme", "#e06666");
  const [fruit, setFruit] = useSyncedState("fruit", "mango");
  const fruitOptions = [
    { option: "mango", label: "Mango" },
    { option: "apple", label: "Apple" },
  ];
  const [width, setwidth] = useSyncedState("width", 500);
  const widthOptions = [
    { option: "mango", label: "Mango" },
    { option: "apple", label: "Apple" },
  ];
  usePropertyMenu(
    [
      {
        itemType: "action",
        tooltip: "Action",
        propertyName: "action",
      },
      {
        itemType: "separator",
      },
      {
        itemType: "color-selector",
        propertyName: "colors",
        tooltip: "Color selector",
        selectedOption: color,
        options: [
          { option: "#e06666", tooltip: "Red" },
          { option: "#ffe599", tooltip: "Yellow" },
        ],
      },
      {
        itemType: "dropdown",
        propertyName: "fruits",
        tooltip: "Fruit selector",
        selectedOption: fruit,
        options: fruitOptions,
      },
      {
        itemType: "separator",
      },
      {
        itemType: "dropdown",
        propertyName: "fruits",
        tooltip: "Fruit selector",
        selectedOption: fruit,
        options: fruitOptions,
      },
      {
        itemType: "link",
        propertyName: "fruitLink",
        tooltip: "Learn about fruit!",
        icon: null,
        href: "https://en.wikipedia.org/wiki/Fruit",
      },
    ],
    ({ propertyName, propertyValue }: any) => {
      if (propertyName === "colors") {
        setColor(propertyValue);
      } else if (propertyName === "fruits") {
        setFruit(propertyValue);
      } else if (propertyName === "action") {
        console.log(propertyName);
      }
    }
  );
  return (
    <AutoLayout
      name="LabelsHeadingLabelInvertFalseSizeLargeThemeGreen"
      fill="#BAD94C"
      cornerRadius={16}
      direction="horizontal"
      spacing={8}
      padding={{
        vertical: 40,
        horizontal: 64,
      }}
      width={"hug-contents"}
      horizontalAlignItems="center"
      {...props}
    >
      <Input
        value={text}
        fill="#002412"
        verticalAlignText="center"
        horizontalAlignText="center"
        lineHeight="100%"
        fontFamily="Inter"
        fontSize={168}
        letterSpacing={-0.2}
        fontWeight={700}
        onTextEditEnd={(e) => {
          setText(e.characters);
        }}
      />
    </AutoLayout>
  );
}

widget.register(Widget);
