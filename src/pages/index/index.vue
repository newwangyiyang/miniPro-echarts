<template>
  <div class="container">
    <ec-canvas class="canvas" id="mychart-dom-gauge" canvas-id="mychart-gauge" :ec="ec"></ec-canvas>  
  </div>
</template>

<script>
let options = {
  backgroundColor: "#c7ecee",
  animationDuration: 3000,
  color: ["#37A2DA", "#32C5E9", "#67E0E3"],
  series: [
    {
      name: "今日步数",
      type: "gauge",
      radius: "80%",
      splitNumber: 10,
      detail: {
        formatter: "{value}%"
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 30,
          shadowBlur: 0,
          color: [[0.3, "#67e0e3"], [0.7, "#37a2da"], [1, "#fd666d"]]
        }
      },
      data: [
        {
          value: 20,
          name: "今日步数"
        }
      ]
    }
  ]
};

export default {
  data() {
    return {
      ec: {
        // 传 options
        options: options
      }
    };
  }
};
</script>

<style lang="less">
ec-canvas {
  width: 380px;
  height: 380px;
}
.container {
  padding: 0;
  height: 380px;
  background-color: #c7ecee;
  position: relative;
  .con_son {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    p {
      text-align: center;
    }
  }
}
</style>
