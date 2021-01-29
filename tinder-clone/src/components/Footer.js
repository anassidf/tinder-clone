import React from 'react'
import './footer.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarIcon from '@material-ui/icons/Star'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'
function Footer() {
    return (
        <div className = 'swipe_buttons'>
            <IconButton className= 'replay_button'>
            <ReplayIcon fontSize = 'large'/>
            </IconButton>

            <IconButton  className='close_button'>
            <CloseIcon fontSize = 'large'/>
            </IconButton>

            <IconButton className='star_button'>
            <StarIcon fontSize = 'large'/>
            </IconButton>

            <IconButton className='favorite_button'>
            <FavoriteIcon fontSize = 'large'/>
            </IconButton>

            <IconButton className='flash_button'>
            <FlashOnIcon fontSize = 'large'/>
            </IconButton>

        </div>
    )
}

export default Footer
