<template>
    <div class="wx-member">
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
@Component({})
export default class Template extends Vue {
      
}
</script>
<style lang="scss" scoped>
    .wx-member {
        display: flex;
        flex: 1;
    }
</style>
