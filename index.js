const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

// Select elements
const postContainer = document.querySelector(".main-content");

// Post rendering function
function renderPosts() {
  posts.forEach((item) => {
    const { name, username, location, avatar, post, comment, likes } = item;

    postContainer.innerHTML += `
        <div class="post-card">
            <div class="post-header">
                <img src="${avatar}" alt="Author avatar" class="post-header-pfp pfp" />
                <div class="post-header-content">
                <span class="bold post-header-author">${name}</span>
                <span class="post-header-location">${location}</span>
                </div>
            </div>
            <img src="${post}" alt="Selfie of ${name}" class="post-pic" />
            <div class="post-bottom">
                <div class="icon-bar">
                <div class="like-btn" role="button" alt="Like icon">
                    <svg class="heart icon" width="22" height="22" viewBox="0 0 24 24">
                    <path
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                    </svg>
                </div>

                <img
                    src="./images/icon-comment.png"
                    alt="Comment icon"
                    class="icon"
                    role="button" />
                <img
                    src="./images/icon-dm.png"
                    alt="Share icon"
                    class="icon"
                    role="button" />
                </div>
                <p class="post-likes bold">${likes} likes</p>
                <p class="post-caption">
                <span class="bold author">${username}</span> ${comment}
                </p>
            </div>
        </div>
    `;
  });
}

// Like post function
const likeBtn = document.querySelectorAll(".like-btn");

likeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});
