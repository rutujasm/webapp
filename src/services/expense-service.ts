import apiClient from "../config/api-client"

export const getExpenses=()=>{
    return apiClient.get('/expenses')
}