<template>
    <div v-if="visiable" class="coupon">
        <div class="coupon_content">
            <div class="coupon_content_title">
                <div>添加全场代金券</div>
                <button @click="$emit('close')">X</button>
            </div>
            <!-- <scroller :on-infinite="oninfinite" ref="scroller" > -->
                <div class="coupon_content_wrapper">
                    <div class="wrapper-title">填写基本信息</div>
                    <div class="wrapper">
                        <div class="wrapper_item">
                            <div class="wrapper_item_title"> 
                                <span>*</span>
                                <span>活动类型</span>
                            </div>
                            <div class="wrapper_item_content">
                                <div class="active-type">
                                    <span class="option">立减</span>
                                    <span class="option">每满减</span>
                                    <span class="option">阶梯减</span>
                                </div>
                                <div class="consume-level">
                                    <div>
                                        <span>*</span>
                                        <span>消费门槛</span>
                                    </div>
                                    <div>
                                        <label>消费满</label>
                                        <input type="text"/>
                                        <label>元</label>
                                    </div>
                                    <div>
                                        <label>订单立减</label>
                                        <input type="text"/>
                                        <label>元</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wrapper_item">
                            <div class="wrapper_item_title">
                                <span>*</span>
                                <span>券名称</span>
                            </div>
                            <div class="wrapper_item_content">
                                <input placeholder="全场代金券" class="coupon-name" type="text"/>
                                <span>5/16</span>
                            </div>
                        </div>
                        <div class="wrapper_item">
                            <div class="wrapper_item_title">
                                <span>*</span>
                                <span>生效时间</span>
                            </div>
                            <div class="wrapper_item_content">
                                <div>
                                    <span class="option">领取时立即生效</span>
                                    <span class="option">根据领取事件计算</span>
                                </div>
                                <div class="coupn-time-custom">
                                    <label>领取后</label>
                                    <input type="text"/>
                                    <select name="" id="">
                                        <option value="hour">小时</option>
                                        <option value="day">天</option>
                                    </select>
                                    <label>生效</label>
                                </div>
                            </div>
                        </div>
                        <div class="wrapper_item">
                            <div class="wrapper_item_title">
                                <span>*</span>
                                <span>券有效期</span>
                            </div>
                            <div class="wrapper_item_content">
                                <div>
                                    <span class="option">相对时间</span>
                                    <span class="option">指定时间生效</span>
                                </div>
                                <div class="coupn-continue-custom">
                                    <label>生效后</label>
                                    <input type="text"/>
                                    <label>天</label>
                                    <label>内有效</label>
                                </div>
                            </div>
                        </div>
                        <div class="wrapper_item">
                            <div class="wrapper_item_title">
                                <span>*</span>
                                <span>试用门店</span>
                            </div>
                            <div class="wrapper_item_content">
                                <span class="option option-select">选择门店</span>
                            </div>
                        </div>
                        <div class="wrapper_item">
                            <div class="wrapper_item_title">
                                <span></span>
                                <span>券详情图</span>
                            </div>
                            <div class="wrapper_item_content">
                                <div class="coupon-upload">
                                    <i></i>
                                    <div>点击上传图片</div>
                                </div>
                                <div>
                                    <p>图片大小： 不超过2M</p>
                                    <p>图片格式： jpg、jpeg、png</p>
                                    <p>建议尺寸:  850px*350px以上</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-title">
                        <div>填写更多信息</div>
                        <div @click="pageControl.advInfo===true?pageControl.advInfo=false:pageControl.advInfo=true" class="open-btn">
                            <label>{{ pageControl.advInfo === false?'展开':'收起' }}</label>
                            <i></i>
                        </div>
                    </div>
                    <div v-if="pageControl.advInfo" class="wrapper">
                        111
                    </div>
                    <div class="wrapper-title">
                        <div>投放渠道</div>
                        <div @click="pageControl.pipe===true?pageControl.pipe=false:pageControl.pipe=true" class="open-btn">
                            <label>{{ pageControl.pipe === false?'展开':'收起' }}</label>
                            <i></i>
                        </div>
                    </div>
                    <div v-if="pageControl.pipe" class="wrapper">
                        1111
                    </div>
                </div>
            <!-- </scroller> -->
            <div class="submit-btn">
                <button>返回</button>
                <button @click="eventGet">保存</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { wxcommon, wxcard, wxevent } from '@/api/wxown';
