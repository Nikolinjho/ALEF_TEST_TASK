<template>
  <div>
    <div class="preview" v-if="show">
      <h3 class="preview__title">Персональные данные</h3>
      <div class="preview__person">
        <span
          v-for="(personalData, key, index) in identity.person"
          :key="index"
        >
          {{ personalData }}
          <span v-if="index < Object.keys(identity.person).length - 1">,</span>
        </span>
      </div>
      <div class="preview__children">
        <h3 class="preview__title">Дети</h3>
        <div class="child" v-for="child in identity.children" :key="child.id">
          <div class="child__inner">
            <span>{{ child.name }}<span>,</span> </span>
            <span>{{ child.age }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Error! No data found</div>
  </div>
</template>

<script>
export default {
  name: 'preview',
  data: () => ({
    show: false,
  }),
  methods: {},
  mounted() {
    if (Object.keys(this.$store.getters.info).length) {
      this.show = true;
    }
  },
  computed: {
    identity() {
      return this.$store.getters.info;
    },
  },
};
</script>

<style scoped>
.preview {
  &__title {
    margin-bottom: 0px;
  }
  &__person {
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    color: #111111;
  }

  &__children {
    margin-top: 60px;
  }
}

.child {
  margin-top: 20px;
  &__inner {
    display: inline-block;
    background: #f1f1f1;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
}
</style>
