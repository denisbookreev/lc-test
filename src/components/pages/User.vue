<template>
  <DefaultLayout>
    <div class="user">
      <div class="user__inner"
           v-if="!loading">
        <div class="user__img">
          <img class="user__img-pic"
               :src="user.avatar">
        </div>
        <div class="user__name">{{user.first_name}} {{user.last_name}}</div>

        <div class="user__back">
          <router-link :to="{name: 'users'}"
                       class="user__back-link">
            Back to the list
          </router-link>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import {mapActions} from 'vuex'
import DefaultLayout from '@Layouts/Default.vue'

export default {
  props: ['id'],
  components: {
    DefaultLayout
  },

  metaInfo() {
    let user = this.user
    return {
      title: user ? `${user.first_name} ${user.last_name}` : 'Пользователь'
    }
  },

  data () {
    return {
      user: null,
      loading: true
    }
  },

  methods: {
    ...mapActions(['GET_USER']),

    //* Получение пользователя
    async getUser() {
      let user = await this.GET_USER(this.id)
      this.user = user.data.data
      this.loading = false
    }
  },

  created () {
    this.getUser()
  }
}
</script>

<style lang="scss" scoped>
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__img {
      width: 128px;
      height: 128px;
      background-color: $c_white;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 20px;

      &-pic {
        display: block;
        width: 100%;
      }
    }

    &__name {
      font-size: 24px;
    }

    &__back {
      text-align: center;
      margin-top: 30px;

      &-link {
        text-decoration: underline;
      }
    }
  }
</style>
