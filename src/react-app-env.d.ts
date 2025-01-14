/// <reference types="react-scripts" />

interface Window {
  ethereum?: {
    isMetaMask?: true;
    request?: (...args: any[]) => Promise<void>;
  };
  BinanceChain?: {
    ethSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>;
  };
  _store: unknown;
  _workingNode?: string;
}
