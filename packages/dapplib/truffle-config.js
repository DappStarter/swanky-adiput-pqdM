require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name radar museum come install pave army gauge'; 
let testAccounts = [
"0x01199a883e02089b7fa5c60cbdc641a00e6436cebceb3c96fbb8d6cecaedd821",
"0xb24bf985d3319e758a45b3f6883d62e6822bb78ac458136f5075952246f5819f",
"0x7868f0d64d646b6188ee6f90bb7803a65a28c18a311244b63dff9233a6111ad0",
"0x84399b43c5f52517edf0efa6228c531159fb0b22abe30691415fad843decd92e",
"0x4cb49c0e462ce1ddcb5b4368a74504a80635eb0746710aebf19b60da1090a518",
"0x35082bd3179bcf7d67297aa4ae5bd379d842eea8ace4046269413dc9d5338759",
"0x3d799324b441b56c06f9dd28111aabdfc03d3352b957b09624b05d27d1fe914c",
"0x0585f689382db877a318ea6f19a90cc3500df0752a85a0f7de44bc1124be1bea",
"0x7741510516c94296c1501e33d1422e7a4156746b330bc1d07072d1fc13182224",
"0x056d3897e6a7032efc999a8a34dbde596c9b668b16138005b09769e6738b7a8a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


