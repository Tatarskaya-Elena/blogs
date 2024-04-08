<template>
  <div class="footer">
    <div class="footer__copyright">
      Copyright by <span class="footer__copyright__highlight"> Arnas Jonkas </span>,
      theme of <span class="footer__copyright__highlight"> africans traveler </span> blog
    </div>
    <nav class="footer__nav-links">
      <RouterLink
        to="/BLOG_TATARSKAYA_FEDOTOVA_HOME"
        class="footer__nav-links__nav-link"
        :class="{ active: $route.path === '/BLOG_TATARSKAYA_FEDOTOVA_HOME' }"
      >
        Blog
      </RouterLink>
      <RouterLink
        to="/categories" 
        class="footer__nav-links__nav-link"
        :class="{ active: $route.path === '/categories' }"
      >
        Categories
      </RouterLink>
      <RouterLink
        to="/gallery"
        class="footer__nav-links__nav-link"
        :class="{ active: $route.path === '/gallery' }"
      >
        Gallery
      </RouterLink>
      <RouterLink
        to="/contact"
        class="footer__nav-links__nav-link"
        :class="{ active: $route.path === '/contact' }"
      >
        Contact
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped lang="less">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 20px 30px;
  margin-top: 60px;
  background-color: white;
  color: gray;
  font-family: "Calibri", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;

  &__copyright {
    display: flex;
    align-items: center;

    &__highlight {
      color: black;
      margin: 0 3px;
    }
  }

  &__nav-links {
    display: flex;

    &__nav-link {
      margin-left: 18px;
      color: gray;
      font-weight: 600;

      &.active {
        color: black;
      }
    }
  }
}
</style>
