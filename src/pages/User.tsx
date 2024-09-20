import React from "react";
import { useParams } from "react-router-dom";

type UserParams = {
    id?: string;  // string | undefined 타입을 명시
};

const User: React.FC = () => {
    const { id } = useParams<UserParams>();

    return <h1>User ID: {id}</h1>;
};

export default User;
