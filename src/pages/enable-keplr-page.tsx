import { bootstrapKeplr } from 'store/wallet.store'

import { ChainSelect } from '@/organisms/chain-select'
import { AlertTemplate } from '@/templates/alert-template'

export const EnableKeplr = () => {
  return (
    <AlertTemplate
      status="info"
      text="Keplr Wallet needs to be installed and open to use this app"
      btnText="Enable"
      onBtnClick={bootstrapKeplr}
    >
      <ChainSelect />
    </AlertTemplate>
  )
}
