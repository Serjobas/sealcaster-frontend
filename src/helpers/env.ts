import {
  ETH_NETWORK,
  ETH_RPC,
  GSN_PAYMASTER_CONTRACT_ADDRESS,
  GSN_SC_RELAY,
  SC_FARCASTER_LEDGER_CONTRACT_ADDRESS,
  SC_FARCASTER_POSTS_CONTRACT_ADDRESS,
} from '@big-whale-labs/constants'
import { cleanEnv, str } from 'envalid'

export default cleanEnv(import.meta.env, {
  VITE_ENCRYPT_KEY: str(),
  VITE_APP_NAME: str(),
  VITE_ETH_NETWORK: str({ default: ETH_NETWORK }),
  VITE_ETH_RPC: str({ default: ETH_RPC }),
  VITE_SC_FARCASTER_LEDGER_CONTRACT_ADDRESS: str({
    default: SC_FARCASTER_LEDGER_CONTRACT_ADDRESS,
  }),
  VITE_SC_FARCASTER_POSTS_CONTRACT_ADDRESS: str({
    default: SC_FARCASTER_POSTS_CONTRACT_ADDRESS,
  }),
  VITE_GSN_PAYMASTER_CONTRACT_ADDRESS: str({
    default: GSN_PAYMASTER_CONTRACT_ADDRESS,
  }),
  VITE_GSN_SC_RELAY: str({ default: GSN_SC_RELAY }),
  VITE_FARCASTER_PROFILE_URL: str({
    default:
      'farcaster://profiles/0xAD81Fb97FEcaFA3A9830d4e2F424aC1776024DA8/posts',
  }),
})
