type BridgeType = "navigate" | "logout";
interface BridgeRequestData extends Record<BridgeType, unknown> {
  navigate: {
    id: string;
  };
  logout: {
    message: string;
  };
}
export interface BrowserActionParameters<T> {
  bridge: BridgeType;
  data: T;
}
export const sendBridge = <T extends BridgeType>(
  bridge: T,
  data: BridgeRequestData[T],
  userAgent: "Android" | "iOS" | "",
  browserAction?: (params: BrowserActionParameters<BridgeRequestData[T]>) => any
) => {
  const globalThis = window as any;
  const stringData =
    typeof data === "object" ? JSON.stringify(data) : String(data);
  if (userAgent !== "") {
    if (userAgent === "iOS")
      globalThis.webkit.messageHandlers[bridge].postMessage(stringData);
    else globalThis.webview[bridge](stringData);
  } else return browserAction?.({ bridge, data });
}; // special thanks to: team-xquare (https://github.com/team-xquare/xquare-frontend/blob/main/shared/xbridge/src/index.ts)
