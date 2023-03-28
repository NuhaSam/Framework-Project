<template>
  <h1 id="main-heading">Book Tracker</h1>
  <div id="signin">
    <h3 id="signin-heading">Sign in</h3>
    <form>
      <div class="signin-input">
        <label class="signin-label">Email</label>
        <input type="email" class="signin-inputfield" id="email" v-model="email" required />
      </div>
      <div class="signin-input">
        <label class="signin-label">Password</label>
        <input type="password" class="signin-inputfield" id="password" v-model="password" required />
        <p id="forgot-password" @click="forgotPassword()">Forgot Password?</p>
      </div>
      <p v-if="errorPresentSignIn" id="error-handling-text">
        {{ this.errorMessageSignIn }}
      </p>
      <p v-if="resetEmailSent && !errorPresentSignIn" id="reset-email-success-text">
        {{ this.resetEmailMessage }}
      </p>
      <button type="button" @click="signIn()" id="signin-btn">Sign In</button>
      <p id="signup-text">
        Don't have an account yet?<span id="signup-link" @click="signUpPromptClicked()">Sign up.</span>
      </p>
    </form>

  </div>
</template>
  
<script>
import axios from 'axios';
export default {
  name: "SignIn",
  data() {
    return {
      email: '',
      password: '',
    }
  }
  , methods: {
    async signIn() {
      let result = await axios.post('http://localhost:8080/bookClasses ', {
        email:this.email,
    password: this.password

  });
  console.log(result);
  if(result.status == 200){
    alert('Done !!');
  }
      console.log('signing in **')
}
  }
};
</script>
  
<style scoped>
@import '../assets/css/signIn.css';
</style>
  