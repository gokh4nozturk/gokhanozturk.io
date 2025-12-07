const process = require("node:process");

export class Github {
  base_url = "https://api.github.com/repos/";
  token = `${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`;

  async getData(url) {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    return await res.json();
  }

  getRepo(repo) {
    const url = [this.base_url, repo].join("");
    return this.getData(url);
  }
}
