import React, { useState } from 'react'
import { Portal, ClickAwayListener } from '@material-ui/core'
import { MenuBookIcon } from '@material-ui/icons'

export default function ClickPortal() {
    const [open, setOpen] = useState(false) 

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <ClickAwayListener onClickAway={handleClick} >
            <div>
                <MenuBookIcon type='button' onClick={handleClick} >
                    popover here
                </MenuBookIcon>
                {open ? (
                    <Portal>
                        <div>
                            links here
                        </div>
                    </Portal>
                ) : null}
            </div>
        </ClickAwayListener>
    )
}