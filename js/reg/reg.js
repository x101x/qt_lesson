// 一个字符
// let phoneReg = /^1[3-9][0-9]{9}$/;
//  console.log(     

//   phoneReg.test("13234565789")

//  );

// let phoneReg = /(1[3-9][0-9])[0-9]{8}/;
// let str = "我的号码是13798678888，我16545657899"
// console.log(str.match(phoneReg))
// 得到手机号 判断服务商
// console.log(phoneReg.exec(str))

// 111111131@qq.com 邮箱服务商
let emailReg = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/;

console.log(emailReg.test("1564@qq.com"))