import React from "react";

import ErrorPage from "~/components/pages/error";

function Page404(): any {
  return <ErrorPage statusCode={404} />;
}

export default Page404;
