<template>
    <div class="member_card">
        <coupon-list  @close="showCoupon = false" :visiable="showCoupon"></coupon-list>
        <div class="click" @click="showCoupon = true">click</div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import CouponList from '@/components/coupon-list.vue';
@Component({
    components: {
        CouponList
    }
})
export default class AddCoupon extends Vue {
    showCoupon: boolean = false;
    change () {
        this.showCoupon = true;
    }

}
</script>
<style lang="scss" scoped>
    .member_card {
        .click {
            cursor: pointer;
        }
    }
</style>
