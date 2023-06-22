type Post = {
  _id: string;
  creator: {
    _id: string;
    email: string;
    username: string;
    image: string;
    __v: number;
  };
  prompt: string;
  tag: string;
  __v: number;
};

type HandleTagClick = {
  handleTagClick?: (tag: string) => void;
};

export type PromptCardProps = HandleTagClick & {
  handleEdit?: (post: Post) => void;
  handleDelete?: (post: Post) => void;
  post: Post;
};

export type PromptCardListProps = HandleTagClick & {
  data: Post[];
};

export type FormProps = {
  type: string;
  post: {
    prompt: string;
    tag: string;
  };
  setPost: Dispatch<
    SetStateAction<{
      prompt: string;
      tag: string;
    }>
  >;
  submitting: boolean;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

type ProviderProps = {
  children?: React.ReactNode;
  session?: Session | null | undefined;
};

export type ProfileProps = {
  name: string;
  desc: string;
  data: Post[] | undefined;
  handleEdit?: (post: Post) => void;
  handleDelete?: (post: Post) => void;
};
