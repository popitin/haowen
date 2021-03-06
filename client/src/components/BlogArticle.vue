<template lang="html">
  <div class="article-layout" id="container">
    <div v-html="content" class="markdown-body" id="mdContainer"></div>
    <div class="bottom-bar" v-show="content">
      <div class="bottom-bar-tags">
        <div class="bottom-bar-tags-icon">
          <img src="./../assets/images/i-tag.png" alt="">
        </div>
        <div class="bottom-bar-tag-list">
          <a class="bottom-bar-tag" href="javascript:;" v-for="tag in article.tags">{{tag}}</a>
        </div>
        <div class="bottom-bar-likes">
          <div class="bottom-bar-likes-img">
            <img src="./../assets/images/i-light.png" alt="">
          </div>
          <a href="javascript:;" @click="likeThisArticle">{{article.likes}}次感谢</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HighLight from 'highlight.js'
import Markdown from 'markdown/lib/markdown.js'
export default {
  data () {
    return {
      article: {},
      content: '',
      loadSideNav: window.innerWidth > 500 || false,
      user: {},
      worker: {},
      where: {
        articleId: ''
      }
    }
  },
  computed: {},
  mounted () {
    this.$neoLoading.show()
    this.initPage()
  },
  methods: {
    initPage () {
      const title = parseInt(this.$route.params.id)
      this.where.articleId = title
      this.getArticle(title)
    },
    getArticle (title) {
      this.$http.get('/api/article/getArticle/' + title)
      .then(({ data }) => {
        this.$neoLoading.hide()
        this.article = data
        this.formatMarkdown(data.content)
        this.formatTags(data.tags)
        this.watchScroll()
      })
      .catch(({ data }) => {
        this.$warning(data.msg)
      })
    },
    watchScroll () {
      window.addEventListener('scroll', this.handleTitleMode)
    },
    handleTitleMode () {
      if (window.scrollY > 180) {
        this.checkCurrentMode('article').then(() => {
          this.$store.commit('setMode', {
            mode: 'article',
            articleTitle: this.article.title
          })
        })
      } else {
        this.checkCurrentMode('default').then(() => {
          this.$store.commit('setMode', {
            mode: 'default'
          })
        })
      }
    },
    checkCurrentMode (mode) {
      return new Promise((resolve, reject) => {
        if (this.$store.state.topbar.mode !== mode) {
          resolve()
        }
      })
    },
    likeThisArticle () {
      let param = {}
      param.id = this.where.articleId
      this.$http.post('/api/article/like', param)
      .then((res) => {
        this.getArticle(this.where.articleId)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    formatMarkdown (content) {
      this.content = Markdown.toHTML(content)
      this.$nextTick(() => {
        HighLight.configure({
          languages: ['html', 'javascript', 'Nginx', 'Bash', 'CSS', 'HTTP', 'JSON', 'Objective-C', 'SQL']
        })
        this.HighLightMarkdown()
      })
    },
    HighLightMarkdown () {
      let dom = document.querySelectorAll('pre')
      Array.from(dom).map((i) => {
        HighLight.highlightBlock(i)
      })
    },
    formatTags (tags) {
      tags = tags.split(',')
      this.article.tags = tags
    },
    back () {
      this.$router.go(-1)
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleTitleMode)
    this.$store.commit('setMode', {
      mode: 'default',
      articleTitle: ''
    })
  },
  components: {
    Markdown
  }
}
</script>

<style lang="css" scoped>
@import "/static/lib/github-markdown.css";
@import "/static/lib/highlight/styles/ocean.css";
.bottom-bar-likes-img img {
  width: 100%;
}
.bottom-bar-likes-img {
  position: relative;
  top: -5px;
  display: inline-block;
  line-height: 0;
  width: 30px;
}
.bottom-bar-likes a {
  position: relative;
  top: -10px;
}
.bottom-bar-likes {
  position: absolute;
  top: 0;
  right: 0;
}
.bottom-bar-tag {
  display: inline-block;
  padding: 3px 20px;
  background-color: #f2f2f2;
  font-size: 10px;
  color: #585858;
  margin: 0 10px ;
}
.bottom-bar-tag-list {
  margin-left: 30px;
}
.bottom-bar-tags-icon img {
  width: 100%;
  line-height: 0;
}
.bottom-bar-tags-icon {
  position: absolute;
  top: -2px;
  left: 0;
  line-height: 0;
  display: inline-block;
  width: 30px;
}
.bottom-bar-tags {
  position: relative;
  margin: 10px 0 30px;
}
.login-btn {
  color: #003c21;
  padding-right: 5px;
}
.login-container {
  margin: 10px 0;
}
.input-container {
  width: 100%;
  text-align: center;
}
.input-container textarea {
  width: 100%;
  margin: 10px 0 10px 0;
  font-size: 17px;
  padding: 10px;
  outline: none;
  border: none;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  border-radius: 5px;
}
.bottom-bar-comment-header:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: inline-block;
  width: 5px;
  background-color: #000;
  margin-right: 10px;
}
.bottom-bar-comment-header {
  position: relative;
  padding-left: 10px;
  font-size: 20px;
}
.bottom-bar {
  margin: 0 auto 100px;
  min-width: 200px;
  max-width: 900px;
  padding: 0 45px;
}
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 900px;
  margin: 0 auto 100px;
  padding: 45px;
}
@media screen and (max-width: 375px ) {
  .markdown-body {
    padding: 10px;
  }
}
</style>
