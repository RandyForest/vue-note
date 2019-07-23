<style>
table {
  border-style: solid;
}

tr {
  min-height: 100px;
}

th,
td {
  min-width: 100px;
  min-height: 100px;
}
</style>

<template>
  <table>
    <template v-if="list!=null">
      <tr v-if="hasTh">
        <th v-for="(arr,key) in list[0]" :key="key">{{key}}</th>
      </tr>
      <tr v-for="(arr,key) in list" :key="key">
        <td v-for="(item,index) in arr" :key="index">{{item}}</td>
      </tr>
    </template>
    <template v-if="list==null">
      <tr v-for="(item, index) in rowList" :key="index">
        <td v-for="(item, index) in colList" :key="index">{{item}}</td>
      </tr>
    </template>
  </table>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    list: {
      type: Array
    },
    hasTh: {
      type: Boolean,
      default: true
    },
    row: {
      type: Number,
      default: 2
    },
    col: {
      type: Number,
      default: 2
    }
  },
  computed: {
    rowNum: function() {
      if (this.row < 0) {
        return 0;
      }

      var rowNum = parseInt(this.row);
      return rowNum;
    },
    rowList: function() {
      var list = [];
      for (let i = 0; i < this.rowNum; i++) {
        list[i] = null;
      }
      return list;
    },
    colNum: function() {
      if (this.col < 0) {
        return 0;
      }

      let colNum = parseInt(this.col);
      return colNum;
    },
    colList: function() {
      let list = [];
      for (let i = 0; i < this.colNum; i++) {
        list[i] = null;
      }
      return list;
    }
  }
};


</script>
