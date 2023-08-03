import type { AppCurrency, ChainInfo } from '@keplr-wallet/types'

import { Bech32Address } from 'util/bech32'

const {
    VITE_LOCAL_HOSTNAME,
    VITE_PROXY_URL_QWOYN_MAINNET,
    VITE_PROXY_URL_QWOYN_TESTNET,
} = import.meta.env

const QWOYN: AppCurrency = {
    coinDenom: 'qwoyn',
    coinMinimalDenom: 'uqwoyn',
    coinDecimals: 6,
    coinGeckoId: 'qwoyn',
    coinImageUrl:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png',
}

/**
 *  @see https://github.com/cosmos/chain-registry/blob/master/qwoyn/assetlist.json
 */
const currencies: AppCurrency[] = [QWOYN]

export const qwoynLocal: ChainInfo = {
    // hardcoded port values based on makefile
    rpc: `${VITE_LOCAL_HOSTNAME}:26657`,
    rest: `${VITE_LOCAL_HOSTNAME}:1317`,
    chainId: 'qwoyn-local',
    chainName: 'Qwoyn Local',
    stakeCurrency: QWOYN,
    bip44: {
        coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config('qwoyn'),
    currencies,
    feeCurrencies: currencies,
}

/**
 * @see https://github.com/cosmos/chain-registry/blob/master/qwoyn/chain.json
 */
export const qwoynMainnet: ChainInfo = {
    rpc: `${VITE_PROXY_URL_QWOYN_MAINNET}/ledger`,
    rest: `${VITE_PROXY_URL_QWOYN_MAINNET}/ledger-rest`,
    chainId: 'qwoyn-1',
    chainName: 'Qwoyn',
    stakeCurrency: QWOYN,
    bip44: {
        coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config('qwoyn'),
    currencies,
    feeCurrencies: currencies,
}

export const qwoynTestnet: ChainInfo = {
    rpc: `${VITE_PROXY_URL_QWOYN_TESTNET}/ledger`,
    rest: `${VITE_PROXY_URL_QWOYN_TESTNET}/ledger-rest`,
    chainId: 'earendel-1',
    chainName: 'Qwoyn Earendel',
    stakeCurrency: QWOYN,
    bip44: {
        coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config('qwoyn'),
    currencies,
    feeCurrencies: currencies,
}
