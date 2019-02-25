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



<% } %>