export interface GithubRepo {
    name: string,
    updated_at: string,
    html_url: string
}

export default class GithubClient {
    private static async apiCall(endpoint: string) {
        const response = await fetch(`https://api.github.com/${endpoint}`, {});
        if (!response.ok) {
            throw new Error(`GitHub responded with status: ${response.status}`);
        }
        return response.json();
    }

    async getRepos(user: string) {
        const repos: GithubRepo[] = await GithubClient.apiCall(`users/${user}/repos`);
        return repos;
    }
}
