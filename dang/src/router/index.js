import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '../components/Home.vue'
import Inform from '../components/Inform.vue'
import My from '../components/My.vue'
import Login from '../components/Login.vue'
import News from '../components/News.vue'
import Organization from '../components/Organization.vue'
import Yun from '../components/Yun.vue'
import Yidian from '../components/Yidian.vue'
import Id from '../components/Id.vue'
import Today from '../components/Today.vue'
import Study from '../components/Study.vue'
import Pai from '../components/Pai.vue'
import Jian from '../components/Jian.vue'
import Te from '../components/Te.vue'
import Gexi from '../components/Gexi.vue'
import Gefen from '../components/Gefen.vue'
import Gemi from '../components/Gemi.vue'
import Gefei from '../components/Gefei.vue'
import Yidianlast from '../components/Yidianlast.vue'




export default new Router({
  routes: [
    {path:'/',redirect:'/Home',},
    {path:'/Home',component:Home,},
    {path:'/Inform',component:Inform,meta:{title:'通知早知道'},},
    {path:'/My',component:My,meta:{title:'我的党建'},},
    {path:'/Login',component:Login,meta:{title:'登录'},},
    {path:'/News',component:News,meta:{title:'信工新闻眼'},},
    {path:'/Organization',component:Organization,meta:{title:'掌上组织生活'},},
    {path:'/Yun',component:Yun,meta:{title:'党员云互动'},},
    {path:'/Yidian',component:Yidian,meta:{title:'党建一点通'},},
    {path:'/Id',component:Id,meta:{title:'党员亮身份'},},
    {path:'/Today',component:Today,meta:{title:'党史的今天'},},
    {path:'/Study',component:Study,meta:{title:'随时随地学'},},
    {path:'/Pai',component:Pai,meta:{title:'随时随地拍'},},
    {path:'/Jian',component:Jian,meta:{title:'制度建设'},},
    {path:'/Te',component:Te,meta:{title:'特色活动'},},
    {path:'/Gexi',component:Gexi,meta:{title:'个人信息'},},
    {path:'/Gefen',component:Gefen,meta:{title:'个人量化积分'},},
    {path:'/Gemi',component:Gemi,meta:{title:'修改密码'},},
    {path:'/Gefei',component:Gefei,meta:{title:'党费缴纳'},},
    {path:'/Yidianlast',component:Yidianlast,meta:{title:'党建一点通'},},
    {path:'/Newslast',component:()=>import('@/components/Newslast.vue'),meta:{title:'信工新闻眼'},},
    {path:'/Idlast',component:()=>import('@/components/Idlast.vue'),meta:{title:'党员亮身份'},},
    {path:'/Studylast',component:()=>import('@/components/Studylast.vue'),meta:{title:'随时随地学'},},
    {path:'/Pailast',component:()=>import('@/components/Pailast.vue'),meta:{title:'随时随地拍'},},
    {path:'/Jianlast',component:()=>import('@/components/Jianlast.vue'),meta:{title:'制度建设'},},
    {path:'/Teselast',component:()=>import('@/components/Teselast.vue'),meta:{title:'特色活动'},},
    {path:'/Informlast',component:()=>import('@/components/Informlast.vue'),meta:{title:'通知早知道'},},
    {path:'/Bianji',component:()=>import('@/mydangjian/Bianji.vue'),meta:{title:'个人信息'},},
    {path:'/Mingxi',component:()=>import('@/components/Mingxi.vue'),meta:{title:'积分明细'},},
    {path:'/Huifu',component:()=>import('@/components/Huifu.vue'),meta:{title:'党员云互动'},},
    {path:'/Zhengstudy',component:()=>import('@/zuzhi/Zhengstudy.vue'),meta:{title:'政治学习'},},
    {path:'/Zhengstudylast',component:()=>import('@/zuzhi/Zhengstudylast.vue'),meta:{title:'政治学习'},},
    {path:'/Sixiang',component:()=>import('@/zuzhi/Sixiang.vue'),meta:{title:'思想报告'},},
    {path:'/Sixianglast',component:()=>import('@/zuzhi/Sixianglast.vue'),meta:{title:'思想报告'},},
    {path:'/Xinde',component:()=>import('@/zuzhi/Xinde.vue'),meta:{title:'心得总结'},},
    {path:'/Xindelast',component:()=>import('@/zuzhi/Xindelast.vue'),meta:{title:'心得总结'},},
    {path:'/Minzhu',component:()=>import('@/zuzhi/Minzhu.vue'),meta:{title:'掌上组织生活'},},
    {path:'/Zhaozuzhi',component:()=>import('@/zuzhi/Zhaozuzhi.vue'),meta:{title:'流动党员找组织'},},
    {path:'/Ajaxup',component:()=>import('@/components/Ajaxup.vue'),meta:{title:'流动党员找组织'},},
    {path:'/Minzong',component:()=>import('@/zuzhi/Minzong.vue'),meta:{title:'个人总结'},},
    {path:'/Minzonglast',component:()=>import('@/zuzhi/Minzonglast.vue'),meta:{title:'个人总结'},},
    {path:'/Minping',component:()=>import('@/zuzhi/Minping.vue'),meta:{title:'民主评议'},},
    {path:'/Minpinglast',component:()=>import('@/zuzhi/Minpinglast.vue'),meta:{title:'参评党员'},},
    {path:'/Pinglast',component:()=>import('@/zuzhi/Pinglast.vue'),meta:{title:'民主评议'},},
    {path:'/Luncontent',component:()=>import('@/components/Luncontent.vue'),meta:{title:''},}


  ]
})
