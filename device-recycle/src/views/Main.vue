<template>
  <div class="main">
    <div class="main-container">
      <main-hospital hospitalName="郴州市第一人民医院"></main-hospital>
      <main-input
        class="main-container-input"
        type="text"
        title="设备号"
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
      <textarea
        class="main-container-textArea"
        placeholder="请输入详细地址"
        v-model="detailAddress"
      ></textarea>
      <button class="main-container-submit" @click="onSubmit">提 交</button>
      <van-popup v-model="showPicker" round position="bottom">
        <van-area
          :area-list="areaList"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import MainHospital from "@c/main-hospital.vue";
import MainInput from "@c/main-input.vue";
import MainAddress from "@c/main-address.vue";
import CommonTool from "@js/commonTool.js";

export default {
  components: {
    MainHospital,
    MainInput,
    MainAddress,
  },

  data() {
    return {
      hospitalID: "",
      deviceNO: "",
      name: "",
      telephone: "",
      detailAddress: "",
      addressArrary: [],
      showPicker: false,
      areaList: AREA_LIST,
    };
  },

  created() {
    this.hospitalID = CommonTool.getURLData().id;
    console.log(`hospitalID:${this.hospitalID}`);
    this.hospitalInfoRequest();
    // this.test()
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
      this.addressArrary = value.map((item) => {
        return item.name;
      });
      this.showPicker = false;
    },
    onSubmit() {
      if (
        !this.deviceNO ||
        !this.name ||
        !this.telephone ||
        !this.addressArrary ||
        !this.detailAddress
      ) {
        this.$toast(ALERT_INFO.infoEmpty);
        return;
      }
      if (!CommonTool.isPhoneNumber(this.telephone)) {
        this.$toast(ALERT_INFO.TelephoneError);
        return;
      }

      console.log(
        `deviceNO:${this.deviceNO};name:${this.name};telephone:${this.telephone};addressArray:${this.addressArrary};detailAddress:${this.detailAddress}`
      );
    },
    async test() {
      const uri = `express/hospital/${this.hospitalID}`;
      let a = await fetch("https://cloud.bajiesleed.com/express/hospital/60eea99629fd55c94f7d5136");
      console.log(a);
    },
    async hospitalInfoRequest() {
      const uri = `express/hospital/${this.hospitalID}`;
      // let a = await fetch(`${BASE_URL}${uri}`);
      // console.log(a);
      this.$http
        .get(uri)
        .then((response) => {
          console.log(response.name);
        })
        .catch((error) => {
          this.$toast(error);
        });
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

    &-hospital {
      color: #212773;
      font-size: rem(23);
      text-align: center;
      margin-bottom: rem(30);
    }

    &-textArea {
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
  }
}
</style>