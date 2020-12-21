<template>
  <v-select v-model="selected" :option="options" :on-change="changeLang" class="my-v-select"></v-select>
</template>

<script>
  import vSelect from 'vselect-component'

  export default {
    components: {
      vSelect
    },

    data() {
      return {
        index: 1,
        options: [
          {
            value: 1,
            label: 'RU'
          },
          {
            value: 2,
            label: 'EN'
          },
          // {
          //   value: 3,
          //   label: 'CH'
          // }
        ],
        selected: {
          value: 2,
          label: 'EN'
        }
      }
    },

    methods: {
      changeLang: function () {
        this.$i18n.locale = this.selected.label.toLowerCase();
        console.log(this.selected.label.toLowerCase())
      }
    },

    watch:{
      'selected'  : function (val, oldval) {
        this.changeLang();
      }
    }
  }
</script>

<style lang="scss">
  .my-v-select {
    width: 50px!important;
    height: max-content!important;
    .up.input-control::after, .down.input-control::after {
      content: none;
    }
    .input-control {
      input {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Golos-Regular', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: white;
        text-align: center;
        border: 1px solid white;
        border-radius: 4px;
        background-color: transparent;
        cursor: pointer;
      }
    }
    .dropMenu {
      padding: 10px!important;
      right: 10px;
      top: 35px!important;
      min-width: auto!important;
      ul {
        overflow-y: hidden!important;
        li {
          height: auto;
          font-family: 'Montserrat-Regular', sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          align-items: center;
          color: #909399;
          &.active {
            color: #070E1E;
          }
        }
      }
    }
  }
</style>
