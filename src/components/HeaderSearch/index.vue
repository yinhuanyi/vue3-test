<template>
  <div class="header-search" :class="{ show: isShow }">
    <!-- click.stop的stop是禁止点击事件冒泡，如果外面元素还有监听click事件，不会被触发 -->
    <svg-icon
      class-name="search-icon"
      icon="search"
      @click.stop="onShowClick"
    />
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      :filterable="true"
      default-first-option
      remote
      :remote-method="querySearch"
      placeholder="search"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in 5"
        :key="option"
        :label="option"
        :value="option"
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SvgIcon from '@/components/SvgIcon'

// 控制search输入框展示的变量
const isShow = ref(false)
// el-select 实例
const headerSearchSelectRef = ref(null)

const onShowClick = () => {
  console.log('onShowClick')
  isShow.value = !isShow.value
  headerSearchSelectRef.value.focus()
}

const search = ref('')

const querySearch = () => {
  console.log('querySearch')
}
// 选中option的回调
const onSelectChange = () => {
  console.log('onSelectChange')
}
</script>

<style scoped lang="scss">
.header-search {
  font-size: 0 !important;
  // 这里由于把样式传递到组件内部了，那么操作子组件的样式，需要使用::v-deep
  ::v-deep .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
