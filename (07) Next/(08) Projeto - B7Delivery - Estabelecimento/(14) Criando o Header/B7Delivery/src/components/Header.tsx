import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Menu } from "@mui/icons-material"
import Link from "next/link"
import { useRouter } from "next/navigation"

export const Header = () => {
   const router = useRouter()

   const pageTitle = 'Painel B7Delivery'

   const handleLogout = () => {
      router.push('/login')
   }

   const handleDrawerToggle = () => {

   }

   return(
      <>
         <AppBar component='nav' position='relative'>
            <Toolbar>

               <IconButton
                  color='inherit'
                  edge='start'
                  sx={{ display: { sm: 'none' } }}
                  onClick={ handleDrawerToggle }>
                  <Menu />
               </IconButton>

               <Typography
                  component='div'
                  variant='h6'
                  sx={{ 
                     flexGrow: 1,
                     display: { xs: 'none', sm: 'block' }
                  }}
               >
                  <Link href='/'
                     style={{ color: '#FFF', textDecoration: 'none' }}>
                     { pageTitle }
                  </Link>
               </Typography>
               
               <Box
                  sx={{ 
                     display: { xs: 'none', sm: 'block' }
                  }}>
                  <Link href='/pedidos' 
                     style={{ textDecoration: 'none' }}>

                     <Button 
                        sx={{ color: '#FFF' }}>
                        Pedidos
                     </Button>

                  </Link>

                  <Link href='/produtos' 
                     style={{ textDecoration: 'none' }}>

                     <Button 
                        sx={{ color: '#FFF' }}>
                        Produtos
                     </Button>
                     
                  </Link>

                  <Link href='/categoriass' 
                     style={{ textDecoration: 'none' }}>

                     <Button 
                        sx={{ color: '#FFF' }}>
                        Categorias
                     </Button>
                     
                  </Link>

                  <Button 
                     sx={{ color: '#FFF' }}
                     onClick={ handleLogout }>
                     Sair
                  </Button>
               </Box>
            </Toolbar>

         </AppBar>
      </>
   )
}