<template>
  <div class="input-row flex">
    <div class="input-row__container flex">
      <div class="input-row__col" v-for="input in inputData" :key="input.id">
        <Input-container :inputData="input" @inputData="getInputVal"/>
      </div>
    </div>
    <div class="input-row__btn-wrapper">
      <button class="input-row__btn" @click.prevent="removeChildContainer">
        Удалить
      </button>
    </div>
  </div>
</template>

<script>
import InputContainer from '@/components/InputContainer.vue';

export default {
  name: 'child-container',
  components: {
    InputContainer,
  },
  props: {
    id: {

    },
  },
  methods: {
    removeChildContainer() {
      console.log(this.id);
      this.$emit('removeChild', this.id);
    },
    getInputVal(obj){
      this.$emit('passInputVal', {
        id: this.id,
        ...obj
      })
    }
  },
  computed: {
    inputData() {
      return this.$store.getters.getInputData;
    },
  },
};
</script>

<style>
.input-row {
  margin-top: 10px;
  &__container {
    flex-grow: 1;
    margin: 0 -9px;
  }
  &__col {
    flex: 1;
    padding-left: 9px;
    padding-right: 9px;
  }
  &__group {
  }
  &__btn {
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    font-family: 'Montserrat';
    font-size: 14px;
    line-height: 24px;
    color: #01a7fd;
    cursor: pointer;
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 18px;
    }
  }
}
</style>
