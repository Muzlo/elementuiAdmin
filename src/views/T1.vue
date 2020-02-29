<template>
    <div style="padding: 10px">
{{time}}
    </div>
</template>

<script>
export default {
    name: 't1',
    data() {
        return {
  
            
        }
    },
    created(){
        this.$axios.post("/api/weixin/query",this._qs.stringify({
            key: '200cdd820c46a6d44cd77ae6d630ca95',
        })).then((res)=>{
            console.log(res)
        }).catch((res)=>{
            console.log(res)
        })  
    },
    computed:{
        time(){
            return new Date().getTime()
        }
    }
}
</script>

<style scoped>

</style>