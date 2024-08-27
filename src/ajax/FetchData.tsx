import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

const FetchData: React.FC = () => {

    const [content, setContent] = useState("");

    // ajax请求应该放在useEffect里面执行，这个含义是组建渲染的副作用， 将组建渲染和副作用数据获取分开了
    useEffect(() => {
        // 定义方法
        const fetchData = async () => {
            const result: AxiosResponse<any> = await axios.post("/api/user/order/confirm/order/aggregate", {
                "app": "enterprise",
                "_su": "9a92d6e458344761bb32a0e41f43d2e0",
                "role": 1,
                "os": "android",
                "user_id": 4669,
                "bizcode": "user-biz-cn",
                "hit_the_gray": 0,
                "order_vehicle_id": 5,
                "is_quotation_mode": 0,
                "version": "6.5.00",
                "city_id": 1002,
                "revision": "6500"
            },);
            setContent(result.data);
            console.log(content);
        };
        fetchData();// 执行方法
    },[])// 这个是依赖数组，空依赖数组，表示只在组件挂载和卸载时执行， 依赖数组还可以写成[content],标识content值发生变化时，useEffect 会重新执行


    return (<>
       {JSON.stringify(content)}
    </>)
};

export default FetchData;