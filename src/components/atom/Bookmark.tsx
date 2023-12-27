import { useState } from 'react';

interface BookmarkButtonProps {
  postId: number;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ postId }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = async () => {
    setBookmarked(!bookmarked);
    await fetch('/api/bookmarks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postId, bookmarked: !bookmarked }),
    });
  };

  return <button onClick={handleBookmark}>{bookmarked ? '북마크 해제' : '북마크'}</button>;
};

export default BookmarkButton;
