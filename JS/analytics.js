export function getRepositoryStatistics(repositories) {
  const totalStars = repositories.reduce(
    (total, repo) => total + repo.stargazers_count,
    0,
  );

  const totalForks = repositories.reduce(
    (total, repo) => total + repo.forks_count,
    0,
  );

  const mostStarredRepository =
    repositories.length > 0
      ? [...repositories].sort(
          (a, b) => b.stargazers_count - a.stargazers_count,
        )[0]
      : null;

  const topFiveRepositories = [...repositories]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  const languageCounts = {};

  repositories.forEach((repo) => {
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
    }
  });

  let mostUsedLanguage = null;

  for (const language in languageCounts) {
    if (
      mostUsedLanguage === null ||
      languageCounts[language] > languageCounts[mostUsedLanguage]
    ) {
      mostUsedLanguage = language;
    }
  }

  const languages = Object.keys(languageCounts);

  return {
    totalRepositories: repositories.length,
    totalStars,
    totalForks,
    mostStarredRepository,
    topFiveRepositories,
    mostUsedLanguage,
    languages,
  };
}
