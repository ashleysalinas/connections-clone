import { Outlet } from "react-router-dom";
function Create() {

    return(
        <>
        <div>
            <h1>
            This is the Create Page
            </h1>
            <Outlet />
        </div>
        </>
    )
}

export default Create;