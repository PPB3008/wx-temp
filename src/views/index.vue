<template>
    <div class="wx-content">
        111
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { wxcommon, wxcard } from '@/api/wxown';
import { cardActivateInputDto, cardCreateInputDto } from '@/api/wxown/card/request';
@Component({
    beforeRouteEnter (to, from, next) {
        next(async(vm: any)=> {
            let data: cardActivateInputDto = {
                Code: '100001',
            }
            const res: any = await wxcard.activateCard(data);
            console.log(res)
            vm.$router.replace({ name: 'Member' });
        }); 
    }
})
export default class Index extends Vue{
    
}
</script>
<style lang="scss" scoped>

</style>
