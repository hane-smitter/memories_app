import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { ThumbUpAlt, Delete, MoreHoriz } from '@material-ui/icons';
import moment from 'moment';

import useStyles from './styles';

const Post = ({post}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}>
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                        <MoreHoriz fontSize="default" />
                    </Button>
                </div>
            </CardMedia>

            <CardContent>
                <Typography variant="body1" alignCenter className={classes.title} gutterBottom>
                    {post.title}
                </Typography>
                <Typography variant="body2" alignCenter gutterBottom>
                    {post.message}
                </Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAlt fontSize="small"/>
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <Delete fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;