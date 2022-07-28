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
    <router-link to="/watch">Watch</router-link> |
    <router-link to="/dataBindingList2">DataBindingList2</router-link> |
    <router-link to="/nestedComponent">NestedComponent</router-link> |
    <router-link to="/parentComponent">ParentComponent</router-link> |
    <router-link to="/parentComponent3">ParentComponent3</router-link> |
    <router-link to="/parentComponent4">ParentComponent4</router-link> |
    <router-link to="/parentComponent5">ParentComponent5</router-link> |
    <router-link to="/provideInject">ProvideInject</router-link> |
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/compositionAPI">CompositionAPI</router-link> |
    <router-link to="/compositionAPI2">CompositionAPI2</router-link> |
    <router-link to="/compositionAPI3">CompositionAPI3</router-link> |
    <router-link to="/compositionAPI4">CompositionAPI4</router-link> |
    <router-link to="/compositionAPIProvide">CompositionAPIProvide</router-link>
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
