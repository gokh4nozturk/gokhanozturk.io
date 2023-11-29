const process = require('node:process')

export class Raindrop {
  base_url = 'https://api.raindrop.io/rest/v1/';
  token = `access_token=${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`;

  async getData(url) {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`,
      },
    })
    return await res.json()
  }

  getRaindrops() {
    const url = [
      this.base_url,
      'raindrops/0?',
    ].join('')
    return this.getData(url)
  }
}
