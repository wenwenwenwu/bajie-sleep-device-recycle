<template>
  <div class="main-address">
    <p class="main-address-title">{{ title }}</p>
    <p
      class="main-address-info"
      :class="[address == '选择区域' ? 'light-gray' : 'dark-gray']"
      @click="onAddressClick"
    >
      {{ address }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    addressArrary: {
      type: Array,
      default() {
        return [];
      },
    },
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
    address() {
      return this.addressArrary == false
        ? "请选择区域"
        : this.addressArrary.join("-");
    },
  },

  methods: {
    onAddressClick() {
      this.$emit("onAddressClick");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@css/style.scss";

.main-address {
  width: 100%;
  height: rem(44);
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

  &-info {
    background-color: white;
    border: rem(1) solid #d9d9d9;
    border-radius: rem(3);
    font-size: rem(16);
    box-sizing: border-box;
    padding: rem(5);
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: rem(9);
  }

  .light-gray {
    color: #c1c1c1;
  }

  .dark-gray {
    color: #666666;
  }
}
</style>