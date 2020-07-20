import React from 'react';
import '../../css/feedpage.css'
import { fetchAllPosts } from '../../services/postService'
import { Video } from '../partials/Video';
import { Text } from '../partials/Text';
import { Image } from '../partials/Image';


export class FeedPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }
    }

    loadPosts = () => {
        fetchAllPosts()
            .then(res => {
                this.setState({ posts: res })

            })
    }

    componentDidMount() {
        this.loadPosts()
    }


    render() {

        const { posts } = this.state

        const postsJSX = posts.map((post, i) => {

            switch (post.type) {
                case 'image':
                    return <Image post={post} />
                case 'text':
                    return <Text post={post} />
                case 'video':
                    return <Video post={post} />
            }
        })


        return (

            <div>
                <div className='container'>
                    {postsJSX}
                </div>
            </div>

        )
    }
}