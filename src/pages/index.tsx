import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { blogPost } from 'src/shared/types/blog-post';

type THomeProps = {
  blogPosts: blogPost;
};

const Home: FC<THomeProps> = ({ blogPosts }) => {
  return (
    <div>
      <h1>Home</h1>
      <h1>title: {blogPosts.title}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<THomeProps> = async (
  ctx,
) => {
  return {
    props: {
      blogPosts: {
        id: 9,
        title: 'algo para colocar aqui',
      },
    },
  };
};

export default Home;
