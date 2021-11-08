<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <label class="navbar-brand">Navigation Tree</label>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/Home/Admin"
              v-slot="{ href, navigate, isActive }"
              custom
            >
              <a
                class="nav-link"
                :class="{ active: isActive }"
                :href="href"
                @click="navigate"
                >Admin</a
              >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/Home/User"
              v-slot="{ href, navigate, isActive }"
              custom
            >
              <a
                class="nav-link"
                :class="{ active: isActive }"
                :href="href"
                @click="navigate"
                >User</a
              >
            </router-link>
          </li>
        </ul>
        <img src="./assets/img/Logo.png" width="60" />
      </div>
    </div>
  </nav>
  <div class="container pt-5">
    <router-view />
  </div>
</template>

