import { MantineProviderProps } from "@mantine/core";

const mantineTheme: MantineProviderProps = {
  theme: {
    colors: {
      "pastel-green": [
        "#CDFACF",
        "#8FE792",
        "#66CD6A",
        "#4CAF50",
        "#309334",
        "#1B7E1F",
        "#0A6D0E",
        "#006001",
        "#005300",
        "#004000",
      ],
    },
    primaryColor: "pastel-green",
    primaryShade: 3,
  },
  children: undefined,
};

export default mantineTheme;
