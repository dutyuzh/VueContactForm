# VueContactForm
email js integration with vuejs - I couldn't find any good examples of integrating emailjs with view so I'm creating my own

## Sign up for an account on EmailJs
http://www.emailjs.com/
on the dashboard after sign up, head on over to the installation tab and you'll see your script there

## Installing the EmailJS javascript library
`npm install emailjs-com --save`

## Adding EmailJs Browser script
To start using EmailJS paste that following code snippet before in the root of your directory `index.html` file
It would look like:
```javascript
<script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.2.4/email.min.js"></script>
<script type="text/javascript">
   (function(){
      emailjs.init("user_youraccountid");
   })();
</script>

```
## Declare global for emailjs in .eslintrc.js
```javascript 
module.exports = {
  globals: {
    emailjs: true // or whatever the global variable is named
  }
};
```
