import { Suspense, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "src/router/router";
import { AntdConfigProvider } from "src/common/config-provider";
import { Loading } from "src/components/loading/loading";

import "src/common/style/app.scss";

export const App = observer(() => {
  useEffect(() => {}, []);

  return (
    <Suspense fallback={<Loading />}>
      <AntdConfigProvider>
        <BrowserRouter />
      </AntdConfigProvider>
    </Suspense>
  );
});
