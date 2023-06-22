'use client';

import Profile from '@/components/Profile';
import { Post } from '@/typings';
import { callAPI } from '@/utils/server';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const DynamicPage = () => {
  const [posts, setPosts] = useState<Post[]>();
  const searchParams = useSearchParams();
  const params = useParams();

  const userName = searchParams.get('name') || '';
  const getPosts = async () => {
    const req = await callAPI(`/api/prompt/search/username/${params.id}`);
    const res = await req.json();
    setPosts([...res]);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired.`}
      data={posts}
    />
  );
};

export default DynamicPage;
