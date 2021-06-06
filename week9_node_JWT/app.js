const HelloVueApp = {
  data() {
    return {
      message: 'bob cat tom rsgr gr',
      age : 70,
      counter:0,
      firstname :'bob',
      lastname : 'cat'
    }
  },
  mounted(){
    setInterval(() => {
      this.counter++
    },1000)
  },
  methods : {
    getFullName:function(){
      return this.firstname +" "+this.lastname
    },
    getName : function(first,last){
      return first +" "+last
    },
    upperCase : function(string){
      return string.toUpperCase();
    },
    firstUpperCase : function(string){
      
     each = string.split(' ').map(result => result.charAt(0).toUpperCase()+result.slice(1))
     return each.join(' ')
    }
  }
}

Vue.createApp(HelloVueApp).mount('#hello-vue')