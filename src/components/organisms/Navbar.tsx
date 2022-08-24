import { useNavigate } from 'react-router-dom'

import { AppBar, Box, Container, IconButton, Link, Toolbar } from '@/atoms'

import { ChainSelect } from './ChainSelect'

import { GroupsIcon } from 'assets/tsx'

export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <AppBar
      enableColorOnDark
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: 2,
        borderColor: 'divider',
      }}
    >
      <Container>
        <Toolbar sx={{ my: 2 }} disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            <GroupsIcon />
          </IconButton>
          {/* TODO delete this */}
          <TempNav />
          <Box sx={{ flexGrow: 1, maxWidth: [200, 300] }}>
            <ChainSelect />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const TempNav = () => (
  <Box
    component="ul"
    sx={{ flexGrow: 1, display: 'flex', gap: 2, mr: 5, listStyle: 'none' }}
  >
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="groups">Groups</Link>
    </li>
  </Box>
)
