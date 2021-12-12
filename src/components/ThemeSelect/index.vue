<template>
  <!-- v-bind="$attrs" 当父组件传递非props属性的时候，会直接绑定到这里 -->
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <svg-icon icon="change-theme"></svg-icon>
      </el-tooltip>
    </div>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <!-- 展示弹出层，默认的情况下，弹出层会显示在页面的中间，所以不需要写样式 -->
  <div>
    <select-color v-model:visible="selectColorVisible" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SelectColor from '@/components/ThemeSelect/components/SelectColor'

// 这个command参数来自于el-dropdown-item的command
const handleSetTheme = (command) => {
  selectColorVisible.value = true
}

// 设置dailog初始状态为隐藏
const selectColorVisible = ref(false)
</script>

<style scoped lang="scss"></style>
