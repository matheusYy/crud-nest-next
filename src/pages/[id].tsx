import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { blogPost } from 'src/shared/types/blog-post';

type TBlogPost = {
  post: blogPost;
};

const Blog: FC<TBlogPost> = ({ post }) => {
  return (
    <div>
      <h1>Blog title:{post.title}</h1>
      <h1>Blog id:{post.id}</h1>
      <Link href={'/'}>Home</Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<TBlogPost> = async () => {
  return {
    props: {
      post: {
        id: 8,
        title: 'algo',
      },
    },
  };
};
