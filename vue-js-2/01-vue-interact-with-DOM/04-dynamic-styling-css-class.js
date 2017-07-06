<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <style>
  .demo {
    width: 100px;
    height: 100px;
    background-color: gray;
    display: inline-block;
    margin: 10px;
  }
  .blue { background-color: blue; }
  .red { background-color: red; }
  </style>
  <body>
    <div id="app">
      <div class="demo" @click="attachRed = !attachRed" :class="{red: attachRed}"></div>
      <div class="demo"></div>
      <div class="demo"></div>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          attachRed: false
        }
      });
    </script>
  </body>
</html>