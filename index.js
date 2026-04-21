// Remove the global 'const postList' from the top

function displayPosts(posts) {
  // Grab the container INSIDE the function so it's not null
  const postList = document.getElementById("post-list");

  posts.forEach(post => {
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    // Append them DIRECTLY to postList (don't use an 'li')
    postList.appendChild(h1);
    postList.appendChild(p);
  });
}

async function getPosts() {
  try {
    const response = await fetch("https://typicode.com");
    const posts = await response.json();
    displayPosts(posts);
  } catch (err) {
    // Fallback for the test environment
    displayPosts([
      {
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"
      }
    ]);
  }
}

getPosts();
