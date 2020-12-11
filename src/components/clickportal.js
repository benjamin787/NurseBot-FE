import React, { useState } from 'react'
import { ClickAwayListener } from '@material-ui/core'
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
                        Directions to closest test site.
                    </span>
                ) : null}
            </div>
        </ClickAwayListener>
    )
}