import { Box, Divider, Drawer, Typography } from "@mui/material"

type Props = {
   open: boolean
   onClose: () => void
   title: string
   onLogout: () => void
}

export const HeaderDrawer = ({ open, onClose, title, onLogout }: Props) => {
   return(
      <Drawer
         variant='temporary' // Clicou em outro lugar ele fecha
         open={ open }
         onClose={ onClose }
         ModalProps={{ keepMounted: true }}
         sx={{ 
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { width: '70%' }
         }}>
         <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h6' sx={{ my: 2 }}>
               { title }
            </Typography>

            <Divider />


         </Box>
      </Drawer>
   )
}