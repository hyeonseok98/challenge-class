import React, { PropsWithChildren } from "react";

function ProviderLayout({ children }: PropsWithChildren) {
  return (
    <div id="some-kind-of-provider">
      <h1>프로바이더 주입 완료</h1>
      {children}
    </div>
  );
}

export default ProviderLayout;
