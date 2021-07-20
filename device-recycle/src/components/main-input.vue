<template>
  <div class="main-input">
    <p class="main-input-title">{{ title }}</p>
    <input class="main-input-input"
      type="text"
      :placeholder="placeholder"
      v-model="value"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    title: String,
  },

  data: function () {
    return {
      value: "",
    };
  },

  computed: {
    placeholder() {
      return `请输入${this.title}`;
    },
  },

  methods: {
    onInput: function () {
      this.$emit("onInput", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@css/style.scss";

.main-input {
  width: 100%;
  height: rem(40);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: rem(28);

  &-title {
    color: #212773;
    font-size: rem(18);
    text-align: center;
    width: rem(60);
  }

  &-input {
    color: #666666;
    background-color: white;
    border: rem(1) solid #d9d9d9;
    border-radius: rem(3);
    outline: none;
    font-size: rem(16);
    box-sizing: border-box;
    padding: rem(5);
    flex: 1;
    height: 100%;
    margin-left: rem(9);
  }
}
</style>