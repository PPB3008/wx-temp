<template>
    <div class="wx-content">
        111
        <router-view/>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { wxcommon, wxcard } from '@/api/wxown';
import { cardActivateInputDto } from '@/api/wxown/card/request';
@Component({
    beforeRouteEnter (to,from,next) {
        next(async ()=> {
            let data: cardActivateInputDto = {
                Code: '100001',
            }
            const res: any = await wxcard.cardActivate(data);
            console.log(res);
        }); 
    }
})
export default class Index extends Vue{
    
}
</script>
<style lang="scss" scoped>

</style>
