<template>
  <div>
    <div class="form">
      <form @submit.prevent="onSubmit" class="form-inner">
        <div class="form-group">
          <h3 class="form-group__title">Персональные данные</h3>
          <div
            class="form-group__item"
            v-for="input in inputData"
            :key="input.id"
          >
            <Input-container :inputData="input" 
            @inputData="getPlainData"/>
          </div>
        </div>

        <div class="form-group">
          <h3 class="form-group__title flex flex-all">
            Дети (макс. 5)
            <button
              class="bem-button"
              @click.prevent="addChild"
              v-show="showBtn"
            >
              <div class="bem-button__icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z"
                    fill="#01A7FD"
                  />
                </svg>
              </div>
              <div class="bem-button__title">Добавить ребенка</div>
            </button>
          </h3>

          <div
            class="form-group__item"
            v-for="child in childrenData"
            :key="child.id"
          >
            <Child-container
              @removeChild="removeChild"
              :id="child.id"
              @passInputVal="mergeInputVal"
            />
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="bem-button bem-button--invert">
            <div class="bem-button__title">Сохранить</div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import uniqueId from 'lodash.uniqueid';

import ChildContainer from '@/components/ChildContainer.vue';
import InputContainer from '@/components/InputContainer.vue';

export default {
  name: 'form-section',
  components: {
    InputContainer,
    ChildContainer,
  },
  data: () => ({
    childrenLength: 5,
    childrenData: [],
    plainData: {},
    show: true,
  }),
  methods: {
    addChild() {
      if (this.childrenData.length < this.childrenLength) {
        this.childrenData.push({
          id: uniqueId('child-'),
        });
      } else {
        this.show = false;
      }
    },
    removeChild(index) {
      const itemIndex = this.childrenData.findIndex(el => el.id === index);
      this.childrenData.splice(itemIndex, 1);
    },
    onSubmit(e) {
      const data = {
        person: this.plainData,
        children: this.childrenData
      }
      this.$store.dispatch('updateInfo', data)

    },
    mergeInputVal(obj) {
      for (const child of this.childrenData) {
        if (obj.id === child.id) {
          Object.keys(obj).forEach(key => {
            if (key !== 'id'){
              child[key] = obj[key]
            }
          })
        }
      }
    },
    getPlainData(objVal){
      Object.keys(objVal).forEach(key => {
        this.plainData[key] = objVal[key]
      })
    }
  },
  computed: {
    inputData() {
      return this.$store.getters.getInputData;
    },
    showBtn() {
      return this.childrenData.length < 5;
    },
  },
};
</script>

<style>
.form {
  &-group {
    &:not(:first-child) {
      margin-top: 33px;
    }
    &__title {
      .bem-button {
        position: absolute;
        right: 0;
      }
    }
    &__item {
      margin-top: 10px;
      &:first-of-type {
        margin-top: 20px;
      }
    }
  }
}
</style>
