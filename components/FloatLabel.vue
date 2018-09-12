<template>
  <div class="vfl-has-label">
    <label class="vfl-label" :class="classObject" :for="inputId">
      {{ floatLabel }}
    </label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'float-label',
  props: {
    on: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    dispatch: {
      type: Boolean,
      default: true
    },
    for: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      formEl: undefined,
      labelEl: undefined,
      isFocused: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      // nextTick to support inputs nested in other vue components
      this.formEl = this.$el.querySelector('input, textarea, select')
      if (this.formEl) {
        this.formEl.addEventListener('input', this.updateIsFocused)
        this.formEl.addEventListener('blur', this.updateIsFocused)
        this.formEl.addEventListener('focus', this.updateIsFocused)

        if (!this.for) {
          this.labelEl = this.$el.querySelector('label')
          this.labelEl.addEventListener('click', this.focusFormEl)
        }

        this.dispatchInput()
      }
    })
  },
  beforeDestroy () {
    if (this.formEl) {
      this.formEl.removeEventListener('input', this.updateIsFocused)
      this.formEl.removeEventListener('blur', this.updateIsFocused)
      this.formEl.removeEventListener('focus', this.updateIsFocused)
    }
  },
  methods: {
    dispatchInput () {
      if (this.dispatch) {
        const event = document.createEvent('HTMLEvents')
        event.initEvent('input', true, false)
        this.formEl.dispatchEvent(event)
      }
    },
    focusFormEl () {
      this.formEl.focus()
    },
    updateIsFocused (e) {
      this.isFocused = e.target === document.activeElement
    }
  },
  computed: {
    inputId () {
      return this.for
    },
    classObject () {
      return {
        'vfl-label-on-input': this.on || this.fixed,
        'vfl-label-on-focus': this.isFocused
      }
    },
    formElType () {
      return this.formEl ? this.formEl.tagName.toLowerCase() : ''
    },
    floatLabel () {
      if (this.label) return this.label

      switch (this.formElType) {
        case 'input':
        case 'textarea':
          return this.formEl.placeholder
        case 'select':
          return this.formEl.querySelector('option[disabled][selected]').innerHTML
        default:
          return ''
      }
    }
  }
}
</script>
