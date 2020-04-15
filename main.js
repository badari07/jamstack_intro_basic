const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const markUp = repos
    .map(
      (repo) => `
            <li>
                <a href="${repo.html_url}">${repo.name}</a> 
                (⭐️ ${repo.stargazers_count})
            </li>
    
    `
    )
    .join("");

  const content = document.getElementById("content");

  content.innerHTML = `<ul>${markUp}</ul>`;
};

listRepos("badari07");
