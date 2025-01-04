import toast from "react-hot-toast";
export function On_Success(message)
{
    toast.success(message);
}

export function On_Error(message)
{
    toast.error(message);
}