<template>
  <div class="pa-3">
    <h1>Sobre</h1>
      <p>
        Essa é uma lista de tarefas desenvolvida para fins didáticos
        com Vue.js
      </p>
      <p>  
        Utilizamos diversas ferramentas
        atuais(contexto de 2021) e muito utilizadas no mercado de trabalho.

        Algumas ferramentas utilizadas aqui foram:
      </p>
      <v-list>
      <template v-for="(item) in tacnologias">

        <v-list-item
          :key="item.titulo"
        >
          <v-list-item-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.titulo"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <hr>
      
  </div>
</template>

<script>

export default {
  data() {
    return{
      tacnologias:[
        {
          titulo: "HTML",
          icon: "mdi-language-html5"
        },
        {
          titulo: "Vue.js",
          icon: "mdi-vuejs"
        },
        {
          titulo: "Vuetify",
          icon: "mdi-vuetify"
        },
        {
          titulo: "VUEX",
          icon: "mdi-vuejs"
        },
        {
          titulo: "VueRouter",
          icon: "mdi-vuejs"
        },
        {
          titulo: "Localbase DB",
          icon: "mdi-database"
        },
        {
          titulo: "Animate.css",
          icon: "mdi-transition"
        },
        {
          titulo: "Drag and Drop",
          icon: "mdi-drag-variant"
        },
        {
          titulo: "Git",
          icon: "mdi-git"
        },
        {
          titulo: "GitHub",
          icon: "mdi-github"
        },
        {
          titulo: "Netlify",
          icon: "mdi-web"
        },
      ]
    }
  }
}
</script>

