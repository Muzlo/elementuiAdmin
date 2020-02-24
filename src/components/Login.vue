<template>
  <div class="container-wrap">
    <el-form class="login" :rules="rules" label-position="right" ref="loginForm" :model="form" label-width="82px">

      <h3 class="title">用户登录系统</h3>

      <el-form-item label="用户名称" prop="userName">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>

      <el-form-item label="用户密码" prop="userPassword">
        <el-input type="password" v-model="form.userPassword"></el-input>
      </el-form-item>

      <el-form-item label="记住密码">
        <el-switch v-model="form.remember"></el-switch>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="onSubmit('loginForm')">立即登录</el-button>
        <el-button @click="resetForm('loginForm')">重置表单</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name:"login",
    data() {
      return {
        form: {
          userName: '',
          userPassword: '',
          remember: false
        },
        rules:{
          userName: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          userPassword: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    created(){
      let UserLoginInfo=window.localStorage.getItem("UserLoginInfo");
      if(UserLoginInfo){
        UserLoginInfo=JSON.parse(UserLoginInfo);
        if(UserLoginInfo.remember){
          this.form=JSON.parse(window.localStorage.getItem("UserLoginInfo"))
        }
      }

    },
    methods: {

      onSubmit(form) {
        let UserLoginInfo=JSON.stringify(this.form);
        this.$refs[form].validate((valid) => {
          if (valid) {
           
            //ajax...
            if(this.form.remember){
              window.localStorage.setItem("UserLoginInfo",UserLoginInfo);
              localStorage.setItem('token', 'i_am_token');
              localStorage.setItem('userName', '小明')
              this.$router.push({ path: this.redirect || '/' })
            }else{
              let UserLoginInfo=window.localStorage.getItem("UserLoginInfo");
              if(UserLoginInfo){
                window.localStorage.removeItem("UserLoginInfo");
              }
            }
          } else {
            return false;
          }
        });
      },
      resetForm(form){
        this.form={
          userName: '',
          userPassword: '',
          remember: false
        }
        window.localStorage.removeItem("UserLoginInfo");
      }
    }
  }
</script>

<style scoped lang="scss">
  .container-wrap{
    height: 100%;
    background:#409EFF;
  }
  .login{
    border-radius:4px;
    box-shadow: 0px 0px 20px #eee;
    padding:30px 30px 20px 20px;
    background: #fff;
    width:350px;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .title{
      font-size: 20px;
      color: #333;
      text-align:center;
      margin-bottom: 20px;
    }
  }
</style>
