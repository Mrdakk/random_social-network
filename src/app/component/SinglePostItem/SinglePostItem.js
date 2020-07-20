import React from 'react';

import { Image } from '../../partials/Image';
import { Video } from '../../partials/Video';
import { Text } from '../../partials/Text';

export const SingleUserPost = (props) => {
    const { post } = props

    if (post.type === 'video') {
        return <Video post={post} />
    }
    if (post.type === 'image') {
        return <Image post={post} />
    } else {
        return <Text post={post} />
    }
}