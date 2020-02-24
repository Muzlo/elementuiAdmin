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
    computed:{
        time(){
            return new Date().getTime()
        }
    }
}
</script>

<style scoped>

</style>