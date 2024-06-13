let _localStorage = {
    setItem() {},
    getItem() {},
    removeItem() {}
  }

  if (process.browser) {
    _localStorage = window.localStorage
  }

  const storage = (prefix) => {
    const get = (key) => (_localStorage.getItem(`${key}`))
    const set = (key, value) => _localStorage.setItem(`${key}`,(value))
    const remove = (key) => _localStorage.removeItem(`${key}`)

    return { get, set,remove }
  }

  export default storage
