import { ConfigProvider, type ThemeConfig } from "antd";

const customTheme: ThemeConfig = {
  token: {
    colorPrimary: "#4d83ce",
    colorPrimaryText: "#4274e1",
    colorLink: "#4274e1",
  },
  components: {
    Button: {
      algorithm: true,
    },
    List: {
      descriptionFontSize: 10,
    },
    Typography: {
      titleMarginBottom: 5,
    },
  },
  algorithm: [],
};

export function AntdConfigProvider({ children }: any) {
  return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>;
}
