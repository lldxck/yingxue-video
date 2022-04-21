<template>
  <div class="comment-item">
    <img src="~assets/images/defaultAvatar.png" alt="" />
    <div class="comment-main">
      <div class="info">
        <div class="name-time">
          <p class="name">用户名称</p>
          <p class="time">2022-04-15 15:07</p>
        </div>
        <div class="likes">22 <van-icon name="good-job-o" /></div>
      </div>
      <div class="content">
        评论内容显示评论内容显示评论内容显示评论内容显示评论内容显示
      </div>
      <div class="btn-operation">
        <van-button round type="info" class="replay-btn"
          >回复<van-icon name="arrow"
        /></van-button>
        <van-button round type="info" class="delete-btn"
          ><van-icon name="delete-o" />删除</van-button
        >
      </div>
      <div class="child-comment" v-if="true">
        <div class="child-comment-item">
          <span class="name">用户名称：</span>
          <span>评论内容评论内容评论内容评论内容评论内容评论内容评论内容</span>
        </div>
        <div class="child-comment-item">
          <span class="name">用户名称：</span>
          <span>评论内容评论内容评论内容评论内容评论内容评论内容评论内容</span>
        </div>
        <div class="child-comment-item">
          <span class="name">用户名称：</span>
          <span>评论内容评论内容评论内容评论内容评论内容评论内容评论内容</span>
        </div>
        <van-button round type="info" class="view-all" @click="viewAll"
          >共16条回复<van-icon name="arrow"
        /></van-button>
      </div>
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :safe-area-inset-bottom="true"
      :style="{ height: height + 'px' }"
      :overlay="false"
      class="popup-child"
    >
      <div class="close">
        <div class="title">评论详情</div>
        <van-icon name="cross" class="icon" @click="closePopup" />
      </div>
      <div class="comment-item item-border">
        <img src="~assets/images/defaultAvatar.png" alt="" />
        <div class="comment-main">
          <div class="info">
            <div class="name-time">
              <p class="name">用户名称</p>
              <p class="time">2022-04-15 15:07</p>
            </div>
            <div class="likes">22 <van-icon name="good-job-o" /></div>
          </div>
          <div class="content">
            评论内容显示评论内容显示评论内容显示评论内容显示评论内容显示
          </div>
          <div class="del-operation">
            <van-button round type="info" class="delete-btn"
              ><van-icon name="delete-o" />删除</van-button
            >
          </div>
        </div>
      </div>
      <div class="child-comments">
        <div class="count">相关回复共16条</div>
        <div class="comment-item">
          <img src="~assets/images/defaultAvatar.png" alt="" />
          <div class="comment-main">
            <div class="info">
              <div class="name-time">
                <p class="name">用户名称</p>
                <p class="time">2022-04-15 15:07</p>
              </div>
              <div class="likes">22 <van-icon name="good-job-o" /></div>
            </div>
            <div class="content">
              <span>回复</span>
              <span class="replay-name">@小傻子</span>:
              评论内容显示评论内容显示评论内容显示评论内容显示评论内容显示
            </div>
            <div class="btn-operation">
              <van-button round type="info" class="replay-btn"
                >回复<van-icon name="arrow"
              /></van-button>
              <van-button round type="info" class="delete-btn"
                ><van-icon name="delete-o" />删除</van-button
              >
            </div>
          </div>
        </div>
        <div class="comment-item">
          <img src="~assets/images/defaultAvatar.png" alt="" />
          <div class="comment-main">
            <div class="info">
              <div class="name-time">
                <p class="name">用户名称</p>
                <p class="time">2022-04-15 15:07</p>
              </div>
              <div class="likes">22 <van-icon name="good-job-o" /></div>
            </div>
            <div class="content">
              <span>回复</span>
              <span class="replay-name">@小傻子</span>:
              评论内容显示评论内容显示评论内容显示评论内容显示评论内容显示
            </div>
            <div class="btn-operation">
              <van-button round type="info" class="replay-btn"
                >回复<van-icon name="arrow"
              /></van-button>
              <van-button round type="info" class="delete-btn"
                ><van-icon name="delete-o" />删除</van-button
              >
            </div>
          </div>
        </div>
        <div class="comment-item">
          <img src="~assets/images/defaultAvatar.png" alt="" />
          <div class="comment-main">
            <div class="info">
              <div class="name-time">
                <p class="name">用户名称</p>
                <p class="time">2022-04-15 15:07</p>
              </div>
              <div class="likes">22 <van-icon name="good-job-o" /></div>
            </div>
            <div class="content">
              <span>回复</span>
              <span class="replay-name">@小傻子</span>:
              评论内容显示评论内容显示评论内容显示评论内容显示评论内容显示
            </div>
            <div class="btn-operation">
              <van-button round type="info" class="replay-btn"
                >回复<van-icon name="arrow"
              /></van-button>
              <van-button round type="info" class="delete-btn"
                ><van-icon name="delete-o" />删除</van-button
              >
            </div>
          </div>
        </div>
        <div class="comment-item">
          <img src="~assets/images/defaultAvatar.png" alt="" />
          <div class="comment-main">
            <div class="info">
              <div class="name-time">
                <p class="name">用户名称</p>
                <p class="time">2022-04-15 15:07</p>
              </div>
              <div class="likes">22 <van-icon name="good-job-o" /></div>
            </div>
            <div class="content">
              <span>回复</span>
              <span class="replay-name">@小傻子</span>:
              评论内容显示评论内容显示评论内容显示评论内容显示评论内容显示
            </div>
            <div class="btn-operation">
              <van-button round type="info" class="replay-btn"
                >回复<van-icon name="arrow"
              /></van-button>
              <van-button round type="info" class="delete-btn"
                ><van-icon name="delete-o" />删除</van-button
              >
            </div>
          </div>
        </div>
      </div>
    </van-popup>
    <div class="comment-bar">
      <van-field
        v-model="commentText"
        rows="1"
        autosize
        type="textarea"
        :placeholder="placeholder"
      >
        <template #button>
          <van-button size="small" color="#00b3ff">发布</van-button>
        </template></van-field
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "commentItem",
  data() {
    return {
      show: false,
      placeholder: "请输入评论内容",
      commentText: "",
    };
  },
  computed: {
    height() {
      return window.innerHeight - (window.innerWidth * 9) / 16;
    },
  },
  methods: {
    viewAll() {
      this.show = true;
    },
    closePopup() {
      this.show = false;
    },
  },
};
</script>
