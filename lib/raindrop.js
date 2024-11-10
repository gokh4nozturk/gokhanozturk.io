const process = require('node:process')

export default class Raindrop {
   TOKEN = process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN;
   URL = 'https://api.raindrop.io';

   async getBookmark({
     perPage = 50,
     page = 0,
     sort = '-created',
     search,
   }) {
     const a = {
       perPage,
       page,
       sort,
       search,
     }

     const url = this.buildUrlWithParams(a)
     const response = await this.getHttpDataFromUrl(url)
     const data = await response.json()

     if (data.items.length === a.perPage) {
       a.page = a.page + 1
       return data.items.concat(await this.getBookmark(a))
     }
     else {
       return this.normalizeData(data.items)
     }
   }

   getHttpDataFromUrl(url) {
     return fetch(url.toString(), {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${this.TOKEN}`,
       },
       next: { revalidate: 3600 },
     })
   }

   buildUrlWithParams({
     perPage = 50,
     page = 0,
     sort = '-created',
     search,
   }) {
     const url = new URL('/rest/v1/raindrops/0', this.URL)

     url.searchParams.set('perpage', perPage.toString())
     url.searchParams.set('page', page.toString())
     url.searchParams.set('sort', sort)

     if (search)
       url.searchParams.set('search', search)

     return url
   }

   normalizeData(data) {
     return data.map((bookmark) => {
       const {
         _id,
         type,
         created,
         media,
         title,
         link,
         excerpt,
         domain,
         note,
         tags,
         cover,
       } = bookmark
       return {
         _id,
         type,
         created,
         media,
         title,
         link,
         excerpt,
         domain,
         note,
         tags,
         cover,
       }
     })
   }
}
