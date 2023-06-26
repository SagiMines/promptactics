'use client';

import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';
import { callAPI } from '@/utils/server';
import { Post, PromptCardListProps } from '@/typings';
import LoadingGif from './LoadingGif';

const PromptCardList = ({ searchText, setSearchText }: PromptCardListProps) => {
  const [posts, setPosts] = useState<Post[]>();
  // Fetched all the posts
  const fetchPosts = async () => {
    const response = await callAPI('/api/prompt');
    const data: Post[] = await response.json();
    setPosts(data);
  };

  const handleSearchTextChange = async () => {
    if (searchText.length >= 3) {
      await fetchSearchResults();
    } else {
      await fetchPosts();
    }
  };

  const fetchSearchResults = async () => {
    const relatedPosts = await callAPI(`/api/prompt/search/${searchText}`);
    const searchResultPosts: Post[] = await relatedPosts.json();
    setPosts([...searchResultPosts]);
  };

  const fetchTagClickSearchResults = async (tag: string) => {
    const relatedPosts = await callAPI(`/api/prompt/search/tag/${tag}`);
    const searchResultPosts: Post[] = await relatedPosts.json();
    setPosts([...searchResultPosts]);
  };

  const handleTagClick = async (tag: string) => {
    await fetchTagClickSearchResults(tag);
    setSearchText(tag);
    scroll(0, 0);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    handleSearchTextChange();
  }, [searchText]);

  return (
    <>
      {!posts && (
        <div className="w-full flex-center mt-20">
          <LoadingGif />
        </div>
      )}

      <div className="mt-16 prompt-layout">
        {posts?.map(post => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    </>
  );
};

export default PromptCardList;
