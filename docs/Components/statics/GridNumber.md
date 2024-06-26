<script setup>
  import GridNumber from './Components/GridNumber/demo/index.vue'
</script>

# GridNumber

<ContainerBox title="介绍" noGap>
<template #desc>

利用了`grid`布局的`gridArea`子属性，实现数字模板布局

推荐使用 [Grid 布局生成器](https://cssgrid-generator.netlify.app) 辅助布局，确定每个盒子的占用格数
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
数字模板：虽然可读性不强，但它直接修改的子元素属性，能触发子元素动画

字母模板：虽然看着更直观、可读性强，但字母模板属于父元素属性，修改布局并不会触发子元素的响应式动画

推荐：当布局定死不会改变或不需要动画时，可以考虑使用[字母模板](/Components/statics/GridLetter.html)

试着缩小浏览器宽度查看效果
</template>

<div class="demo-box">
<GridNumber />
</div>

  <CodeBox>
  <template #codes>

  ```vue
  <script setup lang="ts">
  import { nextTick, onBeforeMount, onMounted, ref } from "vue";

  import LibGridNumber from "../index.vue";

  /** 用于存储当前的布局 */
  const box = ref<number[][]>([]);

  interface Layout {
    0: number[][];
    500: number[][];
    800: number[][];
    1200: number[][];
    [propsName: string]: number[][];
  }

  /* 布局列表 */
  const boxs: Layout = {
    0: [
      [1, 4, 1, 1],
      [1, 2, 2, 1],
      [3, 2, 2, 1],
      [1, 2, 3, 1],
      [3, 2, 3, 1],
      [1, 4, 4, 1],
      [1, 4, 5, 1],
    ],
    500: [
      /**
       * 每个数组代表一个盒子，每个数组内的数字代表占用
       * 数组元素第1个和第2个，代表X轴第几格开始，占用了几格
       * 数组元素第3个和第4个，代表Y轴第几格开始，占用了几格
       */
      [1, 1, 1, 2],
      [1, 2, 3, 1],
      [1, 3, 4, 1],
      [2, 2, 1, 1],
      [3, 1, 3, 1],
      [3, 1, 2, 1],
      [2, 1, 2, 1],
    ],
    800: [
      [1, 1, 1, 2],
      [2, 1, 1, 3],
      [1, 1, 3, 1],
      [1, 3, 4, 1],
      [4, 1, 2, 3],
      [3, 2, 1, 1],
      [3, 1, 2, 2],
    ],
    1200: [
      [1, 2, 1, 1],
      [3, 1, 1, 2],
      [4, 1, 1, 1],
      [1, 1, 2, 2],
      [2, 1, 2, 1],
      [2, 3, 3, 1],
      [4, 1, 2, 1],
    ],
  };

  const changeArea = () => {
    //循环布局数组的 key，当大于 key 则使用该 key 布局
    Object.keys(boxs).forEach((item) => {
      if (document.documentElement.clientWidth > Number(item)) {
        box.value = boxs[item];
      }
    });
  };

  onMounted(() => {
    nextTick(() => {
      changeArea();
    });
    window.addEventListener("resize", changeArea);
  });

  onBeforeMount(() => {
    window.removeEventListener("resize", changeArea);
  });
  </script>

  <template>
    <div class="grid">
      <transition-group>
        <!--
        x、countX、y、countY是固定写法，看得懂可以自行修改，但推荐当前写法
      -->
        <LibGridNumber
          v-for="(item, index) in box"
          :key="index"
          class="lib-grid-number"
          :x="item[0]"
          :count-x="item[1]"
          :y="item[2]"
          :count-y="item[3]"
        >
          {{ index + 1 }}
        </LibGridNumber>
      </transition-group>
    </div>
  </template>

  <style scoped>
  .grid {
    display: grid;
    width: 100%;
    grid-gap: 5px;
  }

  .lib-grid-number {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    font-size: 6vw;
    transition: all 1s;
  }
  </style>
  ```
  </template>
  </CodeBox>
</ContainerBox>

## 组件源码

<ContainerBox>
  <CodeBox>
  <template #codes>

  ```vue
  <script setup lang="ts">
  import { computed } from "vue";

  interface Props {
    /** 从左到右，从第几个格子开始？ */
    x?: number;
    /** 从上到下，从第几个格子开始？ */
    y?: number;
    /** 从左到右占用多少格？ */
    countX?: number;
    /** 从上到下占用多少格？ */
    countY?: number;
  }
  const props = withDefaults(defineProps<Props>(), {
    x: 0,
    y: 0,
    countX: 0,
    countY: 0,
  });

  const gridArea = computed(() => {
    return `${props.y} / ${props.x} / ${props.y + props.countY} / ${props.x + props.countX}`;
  });
  </script>

  <template>
    <div class="lib-grid-number" :style="{ gridArea: gridArea }">
      <slot></slot>
    </div>
  </template>

  <style scoped>
  .lib-grid-number {
    display: grid;
    width: 100%;
    height: 100%;
  }
  </style>
  ```
  </template>
  </CodeBox>
</ContainerBox>