import { cardActivateInputDto, cardCreateInputDto } from '@/api/wxown/card/request';
@Component({})
export default class Coupon extends Vue {
    @Prop({ default: false })
    visiable?: boolean;
    pageControl = {
        baseInfo: true,
        advInfo: false,
        pipe: false,
    }
    activeType = {
        
    }
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
            return;
        }
        const cardInfo = res.Data;
    }
    async eventGet () {
        const res: any = await wxevent.getEvent('110');
        console.log(res);
    }
}
</script>
<style lang="scss" scoped>
    body {
        height: 120%;
    }
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
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            position: relative;
            align-self: center;
            background-color: #fff;
            padding: 18px 20px;
            border-radius: 10px;
            height: 80%;
            flex: .8;
            overflow: hidden;
            z-index: 999;
            &_title {
                display: flex;
                justify-content: space-between;
                color: #666666;
                font-size: 16px;
                button {
                    background-color: #fff;
                    border: 0;
                    cursor: pointer;
                }
            }
            &_wrapper {
                height: 90%;
                padding: 0 20px;
                z-index: 1;
                overflow-y: scroll;
                .wrapper-title {
                    display: flex;
                    justify-content: space-between;
                    padding: 40px 0 30px;
                    font-size: 18px;
                    border-bottom: 1px solid #f4f5f5;
                    .open-btn {
                        font-size: 14px;
                        cursor: pointer;
                    }
                }
                .wrapper {
                    padding: 20px 50px;
                    &_item {
                        display: flex;
                        justify-content: space-between;
                            &_title {
                                flex: .5;
                                display: flex;
                                font-size: 14px;
                                >span {
                                    align-self: flex-start;
                                    padding-top: 15px;
                                    &:nth-child(1) {
                                        color: red;
                                    }
                                }
                            }
                            &_content {
                                flex: 9;
                                >div {
                                    margin: 10px 0;
                                }
                                .consume-level {
                                    background-color: #f4f5f5;
                                    padding: 24px 32px;
                                    div {
                                        margin: 0 10px;
                                        display: inline-block;
                                    }
                                    label {
                                        font-size: 14px;
                                        &:nth-child(3) {
                                            padding: 6px 5px;
                                            background-color: #d9d9d9;
                                            margin-left: -5px;
                                        }
                                    }
                                    input {
                                        padding: 8px 0;
                                        margin: 0 5px;
                                        border: 1px solid #d9d9d9;
                                        border-radius: 4px; 
                                    }
                                }
                                .coupon-name {
                                    width: 37%;
                                    padding: 8px 0;
                                
                                    border: 1px solid #d9d9d9;
                                    border-radius: 4px; 
                                }
                                .coupon-name+span {
                                    color: #d9d9d9;
                                    font-size: 14px;
                                    margin-left: 10px; 
                                }
                                .coupn-time-custom {
                                    background-color: #f4f5f5;
                                    padding: 24px 32px;
                                    input,
                                    select {
                                        margin: 0 10px;
                                        padding: 8px 0;
                                        border: 1px solid #d9d9d9;
                                        border-radius: 4px; 
                                    }
                                    select {
                                        padding: 8px 112px 8px 15px; 
                                    }
                                    label {
                                        font-size: 14px;
                                    }
                                }
                                .coupn-continue-custom {
                                    background-color: #f4f5f5;
                                    padding: 24px 32px;
                                    input {
                                        margin: 0 10px;
                                        padding: 8px 0;
                                        border: 1px solid #d9d9d9;
                                        border-radius: 4px; 
                                    }
                                    label {
                                        font-size: 14px;
                                    }
                                }
                                .coupon-upload {
                                    display: inline-block;
                                    padding: 20px 22px;
                                    border: 1px dashed #666666;
                                    border-radius: 4px;
                                    color: #666666;
                                }
                                .coupon-upload+div {
                                    display: inline-block;
                                    color: #666666;
                                    font-size: 12px;
                                    margin-left: 10px;
                                    p {
                                        margin: 0;
                                        line-height: 1.9;
                                    }
                                }
                                .option {
                                    display: inline-block;
                                    padding: 8px 28px;
                                    border-radius: 4px;
                                    color: #666666;
                                    border: 1px solid #d9d9d9;
                                    margin-right: 20px;
                                    font-size: 16px;
                                }
                                .option-select {
                                    color: #fff;
                                    background-color: #ff8833;
                                }
                                .select {
                                    border: 1px solid #ff8833;
                                }

                            }
                        
                    }   
                }
            }
            .submit-btn {
                display: flex;
                justify-content: flex-end;
                button {
                    background-color: none;
                    margin-left: 10px;
                    padding: 9px 18px;
                    border-radius: 4px;
                    &:nth-child(1) {
                        border: 1px solid #d9d9d9;
                        color: #666666;
                    }
                    &:nth-child(2) {
                        background-color: #ff5e00;
                        color: #fff;
                        
                    }
                }
            }
        }
    }
</style>
