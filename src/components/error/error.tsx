import { useRouteError, NavLink } from "react-router-dom";
import { Button, Result } from "antd";
import status from "http-status";

export function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  const backHomeButton = (
    <Button type="primary">
      <NavLink to={""}>Back Home</NavLink>
    </Button>
  );

  switch (error.status) {
    case status.NOT_FOUND:
      return (
        <Result
          status={status.NOT_FOUND}
          title={status.NOT_FOUND}
          subTitle="Sorry, the page you visited does not exist."
          extra={backHomeButton}
        />
      );
    case status.FORBIDDEN:
      return (
        <Result
          status={status.FORBIDDEN}
          title={status.FORBIDDEN}
          subTitle="Sorry, you are not authorized to access this page."
          extra={backHomeButton}
        />
      );
    default:
      return (
        <Result
          status={status.INTERNAL_SERVER_ERROR}
          title={status.INTERNAL_SERVER_ERROR}
          subTitle="Sorry, something on server went wrong."
          extra={backHomeButton}
        />
      );
  }
}
