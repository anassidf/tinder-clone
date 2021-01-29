import React from 'react'
import headerStyle from './header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
const Header = () => {
    return (
        <div className ='header'>
<IconButton>
<PersonIcon fontSize = 'large' className ='profile_icon'/>
</IconButton>   

<img src = 'https://styles.redditmedia.com/t5_2w7mz/styles/communityIcon_jmyuhs81jl211.png?width=256&s=a23d21debdfe842e1b4d9ce3c24f3ab8be5d0e18' className='tinder_logo' alt ='tinder logo'/>

<IconButton >
<QuestionAnswerIcon fontSize='large' className = 'chat_icon'/>
</IconButton>

        </div>
    )
}
export default Header