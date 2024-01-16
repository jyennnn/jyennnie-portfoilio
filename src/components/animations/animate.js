

const textAnimate = {
  offscreen: {
    y:100,
    opacity: 0,
  }, 
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", 
      bounce: 0.4,
      duration: 2.5
    }
  },
}


const arrowAnimate = {
  offscreen: {
    y:0,
    opacity: 0
  }, 
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1, 
      type: "spring", 
      bounce: 0.4,
      duration: 2,
    }
  }
}

const projectAnimate = {
  offscreen: {
    opacity: 0
  }, 
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1.2,
    }
  }
}

export { textAnimate, arrowAnimate, projectAnimate };