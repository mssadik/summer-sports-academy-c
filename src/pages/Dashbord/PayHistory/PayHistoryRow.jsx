const PayHistoryRow = ({ data }) => {
    console.log(data);
    const { name, price, transactionId, userEmail, userName, date } = data;
    return (
        <tr>
            <td className="py-4 px-6 border-b border-gray-200">{userName}</td>
            <td className="py-4 px-6 border-b border-gray-200">{name}</td>
            <td className="py-4 px-6 border-b border-gray-200">{userEmail}</td>
            <td className="py-4 px-6 border-b border-gray-200">{price}</td>
            <td className="py-4 px-6 border-b border-gray-200">{date}</td>
            <td className="py-4 px-6 border-b border-gray-200">{transactionId}</td>
        </tr>
    );
};

export default PayHistoryRow;
