<template>
    <div id="primary-navigation">
      <router-link id="logo" :to="{ name: 'home' }">
        <img src="../../../assets/images/logo.png" alt="Logo" />
      </router-link>
      <nav aria-labelledby="primary-navigation" id="nav-menu">
        <div id="links">
          <router-link :to="{ name: 'home' }" class="nav-link"
            >How to Use?</router-link
          >
          <router-link :to="{ name: 'home' }" class="nav-link"
            >About Us</router-link
          >
          <router-link
            :to="{ name: 'auth.sign-in' }"
            class="nav-link nav-cta-link"
            >Sign In</router-link
          >
        </div>
      </nav>
    </div>
  </template>