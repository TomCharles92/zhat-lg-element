module.exports = {
  "testMatch": ["**/__tests__/**/*.[jt]s?(x)"],
  "moduleFileExtensions": [
    "js",
    "json",
    // 告诉 Jest 要处理 .vue
    "vue"
  ],
  "transform": {
    // vue-test 处理 .vue
    ".*\\.(vue)$": "vue-jest",
    // babel-jest 处理 js
    ".*\\.(js)$": "babel-jest"
  }
}