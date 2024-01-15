const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, Input, Frame } =
  widget;

function StatusBadgeStatusNotStarted(props: Partial<AutoLayoutProps>) {
  return (
    <AutoLayout
      name="StatusBadgeStatusNotStarted"
      fill="#C1C1C1"
      cornerRadius={96}
      overflow="visible"
      spacing={4}
      padding={{
        vertical: 2,
        horizontal: 8,
      }}
      horizontalAlignItems="center"
      verticalAlignItems="center"
      {...props}
    >
      <SVG
        name="Union"
        height={10}
        width={10}
        src="<svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M1 5C1 2.79086 2.79086 1 5 1C5.84914 1 6.63649 1.26459 7.28408 1.71583L1.71583 7.28408C1.26459 6.63649 1 5.84914 1 5ZM2.38618 8.02795C3.08722 8.63365 4.00083 9 5 9C7.20914 9 9 7.20914 9 5C9 4.00083 8.63365 3.08722 8.02795 2.38618L2.38618 8.02795ZM5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0Z' fill='#737373'/>
</svg>
"
      />
      <Text
        name="Not started"
        fill="#737373"
        verticalAlignText="center"
        lineHeight={20}
        fontFamily="Inter"
        fontSize={9}
        fontWeight={600}
      >
        Not started
      </Text>
    </AutoLayout>
  );
}

// Work in Progress Badge
function StatusBadgeStatusWorkInProgress(props: Partial<AutoLayoutProps>) {
  return (
    <AutoLayout
      name="StatusBadgeStatusWorkInProgress"
      fill="#00C1B6"
      cornerRadius={96}
      overflow="visible"
      spacing={4}
      padding={{
        vertical: 2,
        horizontal: 8,
      }}
      horizontalAlignItems="center"
      verticalAlignItems="center"
      {...props}
    >
      <SVG
        name="Union"
        height={14}
        width={13}
        src="<svg width='13' height='14' viewBox='0 0 13 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M8.49968 4.44697L12.5732 10.8482C13.4429 12.2148 12.4632 14 10.843 14H2.05479C0.434888 14 -0.545194 12.2151 0.324611 10.8482L4.39812 4.44697V2.46094C3.71964 2.46094 3.16765 1.90895 3.16765 1.23047C3.16765 0.551988 3.71964 0 4.39812 0H8.49968C9.17819 0 9.73015 0.551988 9.73015 1.23047C9.73015 1.90895 9.17816 2.46094 8.49968 2.46094V4.44697ZM5.21846 4.56641C5.21846 4.64442 5.1962 4.72079 5.15434 4.78661L2.85536 8.39937C3.51992 8.47309 4.19181 8.31261 4.76031 7.9336L6.04194 7.07916C6.88881 6.51457 7.90422 6.33478 8.85868 6.53898L7.74352 4.78661C7.70163 4.72079 7.6794 4.64442 7.6794 4.56641V2.46094C7.45288 2.46094 7.26924 2.2773 7.26924 2.05078C7.26924 1.82427 7.45288 1.64062 7.6794 1.64062H8.49971C8.72587 1.64062 8.90987 1.45663 8.90987 1.23047C8.90987 1.00431 8.72587 0.820312 8.49971 0.820312H4.39815C4.17199 0.820312 3.98799 1.00431 3.98799 1.23047C3.98799 1.45663 4.17199 1.64062 4.39815 1.64062H5.21846C5.44497 1.64062 5.62862 1.82427 5.62862 2.05078C5.62862 2.2773 5.44497 2.46094 5.21846 2.46094V4.56641ZM2.05479 13.1797H10.843C11.815 13.1797 12.4031 12.1087 11.8811 11.2886L9.60549 7.71266C8.64928 7.11741 7.43907 7.1336 6.49689 7.76171L5.21526 8.61615C4.60003 9.02631 3.8904 9.23757 3.17161 9.23757C2.90665 9.23757 2.64054 9.20839 2.37736 9.15039L1.01668 11.2886C0.494853 12.1086 1.08272 13.1797 2.05479 13.1797ZM2.75735 11.1289C2.75735 10.4504 3.30934 9.89844 3.98782 9.89844C4.66633 9.89844 5.21829 10.4504 5.21829 11.1289C5.21829 11.8074 4.6663 12.3594 3.98782 12.3594C3.30934 12.3594 2.75735 11.8074 2.75735 11.1289ZM3.57767 11.1289C3.57767 11.3551 3.76166 11.5391 3.98782 11.5391C4.21401 11.5391 4.39798 11.3551 4.39798 11.1289C4.39798 10.9027 4.21398 10.7188 3.98782 10.7188C3.76166 10.7188 3.57767 10.9027 3.57767 11.1289ZM8.08939 8.25781C7.41091 8.25781 6.85892 8.8098 6.85892 9.48828C6.85892 10.1668 7.41091 10.7188 8.08939 10.7188C8.76787 10.7188 9.31985 10.1668 9.31985 9.48828C9.31985 8.8098 8.76789 8.25781 8.08939 8.25781ZM8.08939 9.89844C7.86323 9.89844 7.67923 9.71444 7.67923 9.48828C7.67923 9.26212 7.86323 9.07812 8.08939 9.07812C8.31555 9.07812 8.49954 9.26212 8.49954 9.48828C8.49954 9.71444 8.31557 9.89844 8.08939 9.89844ZM6.85892 11.1289C6.85892 11.3554 6.67528 11.5391 6.44876 11.5391C6.22224 11.5391 6.0386 11.3554 6.0386 11.1289C6.0386 10.9024 6.22224 10.7188 6.44876 10.7188C6.67528 10.7188 6.85892 10.9024 6.85892 11.1289ZM9.73001 11.5391C9.95653 11.5391 10.1402 11.3554 10.1402 11.1289C10.1402 10.9024 9.95653 10.7188 9.73001 10.7188C9.50349 10.7188 9.31985 10.9024 9.31985 11.1289C9.31985 11.3554 9.50349 11.5391 9.73001 11.5391ZM8.49954 11.9492C8.49954 12.1757 8.31591 12.3594 8.08939 12.3594C7.86286 12.3594 7.67923 12.1757 7.67923 11.9492C7.67923 11.7227 7.86286 11.5391 8.08939 11.5391C8.31591 11.5391 8.49954 11.7227 8.49954 11.9492Z' fill='#6CFFF4'/>
</svg>
"
      />
      <Text
        name="work in progress"
        fill="#FFF"
        verticalAlignText="center"
        lineHeight={20}
        fontFamily="Inter"
        fontSize={9}
        fontWeight={600}
      >
        work in progress
      </Text>
    </AutoLayout>
  );
}

type StatusProps = {
  status: "not started" | "work in progress";
};

export const StatusBadge = (props: StatusProps) => {
  const { status } = props;
  return (
    <>
      {status === "not started" ? (
        <StatusBadgeStatusNotStarted />
      ) : status === "work in progress" ? (
        <StatusBadgeStatusWorkInProgress />
      ) : null}
    </>
  );
};
