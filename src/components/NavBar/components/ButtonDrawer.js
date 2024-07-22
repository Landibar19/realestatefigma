import { Box, IconButton, Typography } from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const ButtonDrawer = ({isMobileView, isMediumView}) => {
   
    return(
    <Box sx={{ 
        display: 'flex',
        flexDirection: isMobileView ? 'column': 'row',
        justifyContent: 'space-between',
        position: isMediumView ? 'absolute' : 'relative',
        padding: isMediumView ? '10px' : '0',
        top: isMediumView ? '100%' : 'initial',
        gap:1,
    }}>
        <IconButton sx={{color:isMobileView && 'black'}}>
        <PhoneOutlinedIcon />
        <Typography sx={{color:isMobileView && 'black'}}>
            +1 234 567 890
        </Typography>
        </IconButton>
        <IconButton 
        sx={{
            width:'40px', 
            color:isMobileView && 'black',  
            border: isMobileView? '1px solid black': '1px solid white', 
            borderRadius:'100%'
            }}>
        <PermIdentityOutlinedIcon />
        </IconButton>
        <IconButton 
        sx={{
            color:isMobileView && 'black',  
            border: isMobileView ? '1px solid black': '1px solid white', 
            borderRadius:'24px'
            }}>
        <Typography sx={{color:isMobileView && 'black'}}>
            Add property
        </Typography>
        </IconButton>
    </Box>
  )
}

export default ButtonDrawer;