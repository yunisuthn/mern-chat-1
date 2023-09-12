import { Skeleton, Stack } from '@chakra-ui/react'

import React from 'react'

function ChatLoading() {
    return (
        <Stack>
            <Skeleton height="45px" />
            <Skeleton height="45px" />
            <Skeleton height="45px" />
            <Skeleton height="45px" />
            <Skeleton height="45px" />
            <Skeleton height="20px" />

        </Stack>
    )
}

export default ChatLoading
