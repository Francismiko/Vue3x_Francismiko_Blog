<template>
  <div class="Container">
    <button @click="randomArray">随机试题</button>
    <div v-if="showBool">
      <exItems
        v-for="array in array_List"
        :key="array.id"
        :subject="array.subject"
        :points="array.points"
        :type="array.type"
        :date="array.date"
        :number="array.number"
        :content="array.content"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import exItems from "@/components/Content/Items/ex-Items.vue";
import getMethods from "@/utils/getMethods.ts";

const noRepeatRandomNumArray = getMethods.getNoRepeatRandomNumArray();

export default defineComponent({
  components: {
    exItems,
  },
  methods: {
    randomArray(): void {
      setTimeout(() => {
        // 将messages数据随机传入array_List
        if (JSON.stringify(this.array_List[0]) == "{}") {
          // stringify()方法判断是否为空对象
          this.array_List[0] =
            this.messages[noRepeatRandomNumArray(this.needNum, this.allNum)[0]];
          for (let i = 1; i < this.needNum; i++) {
            this.array_List.push(
              this.messages[
                noRepeatRandomNumArray(this.needNum, this.allNum)[i]
              ]
            );
          }
        } else {
          for (let i = 0; i < this.needNum; i++) {
            this.array_List[i] =
              this.messages[
                getMethods.getNoRepeatRandomNumArray(this.needNum, this.allNum)[
                  i
                ]
              ];
          }
        }
        console.log(this.array_List, "this.array_List");
        this.showBool = true;
      });
    },
  },
  data() {
    return {
      showBool: false,
      needNum: 4, //需要几个随机数
      allNum: 9, //随机数范围从 0 到 allNum - 1随机选取
      array_List: [
        {
          id: 0,
          subject: "",
          points: "",
          type: "",
          date: "",
          number: "",
          content: "",
        },
      ],
      messages: [
        {
          id: 1,
          subject: "变态",
          points: "焦虑障碍",
          type: "简答题",
          date: "2011",
          number: "5",
          content: "创伤后应激障碍的临床表现",
        },
        {
          id: 2,
          subject: "变态",
          points: "儿童心理障碍",
          type: "简答题",
          date: "2011",
          number: "1",
          content: "多动症的主要症状",
        },
        {
          id: 3,
          subject: "测量",
          points: "信度",
          type: "名词解释",
          date: "2011",
          number: "2",
          content: "null",
        },
        {
          id: 4,
          subject: "发心",
          points: "心理发展阶段",
          type: "简答题",
          date: "2011",
          number: "4",
          content: "皮亚杰",
        },
        {
          id: 5,
          subject: "发心",
          points: "研究方法",
          type: "简答题",
          date: "2011",
          number: "6",
          content: "横断设计",
        },
        {
          id: 6,
          subject: "测量",
          points: "信度",
          type: "名词解释",
          date: "2011",
          number: "2",
          content: "null",
        },
        {
          id: 7,
          subject: "发心",
          points: "关键期",
          type: "名词解释",
          date: "2011",
          number: "17",
          content: "null",
        },
        {
          id: 8,
          subject: "管理",
          points: "经纪人假设",
          type: "简答题",
          date: "2011",
          number: "3",
          content: "null",
        },
        {
          id: 9,
          subject: "管理",
          points: "领导影响力",
          type: "论述题",
          date: "2011",
          number: "2",
          content: "构成因素",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.Container {
  display: block;
  overflow: hidden;
  width: 800px;
  min-height: 100px;
  margin: 30px;
  border-radius: 8px;
  background-color: rgba(235, 254, 255, 0.351);
  transition: 1s;

  button {
    display: block;
    width: 150px;
    height: 60px;
    border-radius: 5px;
    margin: 20px auto;
    color: rgba(255, 255, 255, 0.782);
    border: 3px solid aquamarine;
    background-color: rgba(24, 16, 38, 0.705);
    transition: 0.4s;
    font-size: 20px;

    &:hover {
      border: 3px solid aquamarine;
      box-shadow: 0px 0px 100px 10px aquamarine;
      background-color: rgba(50, 125, 100, 0.656);
      color: rgb(255, 255, 255);
      transition: 0.4s;
      transform: scale(1.1);
    }
  }
}
</style>