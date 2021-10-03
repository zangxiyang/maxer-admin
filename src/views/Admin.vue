<template>
    <div class="admin-wrapper absolute w-screen h-screen">
      <main class="flex w-full h-full overflow-hidden">
        <aside class="lg:w-72 lg:block hidden">
          <div class="aside-header flex items-center pl-4 pr-4">
            <div class="logo text-white text-lg w-full truncate text-center cursor-default select-none">
              Maxer Admin
            </div>
          </div>
          <n-layout :native-scrollbar="false"
                    class="aside-content"
                    style="background:transparent">
            <MaxerAsideNav/>
          </n-layout>
          <footer class="aside-footer flex items-center pl-12 cursor-default select-none">
            <n-avatar
                color="rgb(247,247,247,.7)"
                round
                :size="42"
            />
            <span class="text-white text-lg ml-14">Seale</span>
          </footer>
        </aside>
        <main class="flex-1">
          <n-layout :native-scrollbar="false" class="h-full" ref="content">
            <router-view/>
          </n-layout>
        </main>
      </main>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import MaxerAsideNav from "@/components/MaxerAsideNav.vue";
import DefaultAdminLayout from "@/layout/DefaultAdminLayout.vue";
import {useRouter} from "vue-router";


const content = ref();
const router = useRouter();
router.beforeEach((to, from, next) => {
  // 切换路由页面的时候，使页面置顶
  next();
  content.value.scrollTo({
    top: 0
  })
})



const testCount = ref(0)
function countPlus() {
  testCount.value++;
}
</script>

<style lang="scss" scoped>
$maxerLogoHeight: 70px;
$maxerAsideFooterHeight: 80px;
.admin-wrapper{
  .aside-header{
    height: $maxerLogoHeight;
  }
  .aside-content{
    height: calc(100% - #{$maxerLogoHeight} - #{$maxerAsideFooterHeight});
  }
  .aside-footer{
    height: $maxerAsideFooterHeight;
  }
  aside{
    background-image: linear-gradient(180deg, rgba(139, 144, 255, 0.87), rgba(152, 94, 238, 0.83), #b765d9, #de8ac4)
  }
}

</style>
