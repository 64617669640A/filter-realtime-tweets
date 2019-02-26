<% for(var i = 0, len = locals.length; i < len; i += 1) { %>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="<%- locals[i].user.avatar %>" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong><%- locals[i].user.name %></strong> <small><%- locals[i].createdAt %></small>
          <br>
          <%- locals[i].text %>
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"><%- locals[i].replyCount %></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"><%- locals[i].reteweetCount %></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"><%- locals[i].favoriteCount %></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
<% } %>