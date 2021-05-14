<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li
                v-if="user"
                class="nav-item"
                :class="{ activeNav: tab === 'your_feed' }"
              >
                <nuxt-link
                  class=""
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed',
                    },
                  }"
                  >my Feed</nuxt-link
                >
              </li>
              <li
                class="nav-item"
                :class="{ activeNav: tab === 'global_feed' }"
              >
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'global_feed',
                    },
                  }"
                  >Global Feed</nuxt-link
                >
              </li>
              <li
                v-if="tag"
                class="nav-item"
                :class="{ activeNav: tab === 'tag' }"
              >
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'tag',
                      tag: tag,
                    },
                  }"
                  >{{ tag }}</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div v-if="!articles.length" class="article-preview">
            No articles are here... yet.
          </div>
          <template v-for="(v, i) in articles">
            <div class="article-preview" :key="i">
              <div class="article-meta">
                <nuxt-link class="author" :to="`/profile/${v.author.username}`">
                  <img :src="v.author.image"
                /></nuxt-link>
                <div class="info">
                  <nuxt-link
                    class="author"
                    :to="`/profile/${v.author.username}`"
                  >
                    {{ v.author.username }}
                  </nuxt-link>
                  <span class="date">{{ v.createdAt |date('MMM DD, YYYY')}}</span>
                </div>
                <button
                :disabled='v.articleFavoDis'
                @click="onFavo(v)"
                  class="btn btn-outline-primary btn-sm pull-xs-right"
                  :class="{ active: v.favorited }"
                >
                  <i class="ion-heart"></i> {{ v.favoritesCount }}
                </button>
              </div>
              <nuxt-link
                :to="{ name: 'article', params: { slug: v.slug } }"
                class="preview-link"
              >
                <h1>{{ v.title }}</h1>
                <p>{{ v.description }}</p>
                <span
                  @click="
                    $router.push({ name: 'article', params: { slug: v.slug } })
                  "
                  >Read more...</span
                >
              </nuxt-link>
            </div>
          </template>

          <nav>
            <ul class="pagination">
              <template v-for="(item, index) in totalPage">
                <li
                  :key="index"
                  class="page-item"
                  :class="{ active: item === page }"
                >
                  <nuxt-link
                    class="page-link"
                    :to="{
                      name: 'home',
                      query: {
                        page: item,
                        tag: $route.query.tag,
                        tab: tab,
                      },
                    }"
                    >{{ item }}</nuxt-link
                  >
                </li>
              </template>
            </ul>
          </nav>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <template v-for="(i, index) in tags">
                <li :key="index" v-if="i !== ''" class="tag-pill tag-default">
                  <nuxt-link
                    :to="{
                      name: 'home',
                      query: {
                        tab: 'tag',
                        tag: i,
                      },
                    }"
                    >{{ i }}</nuxt-link
                  >
                </li>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getArticles, getFeedArticles ,addFavo,cancelFavo} from '@/api/home'

import { getTags } from '@/api/tag'
import { mapState } from 'vuex'
export default {
  name: 'HomeIndex',
  watchQuery: ['page', 'tag', 'tab'],
  computed: {
    ...mapState(['user']),
    isLogin() {
      return this.$store.state.user !== {}
    },
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit)
    },
  },
  methods:{
  async  onFavo(article){
   article.articleFavoDis = true
   if(article.favorited){
     await cancelFavo(article.slug)
     article.favorited = false
     article.favoritesCount += -1
   }else{
      await addFavo(article.slug)
      article.favorited = true
      article.favoritesCount += 1
   }
    article.articleFavoDis = false
    }
    
  },
  async asyncData({ query, store }) {
    const page = Number.parseInt(query.page || 1)
    const limit = 5
    const tag = query.tag
    const tab = query.tab || 'global_feed'
    const localArticle =
      store.state.user && tab === 'your_feed' ? getFeedArticles : getArticles
    const [articleRes, tagRes] = await Promise.all([
      localArticle({ limit, offset: (page - 1) * limit, tag, tab: query.tab }),
      getTags(),
    ])
   
    
    const { articles, articlesCount } = articleRes.data
    articles.forEach(i => {
      i.articleFavoDis = false
    });
    const { tags } = tagRes.data
    return {
      articles,
      articlesCount,
      limit: limit,
      page: page,
      tags,
      tag,
      tab: query.tab || 'global_feed',
    }
  },
}
</script>
<style>
.activeNav {
  text-decoration: underline;
}
</style>
