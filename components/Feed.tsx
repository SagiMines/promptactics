'use client';

import { useState } from 'react';
import PromptCardList from './PromptCardList';

const Feed = () => {
  const [searchText, setSearchText] = useState('');

  // When the seach text changes
  const handleSearchChange = async (e: React.FormEvent<HTMLInputElement>) => {
    const newSearchText = (e.target as HTMLInputElement).value;

    setSearchText(newSearchText);
  };

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
      <PromptCardList searchText={searchText} setSearchText={setSearchText} />
    </section>
  );
};

export default Feed;
