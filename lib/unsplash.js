const process = require('node:process')

export class Unsplash {
  base_url = 'https://api.unsplash.com/users/gokhanozturk';
  client_id = `client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`;

  async getData(url) {
    const res = await fetch(url, {
      method: 'GET',
    })
    return await res.json()
  }

  getPhotos() {
    const url = [
      this.base_url,
      '/photos?',
      this.client_id,
    ].join('')
    return this.getData(url)
  }
}
