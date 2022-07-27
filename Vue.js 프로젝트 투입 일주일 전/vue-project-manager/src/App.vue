<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">DataBinding</router-link> |
    <router-link to="/databindinghtml">Databindinghtml</router-link> |
    <router-link to="/dataBindingInputText">DataBindingInputText</router-link> |
    <router-link to="/dataBindingInputNumber">DataBindingInputNumber</router-link> |
    <router-link to="/dataBindingTextarea">DataBindingTextarea</router-link> |
    <router-link to="/dataBindingSelectBox">DataBindingSelectBox</router-link> |
    <router-link to="/dataBindingCheckBox">DataBindingCheckBox</router-link> |
    <router-link to="/dataBindingCheckBox2">DataBindingCheckBox2</router-link> |
    <router-link to="/dataBindingRadio">DataBindingRadio</router-link> |
    <router-link to="/dataBindingImg">DataBindingImg</router-link> |
    <router-link to="/dataBindingButton">DataBindingButton</router-link> |
    <router-link to="/dataBindingClass">DataBindingClass</router-link> |
    <router-link to="/dataBindingList">DataBindingList</router-link> |
    <router-link to="/renderingIf">RenderingIf</router-link> |
    <router-link to="/eventClick">EventClick</router-link> |
    <router-link to="/eventChange">EventChange</router-link> |
    <router-link to="/eventKey">EventKey</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
