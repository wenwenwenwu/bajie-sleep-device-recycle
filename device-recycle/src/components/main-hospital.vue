<template>
  <div class="main-hospital">
    <p class="main-hospital-title">寄送至</p>
    <p class="main-hospital-info">
      {{ hospitalName }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    hospitalName: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@css/style.scss";

.main-hospital {
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
    color: #666666;
    background-color: white;
    border: rem(1) solid #d9d9d9;
    border-radius: rem(3);
    font-size: rem(16);
    box-sizing: border-box;
    padding: rem(5) rem(10);
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: rem(9);
  }
}
</style>