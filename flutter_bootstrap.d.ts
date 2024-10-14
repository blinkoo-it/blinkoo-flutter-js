export interface BlinkooFeedInterface {
  init(assetsPath?: string, shouldLoadCanvaskit?: boolean): Promise<void>;
  open(element: HTMLElement, params: BlinkooFeedParams): void;
  close(): void;
  _app?: any;
  _viewId?: number;
}

export interface BlinkooFeedParams {
  title?: string;
  filters?: string;
  playlistFilter?: string;
  apiKey: string;
  environment: string;
}
export declare const BlinkooFeed: BlinkooFeedInterface;
