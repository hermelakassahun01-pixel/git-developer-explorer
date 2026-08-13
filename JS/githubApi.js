export async function fetchGitHubUser(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    if (response.status === 404) {
        throw new Error("GitHub user not found.");
    }

    if (response.status === 403 || response.status === 429) {
        throw new Error("GitHub API rate limit may have been reached.");
    }

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return await response.json();
}

export async function fetchUserRepositories(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
    );

    if (response.status === 403 || response.status === 429) {
        throw new Error("GitHub API rate limit may have been reached.");
    }

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return await response.json();
}