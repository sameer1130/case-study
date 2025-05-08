<template>
  <a-layout-sider
    width="400"
    style="min-height: 100vh;"
    breakpoint="lg"
    collapsed-width="0"
    
  >
    <div class="logo" />
    <a-menu
      mode="inline"
      theme="light"
      v-model:selected-keys="selectedKeys"
      v-model:open-keys="openKeys"
      
      
      :default-open-keys="['sub1', 'sub2', 'sub3']"
    >
      <a-menu-item key="1">
        <span>ROLE</span>
      </a-menu-item>

      <a-menu-item key="2">
        <span>PROBLEM STATEMENT</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>EXPERIENCE STRATEGY</span>
        </template>
        

            <a-menu-item class="underline" key="3">User Research</a-menu-item>
            <a-menu-item class="underline" key="4">User Persona</a-menu-item>
            <a-menu-item class="underline" key="5">Solution Overview</a-menu-item>
            <a-menu-item class="underline" key="6">User Journey Map</a-menu-item>
        
      </a-sub-menu>
      <a-menu-item key="7">
        <span>EXTERNAL RESOURCES</span>
      </a-menu-item>
      <a-sub-menu key="sub2">
        <template #title>
          <span>VISUAL FRAMEWORK</span>
        </template>
        <a-menu-item class="underline" key="8">Wireframes</a-menu-item>
        <a-menu-item class="underline" key="9">Style Guides</a-menu-item>
        <a-menu-item class="underline" key="10">Prototype</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="11">
        <span>USER TESTING</span>
      </a-menu-item>
      <a-sub-menu key="sub3">
        <template #title>
          <span>PRODUCT REVIEW</span>
        </template>
        <a-menu-item class="underline" key="12">Final Interaction Demo</a-menu-item>
        <a-menu-item class="underline" key="13">Video Walkthrough</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="14">
        <span>GROWTH & IMPACT</span>
      </a-menu-item>
      <a-menu-item key="15">
        <span>USER FEEDBACK</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
// no script logic needed for static nav
import { ref } from "vue";

const selectedKeys = ref(["1"]); 
const openKeys = ref(["sub1", "sub2", "sub3"]);
</script>

<style>
.logo {
  height: 32px;
  margin: 40px;
  background: rgba(255, 255, 255, 0.3);
}
.ant-menu-item-selected{
  background-color: transparent !important;  
  color: inherit !important; 
  font-weight: 500 !important;
}
/* Submenu container */
.ant-menu-submenu,
.ant-menu-submenu-title {
  background-color: #fff !important;
  color: inherit !important;
}

/* Opened submenu content */
.ant-menu-submenu-open > .ant-menu-submenu-title {
  background-color: #fff !important;
  
}

/* Submenu dropdown content */
.ant-menu-submenu > .ant-menu {
  background-color: #fff !important;
}

.ant-menu-item:hover,
.ant-menu-submenu-title:hover {
  background-color: transparent !important;
  color: inherit !important;
}
.ant-menu-item:focus,
.ant-menu-submenu-title:focus {
  outline: none !important;
  background-color: transparent !important;
  color: inherit !important;
}
.ant-layout-sider {
  border-right: none !important;
  box-shadow: none !important;
  justify-content: center !important;

  padding-left: 60px;
  background-color: #fff!important;
  
}
.underline{
    text-decoration: underline;
    background-color: #fff !important;
            
}
.ant-menu-item,
.ant-menu-submenu-title {
  font-size: 1.125rem !important;
  padding: 2rem;
  /* padding-left: 6rem!important; */
  font-weight:200;
  background: #fff !important;
}


</style>
