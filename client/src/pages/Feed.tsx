import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

// TypeScript interface for the post data
interface Post {
  username: string;
  date_posted: string;
  description: string;
  image: string;
  comments_count: number;
  likes_count: number;
}

// TypeScript interface for the FeedProps
interface FeedProps {
  // Props if needed
}

// Custom styles for the component
const useStyles = makeStyles({
  root: {
    width: '100%',
    overflow: 'auto',
    maxHeight: '500px',
  },
});

const Feed: React.FC<FeedProps> = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Function for fetching posts (replace with your actual fetch logic)
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts'); // Replace with your API endpoint
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={classes.root}>
      <List>
        {posts.map((post, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={post.username}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    {post.date_posted}
                  </Typography>
                  <Typography component="span" variant="body2" color="textSecondary">
                    {post.description}
                  </Typography>
                  <Typography component="span" variant="body2" color="textSecondary">
                    Comments: {post.comments_count}
                  </Typography>
                  <Typography component="span" variant="body2" color="textSecondary">
                    Likes: {post.likes_count}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Feed;