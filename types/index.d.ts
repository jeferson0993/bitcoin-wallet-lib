declare namespace BitcoinWalletLib {
  interface Wallet {
    privateKey: string;
    legacyAddress?: string;
    segwitAddress?: string;
    nativeSegwitAddress?: string;
  }

  function getMnemonic(): string;
  function setNetwork(network: 'mainnet' | 'testnet'): void;
  function getPrivateKey(mnemonic: string, path?: string): string;
  function getLegacyAddressFromPrivateKey(privateKey: string): string;
  function getNativeSegwitAddressFromPrivateKey(privateKey: string): string;
  function getSegwitAddressFromPrivateKey(privateKey: string): string;
  
  function getWalletFromMnemonic(mnemonic: string, path?: string): Wallet;
  function getWalletFromWIF(wif: string): Wallet;
}

export = BitcoinWalletLib;
export as namespace BitcoinWalletLib;