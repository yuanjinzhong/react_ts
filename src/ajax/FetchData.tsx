import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

const FetchData: React.FC = () => {

    const [content, setContent] = useState("");

    useEffect(() => {
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
        fetchData();
    },[])


    return (<>
       {JSON.stringify(content)}
    </>)
};

export default FetchData;