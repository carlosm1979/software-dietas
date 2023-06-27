import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import {Menu} from '@mui/icons-material'


export const TopBar = () => {


    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              A
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Software dietas
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>)
}