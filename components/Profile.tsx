import { ProfileProps } from '@/typings';
import PromptCard from './PromptCard';
import LoadingGif from './LoadingGif';

const Profile = ({
  name,
  data,
  desc,
  handleEdit,
  handleDelete,
}: ProfileProps) => {
  return (
    <section className="w-full">
      <h1 className="head-text text-left">
        <span className="blue-gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      {!data && (
        <div className="mt-20 flex-center">
          <LoadingGif />
        </div>
      )}
      <div className="mt-10 prompt-layout">
        {data?.map(post => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
