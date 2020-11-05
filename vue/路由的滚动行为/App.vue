<template>
  <div id="app">
    <div>这个是头部固定的div</div>
    <div>
      <h1>vue中的滚动行为</h1>
      <div class="nav">
        <rourer-link
          tag="div"
          class="nav-link"
          active-class="nav-active"
          :to="{ path: '/city-detail/1', hash: '#nav' }"
          >城市</rourer-link
        >
        <rourer-link
          tag="div"
          class="nav-link"
          active-class="nav-active"
          :to="{ path: '/city-detail/2', hash: '#nav' }"
          >城市</rourer-link
        >
        <rourer-link
          tag="div"
          class="nav-link"
          active-class="nav-active"
          :to="{ path: '/city-detail/3', hash: '#nav' }"
          >城市</rourer-link
        >
      </div>
    </div>
  </div>
</template>
