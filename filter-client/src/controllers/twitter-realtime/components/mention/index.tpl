<% for(var i = 0, len = locals.length; i < len; i += 1) { %>
  <br>
  <h1><%- locals[i].user.name %></h1>
  <li><%- locals[i].createdAt %></li>
  <li><%- locals[i].text %></li>
  <li><%- locals[i].user.avatar %></li>
  <li><%- locals[i].replyCount %></li>
  <li><%- locals[i].reteweetCount %></li>
  <li><%- locals[i].favoriteCount %></li>
  <li><%- locals[i].coordinates %></li>

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
          <strong><%- locals[i].user.name %></strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          <%- locals[i].text %>
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>


<% } %>