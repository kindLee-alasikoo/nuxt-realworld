<template>
 
    <div class="navbar navbar-light" style="height:100vh;">
      <nav class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav nav-pills outline-active">
          <li class="nav-item">
            <nuxt-link class="nav-link" exact to="/">home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" exact to="/editor">editor</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" exact to="/setting">setting</nuxt-link>
          </li>
          
          <li class="nav-item">
            <nuxt-link class="nav-link" exact to="/login">login</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" exact to="/register">register</nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt-child />
      <div style="margin-bottom:50px;width:100%;height:50px;"></div>
      <footer style="position:fixed;">
        <div class="container">
          <nuxt-link class="logo-font" to="/">conduit</nuxt-link>
          <span class="attribution">
            An interactive learning project from
            <a href="https://kaiwu.lagou.com/">lagou</a>. Code &amp; design
            licensed under MIT.
          </span>
        </div>
      </footer>
    </div>
</template>
<script>
export default {
  
  name: 'Layout',
}
</script>
