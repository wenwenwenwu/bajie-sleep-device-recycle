<template>
  <div class="main">
    <div class="main-container">
      <main-input
        class="main-container-input"
        type="text"
        title="设备号啊"
        @onInput="onDeviceNOInput"
      ></main-input>
      <main-input
        class="main-container-input"
        type="text"
        title="姓名"
        @onInput="onNameInput"
      ></main-input>
      <main-input
        class="main-container-input"
        type="number"
        title="手机号"
        @onInput="onTelephoneInput"
      ></main-input>
      <main-address
        class="main-container-input"
        title="地址"
        :addressArrary="addressArrary"
        @onAddressClick="onAddressClick"
      ></main-address>
      <textarea placeholder="请输入详细地址" v-model="detailAddress"></textarea>
      <button class="main-container-submit" @click="onSubmit">提 交</button>
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import MainInput from "@c/main-input.vue";
import MainAddress from "@c/main-address.vue";
import AreaData from "../assets/areaData.json";

export default {
  components: {
    MainInput,
    MainAddress,
  },

  data() {
    return {
      deviceNO: "",
      name: "",
      telephone: "",
      detailAddress: "",
      areaDataArray: [],

      addressArrary: [],
      showPicker: false,
      columns: [],
    };
  },

  created() {
    this.columns = AreaData;
  },

  methods: {
    onDeviceNOInput(value) {
      this.deviceNO = value;
    },
    onNameInput(value) {
      this.name = value;
    },
    onTelephoneInput(value) {
      this.telephone = value;
    },
    onAddressClick() {
      this.showPicker = true;
    },
    onConfirm(value) {
      this.addressArrary = value;
      this.showPicker = false;
    },
    onSubmit() {
      console.log(
        `deviceNO:${this.deviceNO};name:${this.name};telephone:${this.telephone};detailAddress:${this.detailAddress}`
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@css/style.scss";

.main {
  background-color: #eff2f7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-container {
    margin-top: 15%;
    width: 80%;
    display: flex;
    flex-direction: column;

    textArea {
      color: #666666;
      font-size: rem(16);
      resize: none;
      outline: none;
      border: 1px solid #d9d9d9;
      border-radius: rem(3);
      box-sizing: border-box;
      padding: rem(15);
      width: 100%;
      height: rem(100);
      margin-bottom: rem(28);
    }

    &-submit {
      color: white;
      background-color: #212773;
      font-size: rem(16);
      border-radius: rem(3);
      width: 100%;
      height: rem(44);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    vanField {
      font-size: rem(16);
    }
  }
}
</style>