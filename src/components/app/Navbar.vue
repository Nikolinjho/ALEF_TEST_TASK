<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/">
        <img src="@/images/logo.svg" alt="" />
      </router-link>
    </div>
    <div class="header__menu">
      <ul class="menu">
        <li class="menu__item">
          <router-link to="/" class="menu__link">Форма</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/preview" class="menu__link">Превью</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  margin-bottom: 30px;
  &__logo {
    margin-left: 92px;
  }
  &__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
}

.menu {
  display: flex;

  &__item {
    padding: 28px 0 24px;
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
  &__link {
    color: rgba(17, 17, 17, 0.48);
  }
}
</style>
