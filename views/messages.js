<% Object.keys(messages).forEach(function (type) { %>
    <div class="alert alert-<%= type %>">
      <% messages[type].forEach(function (message) { %>
        <%= message %>
      <% }) %>
      </div>
  <% }) %>
  
    