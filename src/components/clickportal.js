import React, { useState } from 'react'
import { Portal, ClickAwayListener } from '@material-ui/core'
import MenuBookIcon from '@material-ui/icons/MenuBook'

export default function ClickPortal() {
    const [open, setOpen] = useState(false) 

    const handleClick = () => {
        setOpen(!open)
    }

    const handleClickAway = () => {
        setOpen(false)
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway} >
            <div>
                <MenuBookIcon type='button' className='icon' fontSize='large' onClick={handleClick} >
                    popover here
                </MenuBookIcon>
                {open ? (
                    <span>
                        links here
                    </span>
                ) : null}
            </div>
        </ClickAwayListener>
    )
}