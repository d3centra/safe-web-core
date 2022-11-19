import type { ReactElement } from 'react'
import styled from '@emotion/styled'
import { Grid, Link } from '@mui/material'
import { Card, WidgetBody, WidgetContainer } from '../styled'
import { useRouter } from 'next/router'
import { SafeAppsTag } from '@/config/constants'
import { useRemoteSafeApps } from '@/hooks/safe-apps/useRemoteSafeApps'

const StyledImage = styled.img`
  width: 64px;
  height: 64px;
`

const StyledGrid = styled(Grid)`
  gap: 24px;
`

const StyledGridItem = styled(Grid)`
  min-width: 300px;
`

export const Banner = (): ReactElement | null => {
  const router = useRouter()
  const [featuredApps, _, remoteSafeAppsLoading] = useRemoteSafeApps(SafeAppsTag.DASHBOARD_FEATURED)

  if (!featuredApps?.length && !remoteSafeAppsLoading) return null

  return (
    <Grid item xs={12} md>
      <WidgetContainer id="featured-safe-apps">
        <WidgetBody>
          <StyledGrid container><Card><Grid container alignItems="center" spacing={3}><Grid item xs={12} md={9}><Link color="primary.main" fontWeight="bold" component="span">This is an alternative frontend for Safe.</Link></Grid></Grid></Card>
          </StyledGrid>
        </WidgetBody>
      </WidgetContainer>
    </Grid>
  )
}
