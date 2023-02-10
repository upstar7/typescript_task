import BigNumber from 'bignumber.js';

export type QuoteRequest = {
  fromTokenAddress: string;
  toTokenAddress: string;
  amount: string;
  fee?: string;
};

export type QuoteToken = {
  address: string;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
  tags: string[];
};

export type QuoteRoutePart = {
  fromTokenAddress: string;
  name: string;
  part: number;
  toTokenAddress: string;
};

export type QuoteResponse = {
  estimatedGas: number;
  fromToken: QuoteToken;
  fromTokenAmount: string;
  toToken: QuoteToken;
  toTokenAmount: string;
  protocols: QuoteRoutePart[][][];
};

export type SwapRequest = {
  fromTokenAddress: string;
  toTokenAddress: string;
  amount: string;
  fromAddress: string;
  slippage: number;
  fee?: string;
  referrerAddress?: string;
  disableEstimate?: boolean;
};

export type SwapTx = {
  from: string;
  to: string;
  data: string;
  value: string;
  gasPrice: string;
  gas: string;
};

export type SwapResponse = {
  fromToken: QuoteToken;
  fromTokenAmount: string;
  toToken: QuoteToken;
  toTokenAmount: string;
  protocols: string[];
  tx: SwapTx;
};

export type PriceRequest = {
  tokenAddresses: string[];
};

export type PriceResponse = Record<string, BigNumber>;

export interface IOneInchApi {
  getQuote(request: QuoteRequest): Promise<QuoteResponse>;

  getSwap(request: SwapRequest): Promise<SwapResponse>;

  getPriceInNative(request: PriceRequest): Promise<PriceResponse>;
}
