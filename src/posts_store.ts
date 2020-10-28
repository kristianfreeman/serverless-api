const _posts = [
  {
    id: 1,
    title: "My first blog post",
    text: "Hello world! This is my first blog post on my new Cloudflare Workers + Pages blog.",
    published_at: new Date("2020-10-23")
  },
  {
    id: 2,
    title: "Updating my blog",
    text: "It's my second blog post! I'm still writing and publishing using Cloudflare Workers + Pages :)",
    published_at: new Date("2020-10-26")
  }
]

export default class PostsStore {
  async all() {
    return _posts
  }

  async find(id: number) {
    return _posts.find(post => post.id.toString() === id.toString())
  }
}