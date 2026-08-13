import {
    fetchGitHubUser,
    fetchUserRepositories
} from "./githubApi.js";

import {
    getRepositoryStatistics
} from "./analytics.js";

import {
    showLoading,
    hideLoading,
    showError,
    clearError,
    displayResults
} from "./ui.js";

const searchForm = document.getElementById("searchForm");
const usernameInput = document.getElementById("usernameInput");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();

    clearError();
    hideLoading();

    if (!username) {
        showError("Please enter a GitHub username.");
        return;
    }

    showLoading("Loading developer information...");

    try {
        const [profile, repositories] = await Promise.all([
            fetchGitHubUser(username),
            fetchUserRepositories(username)
        ]);

        const statistics = getRepositoryStatistics(repositories);

        displayResults(
            profile,
            repositories,
            statistics
        );

    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
});