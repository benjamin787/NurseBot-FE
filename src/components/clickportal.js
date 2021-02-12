import React, { useState } from 'react'
import { ClickAwayListener } from '@material-ui/core'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import AttachFileIcon from '@material-ui/icons/AttachFile'

export default function ClickPortal() {
    const [open, setOpen] = useState(false) 
    const [open2, setOpen2] = useState(false) 

    const handleClick = () => {
        setOpen(!open)
    }
    const handleClick2 = () => {
        setOpen2(!open2)
    }

    const handleClickAway = () => {
        setOpen(false)
    }

    return (
        <div>
            <ClickAwayListener className='clickaway' onClickAway={handleClickAway} >
                <div>
                    <MenuBookIcon type='button' className='icon' fontSize='large' onClick={handleClick} >
                        popover here
                    </MenuBookIcon>
                    {open ? (
                        <span>
                            Directions to closest test site.
                        </span>
                    ) : null}
                </div>
            </ClickAwayListener>
            <ClickAwayListener className='clickaway' onClickAway={handleClickAway} >
                <div>
                    <AttachFileIcon type='button' className='icon' fontSize='large' onClick={handleClick2} >
                        popover here
                    </AttachFileIcon>
                    {open2 ? (
                        <span>
                            Directions to closest test site.
                        </span>
                    ) : null}
                </div>
            </ClickAwayListener>
        </div>
    )
}