import { useContext, useEffect, useState } from "react";
import PayHistoryRow from "./PayHistoryRow";
import { AuthContext } from "../../../Providers/AuthProvider";

const PayHistory = () => {
    const [datas, setData] = useState(null);
    const {user} = useContext(AuthContext);
    console.log('auth user', user);

    useEffect(() => {
        fetch(`http://localhost:5000/payments?email=${user?.email}`)
            .then(res => res.json())
            .then(datas => setData(datas));
    }, []);

    return (
        <div className="mx-20">
            <h2 className="text-2xl font-bold">Payment history {datas && datas.length}</h2>
            <table className="min-w-full divide-y bg-slate-500">
                <thead>
                    <tr>
                        <th className="py-3 px-6  bg-slate-900 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">USER NAME</th>
                        <th className="py-3 px-6  bg-slate-900 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NAME COURSE</th>
                        <th className="py-3 px-6  bg-slate-900 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">USER EMAIL</th>
                        <th className="py-3 px-6  bg-slate-900 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PRICE</th>
                        <th className="py-3 px-6  bg-slate-900 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                        <th className="py-3 px-6  bg-slate-900 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TRANSACTION ID</th>
                        {/* Add more table headers here */}
                    </tr>
                </thead>
                <tbody className="bg-slate-900 divide-y">
                    {datas?.map(data => (
                        <PayHistoryRow key={data._id} data={data} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PayHistory;

