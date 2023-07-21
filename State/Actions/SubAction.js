import axios from 'axios'
import { GET_ALL_SUBS_FAIL, GET_ALL_SUBS_REQUEST, GET_ALL_SUBS_SUCCESS,GET_SUB_REQUEST,GET_SUB_SUCCESS,GET_SUB_FAIL, ADD_SUB_REQUEST, ADD_SUB_SUCCESS, ADD_SUB_FAIL, DELETE_SUB_REQUEST, DELETE_SUB_SUCCESS, DELETE_SUB_FAIL, UPDATE_SUB_REQUEST, UPDATE_SUB_SUCCESS, UPDATE_SUB_FAIL } from '../Constants/SubConstants'

//get all SUBs
export const get_all_subs_action =(token) => async dispatch =>{
    dispatch({type:GET_ALL_SUBS_REQUEST})
    try {
        const {data} = await axios.get("/api/sub/get-all-subs",{
            headers:{
                token
            }
        });
        dispatch({type:GET_ALL_SUBS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_ALL_SUBS_FAIL,payload:error.response})
    }
}

//get SUB
export const get_sub_action =(token,id) => async dispatch =>{
    dispatch({type:GET_SUB_REQUEST})
    try {
        const {data} = await axios.get("/api/sub/get-sub",{
            headers:{
                token
            },
            params:{
                id
            }
        });
        dispatch({type:GET_SUB_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_SUB_FAIL,payload:error.response})
    }
}

//add SUB
export const add_sub_action =(token,info) => async dispatch =>{
    dispatch({type:ADD_SUB_REQUEST})
    try {
        const {data} = await axios.post("/api/sub/create-sub",info,{
            headers:{
                token
            }
        });
        dispatch({type:ADD_SUB_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ADD_SUB_FAIL,payload:error.response})
    }
}
//add SUB
export const update_sub_action =(token,info) => async dispatch =>{
    dispatch({type:UPDATE_SUB_REQUEST})
    try {
        const {data} = await axios.post("/api/sub/update-sub",info,{
            headers:{
                token
            }
        });
        dispatch({type:UPDATE_SUB_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:UPDATE_SUB_FAIL,payload:error.response})
    }
}
//delete SUB
export const delete_sub_action =(token,id) => async dispatch =>{
    dispatch({type:DELETE_SUB_REQUEST})
    try {
        const {data} = await axios.delete("/api/sub/delete-sub",{
            headers:{
                token
            },
            params:{
                id
            }
        });
        dispatch({type:DELETE_SUB_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:DELETE_SUB_FAIL,payload:error.response})
    }
}