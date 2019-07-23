class Github {
    constructor() {
        this.client_id = 'd79775879d5609849eda';
        this.client_secret = '732311d1e38be34b4d6bbf107f4eb97557602114';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client-secret=${this.client_secret}`);


        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client-secret=${this.client_secret}`);


        const profile = await profileResponse.json();


        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}