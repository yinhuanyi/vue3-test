<template>
  <div class="navbar">
    <hamburger class="hamburger-container" />
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <header-search class="right-menu-item hover-effect" />
      <screen-full class="right-menu-item hover-effect" />
      <theme-select class="right-menu-item hover-effect" />
      <!-- 引入语言切换LangSelect组件 -->
      <lang-select class="right-menu-item hover-effect" />

      <!-- 引入头像，头像使用了el-dropdown组件 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          ></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>

        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <!-- 下面是子选项 -->
            <router-link to="/">
              <el-dropdown-item>{{ $t('msg.navBar.home') }}</el-dropdown-item>
            </router-link>

            <a target="_blank" href="https://www.baidu.com">
              <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            </a>

            <router-link to="/">
              <el-dropdown-item divided @click="logout">{{
                $t('msg.navBar.logout')
              }}</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import HeaderSearch from '@/components/HeaderSearch'
import ScreenFull from '@/components/ScreenFull'
import ThemeSelect from '@/components/ThemeSelect'
import {} from 'vue'
import { useStore } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import LangSelect from '@/components/LangSelect'
import router from '@/router'

const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
  // router.push('/login')
  router.go(0) // 页面刷新
}
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;
      cursor: pointer;
      // &符号代表当前元素
      &.hover-effect {
        cursor: pointer;
      }
    }

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
