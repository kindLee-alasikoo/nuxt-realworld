<template>
   <div class="article-page">

  <div class="banner">
    <div class="container">

      <div class="article-meta">
        
         <nuxt-link :to="{
             name:'profile',
             params:{username:articleData.author.username}
         }"><img :src="articleData.author.image" /></nuxt-link>
        <div class="info">
             <nuxt-link
             class="author" :to="{
             name:'profile',
             
             params:{username:articleData.author.username}
         }">{{articleData.author.othername}}</nuxt-link>
         
          <span class="date">{{articleData.createdAt|date('MMM DD,YYYY' )}}</span>
        </div>
        <button class="btn btn-sm btn-outline-secondary" :class="{active:articleData.author.following }">
          <i class="ion-plus-round"></i>
          &nbsp;
          Follow {{articleData.author.othername}} <span class="counter">(10)</span>
        </button>
        &nbsp;&nbsp;
        <button class="btn btn-sm btn-outline-primary" :class="{active:articleData.author.favorited }">
          <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">(29)</span>
        </button>
      </div>

    </div>
  </div>

 
</div>
</template>
<script>

export default {
    middleware:'authtic',
    props:{
        articleData:{
        type:Object,
        required:true,
        default:{}
        }
    },
    name:"ArticleIndex",
     async asyncData({ route, store, env, params, query, req, res, redirect, error}) {
    
    }
    
}
</script>