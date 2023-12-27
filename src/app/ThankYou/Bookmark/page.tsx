import BookmarkButton from '../../../components/atom/Bookmark';

interface Post {
  id: number;
  title: string;
}

interface PostPageProps {
  post: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <BookmarkButton postId={post.id} />
    </div>
  );
};

export default PostPage;
