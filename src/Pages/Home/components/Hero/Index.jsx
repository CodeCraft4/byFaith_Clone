import React from 'react'
import DrawerAppBar from './Navbar/Navbar'
import { Box } from '@mui/material'
import HeaderFaith from './Header/Header'

const Header = () => {

    return (
        <React.Fragment>
                <Box position={"relative"}>
                    <img src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="HeaderIMG"
                        width={'100%'}
                        height={640}
                        />
                </Box> 
                <DrawerAppBar/>
                <Box position={'absolute'} top={100} width={'100%'}>
                    <HeaderFaith/>
                </Box>
        </React.Fragment>
    )
}

export default Header
