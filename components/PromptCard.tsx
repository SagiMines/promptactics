'use client';

import { PromptCardProps } from '@/typings';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const PromptCard = ({
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
}: PromptCardProps) => {
  const pathName = usePathname();
  const { data: session } = useSession();
  const [copied, setCopied] = useState('');

  const handleCopy = () => {
    setCopied(post?.prompt);
    navigator.clipboard.writeText(post?.prompt);
    setTimeout(() => setCopied(''), 3000);
  };

  return (
    <div className="prompt-card">
      <div className="flex justify-between items-start gap-5">
        <Link
          href={`/profile/${post?.creator?._id}?name=${post?.creator?.username}`}
        >
          <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
            <Image
              src={post?.creator?.image}
              alt="user_image"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />

            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {post?.creator?.username}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                {post?.creator?.email}
              </p>
            </div>
          </div>
        </Link>
        <div className="copy-btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? '/assets/icons/tick.svg'
                : '/assets/icons/copy.svg'
            }
            width={12}
            height={12}
            alt="Copy button"
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post?.prompt}</p>
      <p
        className="font-inter text-sm blue-gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post?.tag)}
      >
        #{post?.tag}
      </p>
      {session?.user?.id.toString() === post?.creator?._id &&
        pathName === '/profile' && (
          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p
              className="font-inter text-sm green-gradient cursor-pointer"
              onClick={() => handleEdit && handleEdit(post)}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm orange-gradient cursor-pointer"
              onClick={() => handleDelete && handleDelete(post)}
            >
              Delete
            </p>
          </div>
        )}
    </div>
  );
};

export default PromptCard;
