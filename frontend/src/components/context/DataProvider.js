import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [employees, setUsers] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get("http://localhost:8000/user/getAll");
                setUsers(response.data.data);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };

        fetchEmployees();
    }, [employees]);

    return (
        <DataContext.Provider
            value={{
                employees,
                setUsers
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;