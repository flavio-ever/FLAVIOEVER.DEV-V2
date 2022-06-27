import BlogTemplate from '../../templates/Blog'

function Blog() {
  const posts = [
    {
      title: 'Olá, mundo!',
      slug: 'ola-mundo',
      src: 'https://media.sketchfab.com/models/2421eadea6164f19b22451e5abf0578d/thumbnails/fd95d8c5ab134b7caaba6cbc7f53744a/9954fbdeffff46e087b5e78c1c86fcd0.jpeg',
      prevDescription: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        html: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      }
    },
    {
      title: 'Olá, mundo 2!',
      slug: 'ola-mundo-2',
      src: 'https://media.sketchfab.com/models/2421eadea6164f19b22451e5abf0578d/thumbnails/fd95d8c5ab134b7caaba6cbc7f53744a/9954fbdeffff46e087b5e78c1c86fcd0.jpeg',
      prevDescription: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        html: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      }
    }
  ]

  return <BlogTemplate posts={posts} />
}
export default Blog
