import { directus } from '@/lib/directus';
import { readItem } from '@directus/sdk';

export default async function PostDetailPage({ params }) {
  // Sahifa URL manzilidagi [id] parametridan foydalanamiz
  const { id } = await params;

  try {
    // Directus'dan aynan shu ID'ga ega item'ni chaqiramiz
    const post = await directus.request(readItem('posts', id));

    return (
      <div style={{ padding: '20px' }}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Post topilmadi!</h2>
      </div>
    );
  }
}
