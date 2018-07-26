<template>
    <div v-if="visiable" class="coupon">
        <div class="coupon_content">
            <div class="coupon_content_title">
                <div>button</div>
                <button @click="$emit('close')">X</button>
            </div>
            <div class="coupon_content_wrapper">
                <div class="wrapper-title"></div>
                <div class="wrapper">
                    <button @click="createCard" class="create-card">create</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { wxcommon, wxcard } from '@/api/wxown';
import { cardActivateInputDto, cardCreateInputDto } from '@/api/wxown/card/request';
@Component({})
export default class Coupon extends Vue {
    @Prop({ default: false })
    visiable?: boolean;
    async createCard () {
        const cardData: cardCreateInputDto = {
            CardType: 'CASH',
            LeastCost: 1000,
            MemberCard: {
                Prerogative: '10元可用',
                SupplyBalance: false,
                SupplyBonus: false,
            }
        }
        const res: any = await wxcard.createCard(cardData);
        if( res.Code !== 200 ) {
            console.log('error');
            return;
        }
        const cardInfo = res.Data;
        console.log(res.Data);
    }
}
</script>
<style lang="scss" scoped>
    .coupon {
        display: flex;
        position: fixed;
        justify-content: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.3);
        &_content {
            align-self: center;
            background-color: #fff;
            border-radius: 10px;
            height: 80%;
            flex: .8;
            &_title {
                display: flex;
                justify-content: space-between;
                button {
                    background-color: #fff;
                    border: 0;
                    cursor: pointer;
                }
            }
            &_wrapper {
                padding: 30px;
            }
        }
    }
</style>
