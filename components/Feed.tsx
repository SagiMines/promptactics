'use client';

import { callAPI } from '@/utils/server';
import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';
import { PromptCardListProps } from '@/typings';

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
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await callAPI('/api/prompt');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search-input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={(tag: string) => {}} />
    </section>
  );
};

export default Feed;
