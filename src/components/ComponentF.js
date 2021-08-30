import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {User => {
                    return (
                        <ChannelContext.Consumer>
                            {Channel => {
                                return <div>User Context value {User}, channel context value {Channel}</div>
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
