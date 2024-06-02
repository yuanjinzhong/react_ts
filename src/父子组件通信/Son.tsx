import React from 'react';

interface SonProps {
    msg: string
    children?: React.ReactNode // 这玩意等于vue的插槽。。。其实不需要显示的添加children属性，因为React.FC这个接口定义里面包含了children属性
    changeFatherName(name: string): void //定义一个函数
}

const Son: React.FC<SonProps> = (x: SonProps) => {//x:SonProps 等价于{msg, children,changeFatherName} 解构
    const {msg, children,changeFatherName} = x;//对象解构，如果使用TS,则意味着强类型，则意味着最好不要使用解构
    console.log(msg, children,changeFatherName)
    return (
        <>
            <h2>我是儿子</h2>
            <h2>这是父亲传递给我的信息：{x.msg}</h2>
            <h3>这是父亲在我的标签中间传递的信息:{x.children}</h3>
            <h4>我可以通过这个button修改父亲的名字:
                <button onClick={() => {
                    x.changeFatherName("张三")
                }}>点击改父亲名字</button>
            </h4>
        </>
    );
};

//这里是一个类类型的用法{ new(): T; }表示调用一个构造函数，返回类型T的实例
function create<T>(c: { new(): T; } ): T {
    return new c();
}

export default Son;
