<template>
  <div class="input-container">
    <label class="input-container__label">
      <span class="input-container__title">{{ inputData.title }}</span>
      <input
        type="text"
        class="input-container__input"
        :name="inputData.field"
        @input="passInputData"
        v-model="inputVal"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'input-container',
  props: {
    inputData: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    inputVal: '',
  }),
  methods: {
    passInputData() {
      this.$emit('inputData', {[this.inputData.field]: this.inputVal});
    },
  },
};
</script>

<style>
.input-container {
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 8px 16px 6px;
  &__label {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  &__title {
    font-size: 13px;
    line-height: 16px;
    color: rgba(17, 17, 17, 0.48);
  }
  &__input {
    margin-top: 2px;
    outline: none;
    border: none;
    font-family: 'Montserrat';
    font-size: 14px;
    line-height: 24px;
    color: #111111;
  }
}
</style>
