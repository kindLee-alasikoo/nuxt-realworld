<template>
   <div class="article-page">

  <div class="banner">
    <div class="container">

      <h1>{{detailData.title}}</h1>

     
     <articleView  :articleData="detailData"/>

    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12" v-html="detailData.body">
        <h2 id="introducing-ionic">Introducing RealWorld.</h2>
        <p>It's a great solution for learning how other frameworks work.</p>
      </div>
    </div>

    <hr />

    <articleView  :articleData="detailData"/>
   <artcomment :articleObj="detailData"/>


  </div>

</div>
</template>
<script>

import {getDetail} from '@/api/home'
import articleView from './components/article'
import artcomment from './components/articlecomment'
export default {
  components: { articleView ,artcomment},
    middleware:'authtic',
    name:"ArticleIndex",
     async asyncData({ route, store, env, params, query, req, res, redirect, error}) {
     console.log(params)
       const data = await getDetail(params.slug)
       return {
         detailData:data.data.article
       }
    },
     head() {
    
    return {
        title:this.detailData.title,
       meta:[{ vmid: 'description',
      name: 'description',
      content:this.detailData }]
    }
  }
}
</script>