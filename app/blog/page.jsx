import AnimatedLink from 'components/AnimatedLink';
import { getAllPosts } from 'lib/mdx';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className='flex w-full flex-col items-start'>
      <div className='mb-8'>
        <h1 className='mb-4 font-bold text-2xl'>Blog Posts</h1>
        <p className='text-gray-600 dark:text-gray-400'>Technical articles and developer tips</p>
      </div>

      <div className='w-full space-y-6'>
        {posts.map((post) => (
          <article key={post.id} className='border-gray-200 border-b pb-6 dark:border-gray-700'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-4 text-gray-500 text-sm dark:text-gray-400'>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {post.tags && (
                  <div className='flex gap-2'>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <AnimatedLink
                href={`/blog/${post.id}`}
                className='font-semibold text-gray-900 text-xl hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400'
              >
                {post.title}
              </AnimatedLink>

              {post.description && (
                <p className='mt-2 text-gray-600 dark:text-gray-400'>{post.description}</p>
              )}

              <div className='mt-3 flex items-center justify-between'>
                <span className='text-gray-500 text-sm'>By {post.author || 'Gökhan Öztürk'}</span>
                <AnimatedLink
                  href={`/blog/${post.id}`}
                  className='text-blue-600 text-sm hover:underline dark:text-blue-400'
                >
                  Read more →
                </AnimatedLink>
              </div>
            </div>
          </article>
        ))}

        {/* Legacy external post */}
        <article className='border-gray-200 border-b pb-6 dark:border-gray-700'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-4 text-gray-500 text-sm dark:text-gray-400'>
              <time dateTime='2023-10-01'>October 1, 2023</time>
              <span className='rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800'>Vue.js</span>
            </div>

            <AnimatedLink
              href='https://medium.com/@gokhaanozturk/vue-js-ile-özelleştirilebilir-breadcrumb-bileşeni-oluşturma-92a8e94a199e'
              className='font-semibold text-gray-900 text-xl hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400'
            >
              Creating Customizable Breadcrumb Component with Vue.js
            </AnimatedLink>

            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              Learn how to build a flexible and reusable breadcrumb navigation component in Vue.js
            </p>

            <div className='mt-3 flex items-center justify-between'>
              <span className='text-gray-500 text-sm'>By Gökhan Öztürk</span>
              <AnimatedLink
                href='https://medium.com/@gokhaanozturk/vue-js-ile-özelleştirilebilir-breadcrumb-bileşeni-oluşturma-92a8e94a199e'
                className='text-blue-600 text-sm hover:underline dark:text-blue-400'
              >
                Read on Medium →
              </AnimatedLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
