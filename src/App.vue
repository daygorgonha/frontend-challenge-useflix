<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      permanent
      app
    >

      <v-container>
        <img
          src="./assets/logo-useflix.png"
          height="107"
          width="215"
          alt="useFlix"
        />
      </v-container>
    
      <v-list>
        <v-list-item
          class="item"
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
          color="primary"
          active-class="secondary"
        >
          <v-list-item-content class="ml-4">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn 
            plain
            color="secondary"
            class="text-transform-none"
          >
            Log out
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      class="flex" 
      app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-container
        class="d-flex align-center justify-space-between"
      >
        <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

        <img
          src="./assets/Avatar.svg"
          alt="avatar"
        />
      </v-container>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { title: 'Categorias', to: '/categorias' },
        { title: 'Filmes', to: '/filmes' },
        { title: 'Usuários' },
      ],
    }),
  }
</script>


<style scoped>
  .item:hover {
    background: #e4b1f1;
  }
  .text-transform-none {
    text-transform: none
  }
</style>
          