# 🪙 Bitcoin Wallet Lib

**Bitcoin Wallet Lib** is a lightweight vanilla JavaScript library for generating and managing Bitcoin wallets using the BIP39 standard. It supports various address formats, private key conversions, WIF, and QR Code generation. It works seamlessly in both the browser (via CDN) and Node.js environments.

---

## 🚀 Features

- ✅ Generate BIP39 mnemonics
- ✅ Convert mnemonic to private key and wallet
- ✅ Generate Legacy, SegWit, and Native SegWit addresses
- ✅ Export/import keys via WIF
- ✅ Create QR codes for addresses or data
- ✅ Works in the browser or Node.js
- ✅ Includes TypeScript definitions

---

## 📦 Installation

### Option: CDN (Browser)

```html
<script src="https://unpkg.com/bitcoin-wallet-lib"></script>
<script>
  const mnemonic = BitcoinWalletLib.getMnemonic();
  console.log(mnemonic);
</script>
```

Or via jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/bitcoin-wallet-lib"></script>
```

---

## 🧠 Usage Example

```js
// Generate a mnemonic
const mnemonic = BitcoinWalletLib.getMnemonic();

// Set the network (mainnet or testnet)
BitcoinWalletLib.setNetwork('mainnet'); // or 'testnet'

// Create wallet from mnemonic
const wallet = BitcoinWalletLib.getWalletFromMnemonic(mnemonic);

// Extract private key
const privKey = BitcoinWalletLib.getPrivateKey(wallet);

// Generate addresses
const legacy = BitcoinWalletLib.getLegacyAddressFromPrivateKey(privKey);
const segwit = BitcoinWalletLib.getSegwitAddressFromPrivateKey(privKey);
const nativeSegwit = BitcoinWalletLib.getNativeSegwitAddressFromPrivateKey(privKey);

// Export WIF
const wif = BitcoinWalletLib.getWIF(privKey);

// Restore wallet from WIF
const walletFromWIF = BitcoinWalletLib.getWalletFromWIF(wif);

```

---

## 📘 API Reference

### `getMnemonic(): string`

Generates and returns a 12-word BIP39 mnemonic.

### `setNetwork(network: 'mainnet' | 'testnet'): void`

Sets the active Bitcoin network.

### `getWalletFromMnemonic(mnemonic: string): WalletObject`

Returns a wallet object derived from the given mnemonic.

### `getPrivateKey(): string`

Returns a new private key (hex format).

### `getLegacyAddressFromPrivateKey(privateKey: string): string`

Returns a **Legacy address (P2PKH)** from a private key.

### `getSegwitAddressFromPrivateKey(privateKey: string): string`

Returns a **SegWit address (P2SH)** from a private key.

### `getNativeSegwitAddressFromPrivateKey(privateKey: string): string`

Returns a **Native SegWit address (Bech32)** from a private key.

### `getWIF(privateKey: string): string`

Converts a private key to WIF (Wallet Import Format).

### `getWalletFromWIF(wif: string): WalletObject`

Restores a wallet object from a WIF string.

---

## 📝 License

MIT License
© 2025 [Jeferson F Silva](https://github.com/jeferson0993)

---

## 🤝 Contributing

Pull requests and suggestions are welcome!
Feel free to fork the project and submit improvements.

---

## 📬 Contact

Have questions or suggestions?
Open an issue or reach out via GitHub.
