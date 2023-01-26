<template>
  <div class="countdown">
    <div class="countdown-container">
      <div class="number days"><span class="countdown-value days-bottom">{{days}}</span></div>
      <div class="number hours"><span class="countdown-value hours-bottom">{{hours}}</span></div>
      <div class="number minutes"><span class="countdown-value minutes-bottom">{{minutes}}</span></div>
      <div class="number seconds"><span class="countdown-value seconds-bottom">{{seconds}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: {
    date: {
      required: true,
      default: "2022-01-01T00:00:00.000000Z",
    }
  },
  data () {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
      isShow: null
    }
  },
  methods: {
    updateRemaining (distance) {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
    },

    tick () {
      const currentTime = new Date()
      const distance = Math.max(currentTime - this.getDate(), 0)
      this.updateRemaining(distance)

      if (distance < 0) {
        clearInterval(this.timer)
        this.isShow = true
      }
    },

    getDate(){
      return new Date(this.date);
    }
  },

  mounted () {
    this.tick()
    this.timer = setInterval(this.tick.bind(this), 1000)
  },

  destroy () {
    clearInterval(this.timer)
  },

}
</script>
