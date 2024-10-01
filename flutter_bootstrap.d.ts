export interface BlinkooFeedInterface {
  init(): Promise<void>;
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
}
export declare const BlinkooFeed: BlinkooFeedInterface;
