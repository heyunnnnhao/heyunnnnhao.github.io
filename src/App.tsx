import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "src/router/router";
import { AntdConfigProvider } from "src/common/config-provider";

import "src/common/style/app.scss";

export const App = observer(() => {
  useEffect(() => {}, []);

  return (
    <AntdConfigProvider>
      <BrowserRouter />
    </AntdConfigProvider>
  );
});
