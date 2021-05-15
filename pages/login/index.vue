<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link v-if="isLogin" to="/register"
              >need an account?</nuxt-link
            >
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
              <template v-for="(i,f) in errors"> 
                 <li :key='k' v-for="(m,k) in i">{{f}}{{m}}</li>
              </template>
            
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="user.username"
                required 
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                v-model="user.email"
                placeholder="Email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="user.password"
                minlength="8"
                placeholder="Password"
                required
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? 'Sign in' : 'Sign up' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login, register } from '@/api/user'
  const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: 'login',
  middleware:'unauthtic',
  computed: {
    isLogin() {
      return this.$route.name === 'login'
    },
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
       errors:{}
    }
   
  },
  methods: {
     
    async onSubmit() {
      try {
        const { data } =this.isLogin? await login({ user: this.user }):await register({user: this.user})
       
        this.$router.push('/')
      
        Cookie.set('user', data.user)//cookie'存登录信息
        console.log(data.user)
         this.$store.commit('setUser',data.user)
      } catch (error) {
          this.errors = error.response.data.errors
        console.dir(error)
      }
    },
  },
}
</script>
