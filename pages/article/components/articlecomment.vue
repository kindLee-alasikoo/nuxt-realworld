<template>
      <div class="row">
         
      <div class="col-xs-12 col-md-8 offset-md-2">
        <form class="card comment-form">
          <div class="card-block">
            <textarea v-model='value' class="form-control" placeholder="Write a comment..." rows="3"></textarea>
          </div>
          <div class="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            <button @click="post" class="btn btn-sm btn-primary">
             Post Comment
            </button>
          </div>
        </form>
        <template v-if="comment.length">
              <div class="card"  v-for="(i,index) in comment.data.comments" :key="index">
          <div class="card-block">
            <p class="card-text">{{i.body}}</p>
          </div>
          <div class="card-footer">
             <nuxt-link :to="{
             name:'profile',
             params:{username:i.username}
         }"><img :src="i.image" /></nuxt-link>
            &nbsp;
             <nuxt-link :to="{
             name:'profile',
             params:{username:i.username}
         }">{{i.username}}</nuxt-link>
            <span class="date-posted">{{i.createdAt|date('MMM DD,YYYY' )}}</span>
          </div>
        </div>

        </template>
     
        <div class="card">
          <div class="card-block">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <a href="" class="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            </a>
            &nbsp;
            <a href="" class="comment-author">Jacob Schmidt</a>
            <span class="date-posted">Dec 29th</span>
            <span class="mod-options">
              <i class="ion-edit"></i>
              <i class="ion-trash-a"></i>
            </span>
          </div>
        </div>
        
      </div>

    </div>

</template>
<script>
import {getComments,postComments} from '@/api/home'
export default {
    middleware:'authtic',
    props:{
        articleObj:{
        type:Object,
        required:true,
        default:{}
        }
    },
    data(){
       return{
           comment:[],
           value:''
       }
    },
    name:"ArticleComment",
  async  mounted(){
       this.comment =  await getComments(this.articleObj.slug)
    },
    methods:{
    async post(){
        await postComments(this.articleObj.slug,{comment:{body:this.value}})
     }
    }
    
}
</script>