export function showLoading(message) {
    document.getElementById("loading").textContent = message;
}

export function hideLoading() {
    document.getElementById("loading").textContent = "";
}

export function showError(message) {
    document.getElementById("error").textContent = message;
}

export function clearError() {
    document.getElementById("error").textContent = "";
}

export function displayResults(profile, repositories, statistics) {
    const results = document.getElementById("results");

    results.innerHTML = "";

    const profileSection = document.createElement("div");

    profileSection.innerHTML = `
        <h2>${profile.name ?? "Not provided"}</h2>

        <img
            src="${profile.avatar_url}"
            alt="GitHub profile avatar"
            width="120"
        >

        <p><strong>Username:</strong> @${profile.login}</p>
        <p><strong>Bio:</strong> ${profile.bio ?? "Not provided"}</p>
        <p><strong>Company:</strong> ${profile.company ?? "Not provided"}</p>
        <p><strong>Location:</strong> ${profile.location ?? "Not provided"}</p>
        <p><strong>Followers:</strong> ${profile.followers}</p>
        <p><strong>Following:</strong> ${profile.following}</p>
        <p><strong>Public repositories:</strong> ${profile.public_repos}</p>

        <p>
            <strong>Account created:</strong>
            ${new Date(profile.created_at).toLocaleDateString()}
        </p>

        <p>
            <a href="${profile.html_url}" target="_blank">
                View GitHub Profile
            </a>
        </p>
    `;

    results.appendChild(profileSection);

    const statsSection = document.createElement("div");

    statsSection.innerHTML = `
        <h2>Repository Analysis</h2>

        <p>
            <strong>Repositories returned:</strong>
            ${statistics.totalRepositories}
        </p>

        <p>
            <strong>Total stars:</strong>
            ${statistics.totalStars}
        </p>

        <p>
            <strong>Total forks:</strong>
            ${statistics.totalForks}
        </p>

        <p>
            <strong>Most used language:</strong>
            ${statistics.mostUsedLanguage ?? "Not available"}
        </p>

        <p>
            <strong>Languages:</strong>
            ${statistics.languages.join(", ") || "None"}
        </p>
    `;

    results.appendChild(statsSection);

    const topSection = document.createElement("div");

    topSection.innerHTML = "<h2>Top 5 Repositories</h2>";

    statistics.topFiveRepositories.forEach((repo, index) => {
        topSection.innerHTML += `
            <p>
                ${index + 1}.
                <a href="${repo.html_url}" target="_blank">
                    ${repo.name}
                </a>
                — ${repo.stargazers_count} stars
            </p>
        `;
    });

    results.appendChild(topSection);
}