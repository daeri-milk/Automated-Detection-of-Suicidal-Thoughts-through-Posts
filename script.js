document.addEventListener('DOMContentLoaded', function() {
    const tweetForm = document.querySelector('.tweetBox form');
    const feedContainer = document.getElementById('feed-container');

    tweetForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const tweetInput = document.getElementById('tweetInput');
        const tweetText = tweetInput.value;
        
        if (!tweetText) return;

        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.innerHTML = `
            <div class="post_avatar">
                <img src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"/>
            </div>
            <div class="post_body">
                <div class="post_header">
                    <div class="post_headerText">
                        <h3>
                            User
                            <span class="post_headerSpecial">
                                <span class="material-symbols-outlined" id="verified">verified</span>
                                @user
                            </span>
                        </h3>
                    </div>
                    <div class="post_headerDescription">
                        <p>${tweetText}</p>
                    </div>
                </div>
                <div class="post_footer">
                    <span class="material-symbols-outlined">chat_bubble_outline</span>
                    <span class="material-symbols-outlined">repeat</span>
                    <span class="material-symbols-outlined">favorite_border</span>
                    <span class="material-symbols-outlined">share</span>
                </div>
            </div>
        `;


        const firstPost = feedContainer.querySelector('.post');
        feedContainer.insertBefore(newPost, firstPost);
        

        tweetInput.value = '';
    });
});