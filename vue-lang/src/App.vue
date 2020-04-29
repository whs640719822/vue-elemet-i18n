<!--
 * @Author: whs
 * @Date: 2020-04-29 15:31:40
 * @LastEditTime: 2020-04-29 16:32:48
 * @LastEditors: whs
 * @Description: 
 * @FilePath: \vue-lang\src\App.vue
 -->
<template>
<div id="app">
    {{$t('commonm.home')}}
    <el-date-picker
      v-model="value1"
      type="date"
      :placeholder="$t('date.title')">
    </el-date-picker>
    <el-button @click="changeLang('zh')">{{$t('commonm.home')}}</el-button>
    <el-button @click="changeLang('en')">{{$t('commonm.home')}}</el-button>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    mounted() {
        console.log(this);
        setTimeout(() => {
            //this.$i18n.locale="en"
        }, 2000)
    },
    methods: {
        changeLang(data) {
            this.$i18n.locale = data
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
