<template>
  <div class="layout-aside-container">
    <!-- 左侧边栏列表 -->
    <ul class="user-select-none menu" @click="ulHasClick">
      <li class="menu-item">用户管理</li>
      <li class="menu-item">权限管理</li>
      <li class="menu-item">商品管理</li>
      <li class="menu-item">订单管理</li>
      <li class="menu-item">系统设置</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyAside',
  methods: {
  ulHasClick(e) {
    // 如果再次点击当前选中，就要return，否则报错哈，不能重复push
    if (e.target.innerText === '用户管理') {
      this.$router.push({
        path: '/home/users'
      })
    } else if (e.target.innerText === '权限管理') {
      this.$router.push({
        path: '/home/rights'
      })
    } else if (e.target.innerText === '订单管理') {
      this.$router.push({
        path: '/home/orders'
      })
    } else if (e.target.innerText === '系统设置') {
      this.$router.push({
        path: '/home/settings'
      })
    }
  }
}
}
</script>

<style lang="less" scoped>
.layout-aside-container {
  width: 250px;
  height: 100%;
  border-right: 1px solid #eaeaea;
}

.menu {
  list-style-type: none;
  padding: 0;
  .menu-item {
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    &:hover {
      background-color: #efefef;
      cursor: pointer;
    }
    a {
      display: block;
      color: black;
      padding-left: 30px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

// 设置路由高亮效果
.router-link-active {
  background-color: #efefef;
  box-sizing: border-box;
  position: relative;
  // 伪元素实现路由高亮效果
  &::before {
    content: " ";
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #42b983;
  }
}
</style>
