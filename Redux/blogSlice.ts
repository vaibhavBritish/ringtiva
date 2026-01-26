import { createSlice } from "@reduxjs/toolkit"

interface Blogs{
    title:string,
    description:string,
    content:string,
    image:string,
    slug:string,
    id:string
}

interface BlogState{
    blogs:Blogs[]
}

const initialState:BlogState={
    blogs:[]
}

const blogSlice = createSlice({
    name:"blogs",
    initialState,
    reducers:{
        addBlog(state,action){
            state.blogs.push(action.payload)
        },
        setBlog(state,action){
            state.blogs = action.payload
        },
        deleteBlog(state,action){
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload)
        },
        updateBlog(state,action){
            state.blogs = state.blogs.map(blog => blog.id === action.payload.id ? action.payload : blog)
        }
    }
})

export const {addBlog,deleteBlog,setBlog,updateBlog} = blogSlice.actions
export default blogSlice.reducer