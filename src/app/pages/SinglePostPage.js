import React from 'react';
import { singlePost } from '../../services/singlePostService';
import { SingleUserPost } from '../component/SinglePostItem/SinglePostItem'

export class SinglePostPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
        }
        // this.loadPost = this.loadPost.bind(this);
    }


    loadPost() {
        const userId = this.props.match.params.id;
        console.log(userId);

        singlePost(userId)
            .then((post) => {
                console.log(post);
                this.setState({ post })
            })
    }


    componentDidMount() {
        this.loadPost()
    }


    render() {
        const { post } = this.state
        console.log(post);

        if (!post) {
            return <p>Loading ...</p>
        }

        return (
            <>
                <div>
                    <SingleUserPost post={post} />
                </div>
            </>
        )
    }
}