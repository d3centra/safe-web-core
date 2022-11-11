import type React from 'react'
import type { BeamerConfig, BeamerMethods } from '@services/beamer/types'
import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from '@/config/constants'

declare global {
  interface Window {
    isDesktop?: boolean
    ethereum?: {
      autoRefreshOnNetworkChange: boolean
      isMetaMask: boolean
      _metamask: {
        isUnlocked: () => Promise<boolean>
      }
    }
    beamer_config?: BeamerConfig
    Beamer?: BeamerMethods
    dataLayer?: DataLayerArgs['dataLayer']
    Cypress?
    [`ga-disable-${GOOGLE_ANALYTICS_MEASUREMENT_ID}`]?: boolean
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    danger: true
  }
}

declare module '*.svg' {
  const content: any
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

export {}
