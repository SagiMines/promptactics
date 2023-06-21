'use client';

import { callAPI } from '@/utils/server';
import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';
import { Post, PromptCardListProps } from '@/typings';

const PromptCardList = ({ data, handleTagClick }: PromptCardListProps) => {
  return (
    <div className="mt-16 prompt-layout">
      {data.map(post => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  // When the seach text changes
  const handleSearchChange = async (e: React.FormEvent<HTMLInputElement>) => {
    const newSearchText = (e.target as HTMLInputElement).value;

    setSearchText(newSearchText);
    if (newSearchText.length >= 3) {
      await fetchSearchResults(newSearchText);
    } else {
      await fetchPosts();
    }
  };

  // Fetches the search results for the tag, prompt and username
  const fetchSearchResults = async (newSearchText: string) => {
    const relatedPosts = await callAPI(`/api/prompt/search/${newSearchText}`);
    const searchResultPosts: Post[] = await relatedPosts.json();
    setPosts([...searchResultPosts]);
  };

  // When a tag is clicked the in will automatically appear in the search bar and all the related tagged posts will appear.
  const fetchTagClickSearchResults = async (tag: string) => {
    const relatedPosts = await callAPI(`/api/prompt/search/tag/${tag}`);
    const searchResultPosts: Post[] = await relatedPosts.json();
    setPosts([...searchResultPosts]);
  };

  // Fetched all the posts
  const fetchPosts = async () => {
    const response = await callAPI('/api/prompt');
    const data = await response.json();
    setPosts(data);
  };

  // Handles when a user clicks on a tag
  const handleTagClick = async (tag: string) => {
    await fetchTagClickSearchResults(tag);
    setSearchText(tag);
    scroll(0, 0);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a prompt, tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search-input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
