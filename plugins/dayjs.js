import Vue from 'vue'
import dayjs from 'dayjs'
Vue.filter('date',(date,format)=>{
    return dayjs(date).format(format)
})