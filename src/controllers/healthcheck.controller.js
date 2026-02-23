import { ApiResponse } from "../utils/api-response.js"
import { asyncHandler } from "../utils/async-handler.js"
/*
const healthcheck = (req,res)=>{
  try {
    return res.json(
        new ApiResponse(200, {
             message: 'Server is running '
        })
    )
  } catch (error) {
    
  }
}
*/
const healthCheck = asyncHandler(async (req,res)=>{
    return res.json(
        new ApiResponse(200, {
             message: 'Server is running '
        })
    )
})
export default healthCheck