<template>
  <v-app>
    <v-app-bar fixed app>
        <v-btn color="blue" class="pa-1 ma-1" ><router-link to="/">Homepage</router-link></v-btn>  |
        <v-btn color="blue" class="pa-1 ma-1" > <router-link to="/about">About</router-link></v-btn>  |          
        <v-btn color="blue" class="pa-1 ma-1 white--text" >
            <router-link :to="{ name: 'user', params: { username: 'User1' } }">
                Dynamic Routes
            </router-link>
        </v-btn> 
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>


    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>
  
          <v-spacer></v-spacer>
  
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>
  
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
   icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>
