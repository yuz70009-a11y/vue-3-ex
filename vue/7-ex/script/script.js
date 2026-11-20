new Vue({
  el: '#app',
  data() {
    return {
      members: [],  /* 登録した会員の配列 */
      name: ''      /* 入力中の会員名 */
    };
  },
  methods: {
    inputName(e) {
      /* 入力された名前を保存 */
      this.name = e.target.value;
    },
    addMember() {
      /* 空白だけの名前は登録しない */
      if (!this.name.trim()) return;

      const member = {
        id: Math.random(),
        name: this.name.trim()
      };
      this.members.push(member);
      this.resetName();
    },
    resetName() {
      /* 登録後、入力欄を空にする */
      this.name = '';
    }
  }
});
