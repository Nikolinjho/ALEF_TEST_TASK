<template>
  <div id="app" class="site-carcass">
    <Navbar/>
    <main class="site-carcass__container">
      <div class="site-carcass__content">
        <keep-alive include="form-section">
          <router-view />
        </keep-alive>
      </div>
    </main>
    <FooterSection/>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue'
import FooterSection from '@/components/app/FooterSection.vue'

export default {
  name: "App",
  components: {
    Navbar,
    FooterSection
  },
  data() {
    return {
    
    };
  },
  methods: {
    
  },
  computed: {

  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.container {

}

.site-carcass{
  display: flex;
  flex-direction: column;
  min-height: 100%;
  &__container{
    display: flex;
    flex-grow: 1;
  }
  &__content{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 616px;
    margin: 0 auto;
  }
}

</style>
