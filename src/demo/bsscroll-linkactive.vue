<template lang="html">
    <div class="container">
      <header class="header-bar">
        <span class="header-title">我的</span>
      </header>
      <div class="container-group">
          <div class="content">
              <div class="left" ref="left">
                <ul>
                  <li v-for="(item,index) in left" :class="{current:currentIndex==index}" @click="selectItem(index,$event)">
                    <span class="left-item">{{item}}</span>
                  </li>
                </ul>
              </div>
              <div class="right" ref="right">
                <ul>
                  <li v-for="(item,index) in right" class="right-item right-item-hook">
                    <h2>{{item.name}}</h2>
                    <ul>
                      <li v-for="num in item.content">
                      <div>
                        {{item.name+num}}
                      </div>
                    </li>
                    </ul>
                  </li>
                </ul>
              </div>
          </div>


      </div>
      <!-- <a href="javascript:;" @click="pageTo('/')">跳转Home</a> -->
    </div>
</template>

<script>
export default {
  name: 'MenuMine',
  data() {
    return {
      listHeight: [],
      scrollY: 0,
      clickEvent: false,
      left: ['数学', '语文', '英语', '物理', '历史', '政治'],
      right: [{
          name: '数学',
          content: ['初一数学', '初二数学', '初三数学', '高一数学', '高二数学']
        },
        {
          name: '语文',
          content: ['初一语文', '初二语文', '初三语文', '高一语文', '高二语文']
        },
        {
          name: '英语',
          content: ['初一英语', '初二英语', '初三英语', '高一英语', '高二英语']
        },
        {
          name: '物理',
          content: ['初一物理', '初二物理', '初三物理', '高一物理', '高二物理']
        }
      ]
    }
  },
  methods: {
    _initScroll() {
      this.lefts = new this.$BScroll(this.$refs.left, {
        click: true
      })
      this.rights = new this.$BScroll(this.$refs.right, {
        probeType: 3
      })
      this.rights.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _getHeight() {
      let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i]
        height += item.clientHeight;
        this.listHeight.push(height)
      }
    },
    selectItem(index, event) {
      this.clickEvent = true;
      if (!event._constructed) {
        return
      } else {
        let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
        let el = rightItems[index]
        console.log(rightItems)
        this.rights.scrollToElement(el, 400)
      }
    }

  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll()
      this._getHeight()
    })
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          if (this.clickEvent) {
            return i + 1
          } else {
            return i
          }
        }
      }
      return 0
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    background: #eee;
}
.left {
    flex-grow: 0 0 80px;
    width: 80px;
    background: #f3f3f3;
    li {
        width: 100%;
        height: 100%;

    }
}
.current {
    background: red;
}
.left-item {
    display: block;
    width: 100%;
    height: 100px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid yellow;
}
.right {
    flex: 1;
}
.right-item li {
    width: 100%;
    height: 100%;
    line-height: 100px;
    text-align: center;
    border-bottom: 1px solid yellow;

}
</style>
