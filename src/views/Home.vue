<template>
    <div class="home-container">
        <div class="home-content">
            首页
            <input type="text">
            {{this.$store.state.login.str}}
        </div>
    </div>
</template>

<script>

export default {
    name: 'home',
    created(){

        
        
    }
}
</script>

<style scoped>
.home-container {
    padding: 10px;
    padding-top: 5px;
}
.home-content {
    padding: 10px;
    border-radius: 5px;
    background: #fff;
}
</style>