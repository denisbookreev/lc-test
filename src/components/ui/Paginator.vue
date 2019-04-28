<template>
  <div class="pag">

    <!-- UI -->
    <div class="pag__inner" v-if="!blank">
      <div class="pag__btn"
           :class="{_disabled: options.page === 1}"
           @click="prev">
        Previous
      </div>
      <div class="pag__pages">
        <div class="pag__pages-item"
             v-for="item in pages"
             @click="toPage(item)"
             :class="{_active: item === options.page}"
        >
          {{item}}
        </div>
      </div>
      <div class="pag__btn"
           :class="{_disabled: options.page === pages}"
           @click="next">
        Next
      </div>
    </div>
    <!-- /UI -->

    <!-- Placeholder -->
    <div class="pag__blank" v-else>
      <div class="pag__blank-rect"></div>
      <div class="pag__blank-circle"></div>
      <div class="pag__blank-circle"></div>
      <div class="pag__blank-circle"></div>
      <div class="pag__blank-rect"></div>
    </div>
    <!-- /Placeholder -->
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    blank: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    //* Count Pages
    pages () {
      return Math.ceil(this.options.total / this.options.perPage)
    }
  },

  methods: {
    //* Переход к предыдущей странице
    prev() {
      if (this.options.page === 1) return false
      this.toPage(this.options.page - 1)
    },

    //* Переход к следующей странице
    next() {
      if (this.options.page === this.pages) return false
      this.toPage(this.options.page + 1)
    },

    //* Переход на страницу
    toPage(page) {
      if (this.loading || this.options.page === page) return false
      this.$emit('to-page', page)
    }
  }
}
</script>

<style lang="scss" scoped>
  .pag {
    &__inner {
      display: flex;
      align-items: center;
    }
    &__pages {
      display: flex;

      &-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin: 0 3px;
        cursor: pointer;
        transition: background-color 0.2s ease, color 0.2s ease;

        &:hover, &._active {
          color: $c_black;
          background-color: $c_white;
        }

        &._active {
          cursor: default;
        }
      }
    }
    &__btn {
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }

      &._disabled {
        opacity: 0.5;
        cursor: default;
        text-decoration: none;
      }

      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        margin-left: 10px;
      }
    }

    &__blank {
      display: flex;
      align-items: center;

      &-circle {
        width: 24px;
        height: 24px;
        background-color: rgba($c_white, 0.3);
        border-radius: 50%;
        margin: 0 3px;
      }

      &-rect {
        height: 16px;
        background-color: rgba($c_white, 0.3);
        border-radius: 15px;

        &:first-child {
          width: 62px;
          margin-right: 10px;
        }

        &:last-child {
          width: 34px;
          margin-left: 10px;
        }
      }
    }
  }
</style>
