<template>
  <div class="c-user">

    <!-- Info -->
    <div class="c-user__inner" v-if="!blank">
      <div class="c-user__inner-left">
        <div class="c-user__img">
          <img class="c-user__img-pic"
               :src="user.avatar"
               :alt="user.first_name + ' ' +user.last_name">
        </div>
      </div>
      <div class="c-user__inner-right">
        {{user.first_name}} {{user.last_name}}
      </div>
    </div>
    <!-- /Info -->

    <!-- Placeholder -->
    <div class="c-user__blank" v-else>
      <div class="c-user__blank-circle"></div>
      <div class="c-user__blank-rect"></div>
      <div class="c-user__blank-rect"></div>
    </div>
    <!-- /Placeholder -->
  </div>
</template>

<script>
export default {
  props: {
    blank: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object,
      default: () => {
        return {
          avatar: '',
          first_name: '',
          last_name: '',
          id: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-user {
    //

    &__inner {
      display: flex;
      align-items: center;

      &-left {
        margin-right: 15px;
      }
    }

    &__img {
      width: 32px;
      height: 32px;
      background-color: $c_white;
      border-radius: 50%;
      overflow: hidden;

      &-pic {
        display: block;
        width: 100%;
      }
    }

    &__blank {
      display: flex;
      align-items: center;

      &-circle {
        width: 32px;
        height: 32px;
        background-color: rgba($c_white, 0.3);
        border-radius: 50%;
        margin-right: 15px;
      }

      &-rect {
        width: 64px;
        height: 16px;
        background-color: rgba($c_white, 0.3);
        border-radius: 15px;
        margin-right: 10px;
      }
    }
  }
</style>
