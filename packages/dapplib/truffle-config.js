require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million pulse gesture bread symptom twenty'; 
let testAccounts = [
"0x3c8d1eb5db569127d3d18fac47375f8426545fe88993e9b99c88a30280629443",
"0x37d76a53e21dc0e3fc463655c29f0d65a9f2f8d076c4d59f11124b54d187aabc",
"0xe111398fd0963927085623b0f50ede5ddf413eac93a363344fa5250c15e13e9a",
"0xc146d13efe05ff2a90cff2bce78c0456d8d8e228941f662f5980c7a1ff7d05ce",
"0x428931036a79d3b9ed17a572c2d4f88bc9b8d6317034c011bd385ce967faaca4",
"0xeba19b7ba50749e5bb2fc1fd70843c1e2fbdc048b79cbd0ecfce35c573b764e2",
"0x7ef61af002977e6e69067b9ebca02154ea8c8592f10aed73cd285a9d8e73bac8",
"0xa4066ff7ed629d2d2e6c7a8f8cfa3e0701942d1eebf431883888981cd9feb7f8",
"0xbcae199e6dae404b35e9a80fbccde96980902221c136852f2cc353fb474572d7",
"0x952a9f4c398f6d7bb30f15868f3d01441de33f6e8d4719caeb85f80d08b72e08"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

