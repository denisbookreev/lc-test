<template>
  <DefaultLayout :title="title">
    <div class="users">

      <div class="users__inner"
           :class="{_loading: loading}"
           v-if="!virgin">

        <!-- User Item -->
        <router-link class="users__item"
             v-for="user in users"
             :key="user.id"
             :to="{name: 'user', params: {id: user.id}}"
        >
          <UserCard :user="user"></UserCard>
        </router-link>
        <!-- /User Item -->

        <!-- Paginator -->
        <div class="users__paginator">
          <Paginator :options="pag"
                     @to-page="toPage"
          />
        </div>
        <!-- /Paginator -->
      </div>

      <!-- Placeholder -->
      <div class="users__placeholder" v-else>
        <div class="users__item"
             v-for="i in 5">
          <UserCard :blank="true"></UserCard>
        </div>
        <div class="users__paginator">
          <Paginator :blank="true"/>
        </div>
      </div>
      <!-- /Placeholder -->

    </div>
  </DefaultLayout>
</template>

<script>
import { mapActions } from 'vuex'
import DefaultLayout from '@Layouts/Default.vue'
import UserCard from '@UI/UserCard.vue'
import Paginator from '@UI/Paginator.vue'

export default {
  components: {
    DefaultLayout,
    UserCard,
    Paginator
  },

  metaInfo: {
    title: 'Users List'
  },

  data () {
    return {
      title: 'Users List',
      pag: {
        page: 1,
        perPage: 5,
        total: null
      },
      virgin: true, // флаг первичной загрузки
      loading: true
    }
  },

  computed: {
    users () {
      return this.$store.state.users || []
    }
  },

  methods: {
    ...mapActions(['GET_USERS']),

    //* Получение списка пользователей
    async getUsers (page) {
      this.loading = true

      let res = await this.GET_USERS({
        page: page || this.pag.page,
        per_page: this.pag.perPage
      })

      this.pag.total = res.data.total
      this.pag.page = res.data.page
      this.loading = false
      this.virgin = false
    },

    //* Переход на страницу
    toPage (page) {
      this.getUsers(page)
    }
  },

  created () {
    this.getUsers()
  }
}
</script>

<style lang="scss" scoped>
  .users {
    &__inner {
      transition: 0.2s ease;

      &._loading {
        opacity: 0.5;
      }
    }

    &__item {
      display: block;
      cursor: pointer;

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }

    &__paginator {
      margin-top: 30px;
    }
  }
</style>
