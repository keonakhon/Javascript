<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="app">
      <button @click="counter++">+1</button> <!-- // "@" is the shorthand/shortcut of v-on: -->
      <button @click="counter--">-1</button>
      <button @click="secondCounter++">computed +1</button>
      <a :href="link">Google.com</a> <!-- // ":" is the shorthand/shortcut of v-bind: -->
      <p>methods: {{ counter }} || {{ output() }}</p>
      <p>computed: {{ secondCounter }} || {{ result }}</p>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          counter: 0,
          secondCounter: 0,
          link: 'https://www.google.com'
        },
        methods: {
          output: function() {
            console.log('methods');
            return this.counter > 5 ? 'bigger 5' : 'smaller 5';
          }
        },
        computed: {
          result: function() {
            console.log('computed');
            return this.secondCounter > 5 ? 'bigger 5' : 'smaller 5';
          }
        },
        watch : {
          counter: function() {
            let vm = this;
            setTimeout(function() {
            	vm.counter = 0;
            }, 2000);
          }
        }
      });
    </script>
  </body>
</html>
